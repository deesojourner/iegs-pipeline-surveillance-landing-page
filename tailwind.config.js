/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          orange: '#1A9A00',
          'orange-light': '#2BC418',
          'orange-muted': '#127000',
          cyan: '#0284c7',
          'cyan-muted': '#0369a1',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'data-flow': 'dataFlow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        dataFlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(26, 154, 0, 0.08)' },
          '100%': { boxShadow: '0 0 40px rgba(26, 154, 0, 0.15)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.08' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse at center, rgba(26, 154, 0, 0.06) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
    },
  },
  plugins: [],
};
