import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Volume2, Heart, Zap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Dancer {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  speed: number;
  color: string;
  avatar: string;
  bounceOffset: number;
  hitTimer: number;
  lastNudgeTime: number;
  nudgeMsg: string;
  nudgeMsgTimer: number; // 0 to 1, decreases slowly so message stays readable
  bubbleColor: string;
  wanderTimer: number;
}

interface Wave {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  type: 'sub' | 'horn';
  speed: number;
  lineWidth: number;
  opacity: number;
}

interface DancerPulse {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  speed: number;
  alpha: number;
}

const POLITE_MESSAGES = [
  'Sorry bestie! 💖',
  'Excuse me! ✨',
  'Pardon! 🎶',
  'Go get that bass! 💥',
  'After you! 🦄',
  'Dancing through! 💃',
  'Whoops! Hug the subs! 🔊',
  'Watch your drink! 🥤',
  'Sweet rave vibes! 🎀',
  'Pardon me, friend! ⚡',
];

const BUBBLE_COLORS = ['#fde047', '#ec4899', '#38bdf8', '#a7f3d0', '#fbcfe8'];

export const DancefloorSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Minigame States
  const [gentlePushes, setGentlePushes] = useState<number>(0);
  const [reachedFront, setReachedFront] = useState<boolean>(false);
  const [proximityPercent, setProximityPercent] = useState<number>(0);

  // Player state refs (for smooth 60fps loop)
  const playerRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    targetX: number | null;
    targetY: number | null;
    avatar: string;
    isDragging: boolean;
    lastPenaltyTime: number;
    recoilFlash: number;
  }>({
    x: 300,
    y: 420,
    vx: 0,
    vy: 0,
    targetX: null,
    targetY: null,
    avatar: '😎',
    isDragging: false,
    lastPenaltyTime: 0,
    recoilFlash: 0,
  });

  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const wavesRef = useRef<Wave[]>([]);
  const dancerPulsesRef = useRef<DancerPulse[]>([]);
  const dancersRef = useRef<Dancer[]>([]);
  const animFrameIdRef = useRef<number>(0);
  const isWonRef = useRef<boolean>(false);
  const dancerCount = 18; // Fewer dancers with generous space, but high 1/3-screen recoil penalty!

  // Initialize dancers with wandering positions & much slower gentle groove
  const initDancers = (width: number, height: number) => {
    const avatars = ['👾', '💖', '⚡', '✨', '🎀', '🎧', '🐾', '🦄', '💃', '🕺', '🍄', '🐱', '🦋'];
    const colors = ['#f43f5e', '#ec4899', '#fde047', '#38bdf8', '#c084fc', '#34d399'];
    const list: Dancer[] = [];

    const floorTop = height * 0.28;
    const floorBottom = height * 0.84;
    const floorLeft = width * 0.10;
    const floorRight = width * 0.90;

    for (let i = 0; i < dancerCount; i++) {
      const x = floorLeft + Math.random() * (floorRight - floorLeft);
      const y = floorTop + Math.random() * (floorBottom - floorTop);
      list.push({
        id: i,
        x,
        y,
        baseX: x,
        baseY: y,
        targetX: x,
        targetY: y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        speed: 0.22 + Math.random() * 0.22, // Moves much more slowly
        color: colors[i % colors.length],
        avatar: avatars[i % avatars.length],
        bounceOffset: Math.random() * Math.PI * 2,
        hitTimer: 0,
        lastNudgeTime: 0,
        nudgeMsg: '',
        nudgeMsgTimer: 0,
        bubbleColor: BUBBLE_COLORS[i % BUBBLE_COLORS.length],
        wanderTimer: 120 + Math.random() * 220,
      });
    }
    dancersRef.current = list;
    dancerPulsesRef.current = [];
  };

  // Reset player to entrance
  const resetPlayerToEntrance = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    playerRef.current.x = width / 2;
    playerRef.current.y = height * 0.88;
    playerRef.current.vx = 0;
    playerRef.current.vy = 0;
    playerRef.current.targetX = null;
    playerRef.current.targetY = null;
    playerRef.current.isDragging = false;
    isWonRef.current = false;
    setReachedFront(false);
  };

  // Automatic Sound Waves - Thinner, subtle, rhythmic wavefronts
  const spawnAutomaticSubWave = (width: number, height: number) => {
    wavesRef.current.push({
      id: Date.now() + Math.random(),
      x: width / 2,
      y: height * 0.18,
      radius: 8,
      maxRadius: Math.max(width, height) * 0.92,
      color: '#f43f5e',
      type: 'sub',
      speed: 4.2,
      lineWidth: 1.5,
      opacity: 0.55,
    });
  };

  const spawnAutomaticHornWave = (width: number, height: number) => {
    const leftHornX = width * 0.28;
    const rightHornX = width * 0.72;
    const hornY = height * 0.18;

    wavesRef.current.push({
      id: Date.now() + 1,
      x: leftHornX,
      y: hornY,
      radius: 8,
      maxRadius: height * 0.88,
      color: '#fde047',
      type: 'horn',
      speed: 5.4,
      lineWidth: 1.2,
      opacity: 0.45,
    });

    wavesRef.current.push({
      id: Date.now() + 2,
      x: rightHornX,
      y: hornY,
      radius: 8,
      maxRadius: height * 0.88,
      color: '#fde047',
      type: 'horn',
      speed: 5.4,
      lineWidth: 1.2,
      opacity: 0.45,
    });
  };

  // Canvas setup & keyboard event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = Math.max(440, Math.min(560, rect.width * 0.65)) * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${canvas.height / dpr}px`;
      ctx.scale(dpr, dpr);

      initDancers(rect.width, canvas.height / dpr);
      if (!isWonRef.current) {
        playerRef.current.x = rect.width / 2;
        playerRef.current.y = (canvas.height / dpr) * 0.88;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      keysPressed.current[e.key.toLowerCase()] = true;
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
      keysPressed.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Automatic musical rhythm waves (every ~950ms alternating sub & horn)
    let beatCount = 0;
    const waveTimer = setInterval(() => {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvasEl.width / dpr;
      const height = canvasEl.height / dpr;

      if (beatCount % 2 === 0) {
        spawnAutomaticSubWave(width, height);
      } else {
        spawnAutomaticHornWave(width, height);
      }
      beatCount++;
    }, 950);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(waveTimer);
    };
  }, []);

  // Main 60 FPS Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.05;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Stage / DJ Booth Dimensions
      const boothW = Math.min(420, width * 0.72);
      const boothX = (width - boothW) / 2;
      const boothY = 14;
      const boothH = 68;
      const sweetSpotY = boothY + boothH + 42;

      // 1. Process Player Input & Physics
      const player = playerRef.current;
      const baseSpeed = 2.8; // slightly dialed for challenge
      let moveX = 0;
      let moveY = 0;

      if (keysPressed.current['arrowup'] || keysPressed.current['w']) moveY -= 1;
      if (keysPressed.current['arrowdown'] || keysPressed.current['s']) moveY += 1;
      if (keysPressed.current['arrowleft'] || keysPressed.current['a']) moveX -= 1;
      if (keysPressed.current['arrowright'] || keysPressed.current['d']) moveX += 1;

      // Touch / Mouse continuous following
      if (player.targetX !== null && player.targetY !== null) {
        const dx = player.targetX - player.x;
        const dy = player.targetY - player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 6) {
          moveX = dx / dist;
          moveY = dy / dist;
        } else if (!player.isDragging) {
          player.targetX = null;
          player.targetY = null;
        }
      }

      // Normalize diagonal movement
      if (moveX !== 0 && moveY !== 0) {
        moveX *= 0.7071;
        moveY *= 0.7071;
      }

      player.vx += moveX * baseSpeed * 0.35;
      player.vy += moveY * baseSpeed * 0.35;

      // Friction
      player.vx *= 0.82;
      player.vy *= 0.82;

      player.x += player.vx;
      player.y += player.vy;

      // Bounds
      const minX = 22;
      const maxX = width - 22;
      const minY = sweetSpotY - 8;
      const maxY = height - 22;

      player.x = Math.max(minX, Math.min(maxX, player.x));
      player.y = Math.max(minY, Math.min(maxY, player.y));

      // Calculate proximity to front-row sweet spot
      const totalDist = height * 0.88 - sweetSpotY;
      const currentDist = player.y - sweetSpotY;
      const progress = Math.max(0, Math.min(100, Math.round(((totalDist - currentDist) / totalDist) * 100)));
      setProximityPercent(progress);

      // Check if player reached the front row!
      if (player.y <= sweetSpotY + 12 && !isWonRef.current) {
        isWonRef.current = true;
        setReachedFront(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#ec4899', '#fde047', '#38bdf8', '#c084fc', '#4ade80']
        });
      }

      // 2. Clear canvas with dark cyber dancefloor
      ctx.fillStyle = '#140523';
      ctx.fillRect(0, 0, width, height);

      // Floor Grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 28;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Front-Row "SWEET SPOT" Bass Hug Glow Zone
      ctx.save();
      const gradient = ctx.createRadialGradient(
        width / 2,
        sweetSpotY + 8,
        15,
        width / 2,
        sweetSpotY + 8,
        130
      );
      gradient.addColorStop(0, 'rgba(236, 72, 153, 0.32)');
      gradient.addColorStop(0.6, 'rgba(253, 224, 71, 0.12)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(width * 0.12, sweetSpotY - 14, width * 0.76, 68);

      ctx.strokeStyle = 'rgba(253, 224, 71, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(width * 0.18, sweetSpotY - 10, width * 0.64, 48);
      ctx.setLineDash([]);
      ctx.fillStyle = '#fde047';
      ctx.font = '900 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ FRONT ROW BASS HUG ZONE (GOAL) ⚡', width / 2, sweetSpotY + 18);
      ctx.restore();

      // 3. Draw DJ Booth (BURCU & AYO B2B)
      ctx.fillStyle = '#221038';
      ctx.strokeStyle = '#351656';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(boothX, boothY, boothW, boothH, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fde047';
      ctx.font = '900 12px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('DJ BOOTH // BURCU & AYO B2B', width / 2, boothY + 22);

      ctx.font = '16px sans-serif';
      ctx.fillText('🎧', width / 2 - 28, boothY + 46);
      ctx.fillText('🎛️', width / 2, boothY + 46);
      ctx.fillText('🎧', width / 2 + 28, boothY + 46);

      // 4. 2 SAWMOD Tops
      const leftHornX = boothX + 35;
      const rightHornX = boothX + boothW - 35;
      const hornY = boothY + boothH + 10;

      // Left Horn
      ctx.fillStyle = '#ec4899';
      ctx.strokeStyle = '#fde047';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(leftHornX - 22, hornY - 10, 44, 28, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 9px monospace';
      ctx.fillText('SAWMOD', leftHornX, hornY + 6);

      // Right Horn
      ctx.fillStyle = '#ec4899';
      ctx.strokeStyle = '#fde047';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(rightHornX - 22, hornY - 10, 44, 28, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 9px monospace';
      ctx.fillText('SAWMOD', rightHornX, hornY + 6);

      // 5. 4 Horner Audio 18" Subs
      const subCenterX = width / 2;
      const subY = boothY + boothH + 10;
      const subW = 26;
      const subGap = 8;
      const totalSubsW = 4 * subW + 3 * subGap;
      const startSubX = subCenterX - totalSubsW / 2;

      for (let s = 0; s < 4; s++) {
        const sx = startSubX + s * (subW + subGap);
        ctx.fillStyle = '#38bdf8';
        ctx.strokeStyle = '#1e0538';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(sx, subY - 6, subW, 24, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1e0538';
        ctx.font = '900 8px monospace';
        ctx.fillText('18"', sx + subW / 2, subY + 9);
      }

      // 6. Subtle, Thin Rhythmic Sound Waves
      const nextWaves: Wave[] = [];
      for (const wave of wavesRef.current) {
        wave.radius += wave.speed;
        const prog = wave.radius / wave.maxRadius;
        const alpha = Math.max(0, 1 - prog);

        ctx.save();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.globalAlpha = alpha * wave.opacity;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Wave collision with dancers & player
        for (const dancer of dancersRef.current) {
          const dx = dancer.x - wave.x;
          const dy = dancer.y - wave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - wave.radius) < 16) {
            if (dancer.hitTimer <= 0.12) {
              dancer.hitTimer = 1.0;
              // When bass hits, dancer gives a tiny energetic jump
              dancer.vy -= 0.25;
              // Secondary cascading acoustic pulse ripple expanding outward!
              dancerPulsesRef.current.push({
                id: Math.random() + Date.now(),
                x: dancer.x,
                y: dancer.y,
                radius: 4,
                maxRadius: 30,
                color: wave.color,
                speed: 1.6,
                alpha: 0.65,
              });
            }
          }
        }

        if (wave.radius < wave.maxRadius) {
          nextWaves.push(wave);
        }
      }
      wavesRef.current = nextWaves;

      // 6.5 Render Cascading Dancer Secondary Pulses
      const nextPulses: DancerPulse[] = [];
      for (const pulse of dancerPulsesRef.current) {
        pulse.radius += pulse.speed;
        const prog = pulse.radius / pulse.maxRadius;
        const alpha = Math.max(0, (1 - prog) * pulse.alpha);

        ctx.save();
        ctx.strokeStyle = pulse.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        if (pulse.radius < pulse.maxRadius) {
          nextPulses.push(pulse);
        }
      }
      dancerPulsesRef.current = nextPulses;

      // 7. Update & Render Dancers with Slow Movement + 1/3 SCREEN PUSH-BACK PENALTY
      const now = Date.now();
      const speechBubblesToRender: Array<{
        x: number;
        y: number;
        text: string;
        bgColor: string;
        alpha: number;
      }> = [];

      for (const dancer of dancersRef.current) {
        // Active crowd wandering & dancing (much slower & calmer)
        dancer.wanderTimer -= 1;
        if (dancer.wanderTimer <= 0) {
          dancer.wanderTimer = 160 + Math.random() * 240;
          // Pick a nearby gentle wandering spot
          const wanderRadius = 32;
          dancer.targetX = Math.max(width * 0.10, Math.min(width * 0.90, dancer.baseX + (Math.random() - 0.5) * wanderRadius * 2));
          dancer.targetY = Math.max(height * 0.28, Math.min(height * 0.84, dancer.baseY + (Math.random() - 0.5) * wanderRadius * 2));
        }

        // Steer slowly toward wandering target
        const tdx = dancer.targetX - dancer.x;
        const tdy = dancer.targetY - dancer.y;
        const tdist = Math.sqrt(tdx * tdx + tdy * tdy);
        if (tdist > 3) {
          dancer.vx += (tdx / tdist) * 0.02 * dancer.speed;
          dancer.vy += (tdy / tdist) * 0.02 * dancer.speed;
        }

        // Slow, relaxed groove
        const grooveAmp = dancer.hitTimer > 0.2 ? 2.5 : 1.6;
        const grooveX = Math.sin(time * 1.5 + dancer.bounceOffset) * grooveAmp;
        const grooveY = Math.cos(time * 2.0 + dancer.bounceOffset) * grooveAmp;

        // DANCER-TO-PLAYER COLLISION: PUSHES PLAYER BACK A THIRD OF THE SCREEN!
        const dx = dancer.x - player.x;
        const dy = dancer.y - player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const touchRadius = 26;

        if (dist < touchRadius && dist > 0.001) {
          if (now - player.lastPenaltyTime > 1100) {
            player.lastPenaltyTime = now;
            player.recoilFlash = 1.0;

            // PUSH BACK ONE THIRD OF THE SCREEN!
            const penaltyY = height * 0.33;
            player.y = Math.min(height * 0.88, player.y + penaltyY);
            player.vy = 4.2; // heavy recoil downwards

            // Clear drag target so drag gesture doesn't instantly pull them forward
            player.targetX = null;
            player.targetY = null;
            player.isDragging = false;

            // Push dancer away gently
            const angle = Math.atan2(dy, dx);
            dancer.vx += Math.cos(angle) * 1.2;
            dancer.vy += Math.sin(angle) * 1.2;

            // Trigger polite message
            dancer.lastNudgeTime = now;
            dancer.nudgeMsg = POLITE_MESSAGES[Math.floor(Math.random() * POLITE_MESSAGES.length)];
            dancer.nudgeMsgTimer = 1.0;
            setGentlePushes((p) => p + 1);
          }
        }

        // Dancer-to-Dancer soft avoidance (prevents them from all clumping into 1 dot)
        for (const other of dancersRef.current) {
          if (other.id !== dancer.id) {
            const cdx = dancer.x - other.x;
            const cdy = dancer.y - other.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            if (cdist < 24 && cdist > 0.001) {
              const repel = (24 - cdist) * 0.025;
              dancer.vx += (cdx / cdist) * repel;
              dancer.vy += (cdy / cdist) * repel;
            }
          }
        }

        // Dampening
        dancer.vx *= 0.86;
        dancer.vy *= 0.86;

        dancer.x += dancer.vx;
        dancer.y += dancer.vy;

        // Keep dancers inside dancefloor
        dancer.x = Math.max(width * 0.08, Math.min(width * 0.92, dancer.x));
        dancer.y = Math.max(height * 0.28, Math.min(height * 0.85, dancer.y));

        // Render Dancer Avatar (NO ugly yellow circle! Clean avatar with subtle beat bounce)
        let scale = 1.0;
        if (dancer.hitTimer > 0) {
          scale = 1.0 + dancer.hitTimer * 0.12;
          dancer.hitTimer -= 0.025;
        }

        ctx.save();
        ctx.translate(dancer.x + grooveX, dancer.y + grooveY);
        ctx.scale(scale, scale);

        // Drop shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 11, 9, 4.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Emoji avatar
        ctx.font = '17px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dancer.avatar, 0, 0);
        ctx.restore();

        // Queue speech bubble if active (slow countdown: ~3 seconds on screen so it's easily readable)
        if (dancer.nudgeMsgTimer > 0) {
          // Decrement slowly: 0.0055 per frame at 60fps = ~180 frames = ~3.0 full seconds!
          dancer.nudgeMsgTimer -= 0.0055;
          const alpha = dancer.nudgeMsgTimer > 0.15 ? 1.0 : dancer.nudgeMsgTimer / 0.15;
          speechBubblesToRender.push({
            x: dancer.x + grooveX,
            y: dancer.y + grooveY - 26,
            text: dancer.nudgeMsg,
            bgColor: dancer.bubbleColor,
            alpha,
          });
        }
      }

      // 8. Render Highly Readable Speech Bubbles on Top Layer
      for (const bubble of speechBubblesToRender) {
        ctx.save();
        ctx.globalAlpha = bubble.alpha;
        ctx.font = 'bold 11px ui-sans-serif, system-ui, sans-serif';
        const metrics = ctx.measureText(bubble.text);
        const textWidth = metrics.width;
        const boxPaddingX = 8;
        const boxHeight = 22;
        const boxWidth = textWidth + boxPaddingX * 2;
        const boxX = bubble.x - boxWidth / 2;
        const boxY = bubble.y - boxHeight;

        // Speech bubble pill
        ctx.fillStyle = bubble.bgColor;
        ctx.strokeStyle = '#1e0538';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 10);
        ctx.fill();
        ctx.stroke();

        // Little speech bubble pointer triangle
        ctx.beginPath();
        ctx.moveTo(bubble.x - 4, boxY + boxHeight);
        ctx.lineTo(bubble.x, boxY + boxHeight + 5);
        ctx.lineTo(bubble.x + 4, boxY + boxHeight);
        ctx.closePath();
        ctx.fillStyle = bubble.bgColor;
        ctx.fill();
        ctx.stroke();

        // Text inside speech bubble
        ctx.fillStyle = '#1e0538';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(bubble.text, bubble.x, boxY + boxHeight / 2);
        ctx.restore();
      }

      // 9. Render Player (YOU)
      ctx.save();
      ctx.translate(player.x, player.y);

      // Glowing player indicator ring
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#ec4899';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.stroke();

      // Outer animated pulse ring
      const pulseSize = 18 + Math.sin(time * 5) * 4;
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
      ctx.stroke();

      // Shadow
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.beginPath();
      ctx.ellipse(0, 12, 11, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Player avatar
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(player.avatar, 0, 0);

      // "YOU" Label
      ctx.fillStyle = '#fde047';
      ctx.font = '900 10px monospace';
      ctx.fillText('✨ YOU ✨', 0, -23);

      ctx.restore();

      // Render Recoil Shock Indicator if penalized
      if (player.recoilFlash > 0) {
        player.recoilFlash -= 0.025;
        ctx.save();
        ctx.strokeStyle = `rgba(244, 63, 94, ${player.recoilFlash})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(player.x, player.y, 20 + (1 - player.recoilFlash) * 32, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = `rgba(244, 63, 94, ${Math.min(1, player.recoilFlash * 1.5)})`;
        ctx.font = '900 11px ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.fillText('⚠️ PUSHED BACK! -33%', player.x, player.y + 36);
        ctx.restore();
      }

      // Next frame
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  // Seamless Touch & Drag Handlers on the Canvas
  const updateTouchPosition = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    playerRef.current.targetX = x;
    playerRef.current.targetY = y;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    playerRef.current.isDragging = true;
    updateTouchPosition(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (playerRef.current.isDragging) {
      updateTouchPosition(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    playerRef.current.isDragging = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      playerRef.current.isDragging = true;
      const touch = e.touches[0];
      updateTouchPosition(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updateTouchPosition(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    playerRef.current.isDragging = false;
  };

  return (
    <section id="simulator" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-b-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-end mb-10">
          <div>
            <div className="section-kicker">02 / Playable Dancefloor Minigame</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Weave The Dancefloor<br />
              <em className="text-[#fde047] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                Push & Bounce to the Front.
              </em>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            Dancers sway and groove slowly across the floor. If you bump into someone, they <strong>push you back 1/3 of the screen</strong>! Sound waves create cascading acoustic pulse ripples through the crowd. Use <strong>Touch & Drag</strong>, <strong>Click</strong>, or <strong>WASD / Arrow Keys</strong> to weave through to the 30Hz bass hug!
          </p>
        </div>

        {/* Stage Container */}
        <div className="rounded-[2rem] bg-[#25123d] border-4 border-[#1e0538] shadow-[12px_14px_0_#f43f5e] p-4 sm:p-7 relative overflow-hidden">
          {/* Top Scorebar & Mission Status (Cleaned up: No manual wave buttons, automatic pulsing waves) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-4 border-b border-white/15">
            {/* Mission Indicator */}
            <div className="flex items-center gap-3">
              <span className="pixel-badge pixel-badge-yellow flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#1e0538] fill-[#1e0538]" />
                SLOW CROWD // 1/3 RECOIL
              </span>
              <span className="text-xs font-mono text-[#fdf4ff]/70 hidden sm:inline">
                Acoustic ripples cascade through dancers 🔊
              </span>
            </div>

            {/* Live Minigame Stats & Restart */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-full bg-[#19092b] border border-white/10 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#ec4899] fill-[#ec4899]" />
                <span className="text-[#fdf4ff]/80">Polite Nudges:</span>
                <span className="text-[#fde047] font-bold">{gentlePushes}</span>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-[#19092b] border border-white/10 flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="text-[#fdf4ff]/80">Bass Proximity:</span>
                <span className="text-[#38bdf8] font-bold">{proximityPercent}%</span>
              </div>

              <button
                type="button"
                onClick={resetPlayerToEntrance}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-[#19092b] hover:bg-[#2e1065] text-xs font-bold text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Restart from back of dancefloor"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start from Back</span>
              </button>
            </div>
          </div>

          {/* Interactive Canvas with Touch-To-Move */}
          <div
            ref={containerRef}
            className="w-full rounded-2xl overflow-hidden border-2 border-[#2e1065] relative bg-[#140523] touch-none select-none"
          >
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="block w-full cursor-crosshair select-none"
            />

            {/* Victory Banner Overlay */}
            {reachedFront && (
              <div className="absolute top-24 left-1/2 -translate-x-1/2 p-5 sm:p-6 rounded-2xl bg-[#fde047] text-[#1e0538] border-4 border-[#1e0538] shadow-[8px_8px_0_#f43f5e] text-center z-20 max-w-sm w-[90%] animate-bounce">
                <div className="text-3xl mb-1">🎉 🔊 💖</div>
                <div
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  BASS HUG UNLOCKED!
                </div>
                <p className="text-xs font-bold mt-1 text-[#1e0538]/90 leading-relaxed">
                  You conquered the packed crowd! Burcu & Ayo welcome you right to the front row for the effortless 30Hz chest bass hug.
                </p>
                <div className="mt-4 flex gap-2 justify-center">
                  <button
                    type="button"
                    onClick={resetPlayerToEntrance}
                    className="button-pop button-pop-pink text-xs py-2 px-4 font-black cursor-pointer"
                  >
                    Dance Again 🔄
                  </button>
                </div>
              </div>
            )}

            {/* Controls Helper Badge */}
            <div className="absolute bottom-3 left-3 bg-[#19092b]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-[#fdf4ff] flex items-center gap-2 pointer-events-none">
              <span className="text-[#fde047] font-bold">👆 Controls:</span>
              <span>Touch & Drag or WASD / Arrow Keys</span>
            </div>

            <div className="absolute bottom-3 right-3 bg-[#19092b]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-[#f43f5e] font-bold pointer-events-none">
              ⚠️ Watch out: Bumping pushes you back 1/3 screen!
            </div>
          </div>

          {/* Acoustic Spec Footer */}
          <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#fdf4ff]/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fde047] inline-block shrink-0" />
              <span>
                <strong>Laser Point Horns:</strong> SAWMOD Multiple Entry Horns pulsing high frequencies.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f43f5e] inline-block shrink-0" />
              <span>
                <strong>Horner 18" Subwoofers:</strong> 30 Hz sub waves trigger cascading crowd ripples.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#38bdf8] inline-block shrink-0" />
              <span>
                <strong>Slow Crowd & Recoil:</strong> Slower ravers with a 1/3-screen pushback penalty if you collide.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
