module.exports = {
  content: ["./src/**/*.{js,jsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        border: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

    },
  },
  plugins: [ require('flowbite/plugin')],
};
