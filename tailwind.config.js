module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'yuge': '1700px',
      },
    },
    screens: {
      'puny-ass-screen': '360px',
      // => @media (min-width: 640px) { ... }
      "tiny-screen": "440px",
      "sm": "600px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },

  },
  variants: {
    extend: {
      textColor: ["active"],
      brightness: ["active", "hover"],
      filter: ["active"],
    },
  },
  plugins: [],
}
