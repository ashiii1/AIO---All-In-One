// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", // Include CSS files
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesque-thin': ['Grotesque Pro Thin', 'sans-serif'],
        'grotesque-reg': ['Grotesque Pro Reg', 'sans-serif'],
        'grotesque-med': ['Grotesque Pro Med', 'sans-serif'],
        'grotesque-bold': ['Grotesque Pro Bold', 'sans-serif'],
        'grotesque-black': ['Grotesque Pro Black', 'sans-serif'],
        'proximanova-thin': ['ProximaNova Condensed Thin', 'sans-serif'],
        'proximanova-med': ['ProximaNova Condensed Med', 'sans-serif'],
        'proximanova-semibold': ['ProximaNova Condensed SemiBold', 'sans-serif'],
        'proximanova-bold': ['ProximaNova Condensed Bold', 'sans-serif'],
        'proximanova-black': ['ProximaNova Condensed Black', 'sans-serif'],
      },
      
      colors: {
        'primary-darkGray': '#333333', // Define your custom color
        'primary-black': '#000000', // Define your custom color
        'primary-white': '#ffffff', // Define your custom color
      },
      screens: {
        'xs': '480px', // Define the xs breakpoint if not already defined
      },
    },
  },
  plugins: [],
};
