module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
       spin: {
         '0%': { transform: 'rotate(0deg) scale(1,1)' },
         '50%': { transform: 'rotate(180deg) scale(1,1)' },
         '100%': { transform: 'rotate(3600deg) ' },
       }
      },
      animation: {
        spin: 'spin 1s ease-out 0s infinite',
       }
    }
  },
  variants: {
    extend: {
     backgroundColor: ['active'],
     opacity: ['disabled'],
    }
  },
  plugins: [],
}
