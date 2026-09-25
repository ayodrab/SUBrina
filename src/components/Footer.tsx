import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120520] text-[#fdf4ff] border-t-2 border-[#2e1065] py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-xs font-medium text-[#fdf4ff]/70 text-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧸</span>
          <span>
            © {new Date().getFullYear()} <strong>SUBrina</strong> · Built with love by <strong>Burcu & Ayo</strong> 💖
          </span>
        </div>
      </div>
    </footer>
  );
};
