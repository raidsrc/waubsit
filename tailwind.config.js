module.exports = {
  content: [
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'gray-450': 'rgb(140, 150, 160)',
        'gray-449': 'rgb(145, 155, 165)',
        "karkat-blood-red": 'rgb(255,0,0)',
        "brighter-red": 'rgb(255,70,70)',
      },
      width: {
        '400px': '400px',
        '900px': '900px',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '50vh': '50vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
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
      },
      dropShadow: {
        'raid-icon': '2px 3px 1px rgba(255, 0, 0, 0.3)',
      }
    },
    screens: {
      'puny-ass-screen': '360px',
      // => @media (min-width: 640px) { ... }
      "tiny-screen": "440px",
      "sm": "600px",
      "smmd": "660px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },

  },
  plugins: [],
}
