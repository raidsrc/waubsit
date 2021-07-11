module.exports = {
  purge: [
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-450': 'rgb(140, 150, 160)',
        'gray-449': 'rgb(145, 155, 165)',
      },
      width: {
        '400px': '400px',
        '900px': '900px',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      maxWidth: {
        '2xs': '280px',
        'yuge': '1700px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
      }
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
      textColor: ["active", "visited"],
      brightness: ["active", "hover"],
      filter: ["active"],
    },
  },
  plugins: [],
}
