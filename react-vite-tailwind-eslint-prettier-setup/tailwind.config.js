module.exports = {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './pages/**/*.{js,jsx,ts,tsx,vue,html}',
  ],
  // mode: 'jit', // <--- enable JIT
  // purge: ['./src/**/*.{vue,js,ts,jsx,tsx,html}', './pages/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'auto-white': '#F7F7FF',
        important: '#279AF1',
        'light-important': '#23B5D3',
        main: '#1A4ED2',
        background: '#19253E',
        hightlight: '#EA526F',
        'auto-black': '#070600',
      },
      fontFamily: {
        'font-inter': ['inter', 'san-serif'],
      },
      fontSize: {
        large: '22px',
        verylarge: '30px',
      },
    },
  },
  plugins: [],
};
