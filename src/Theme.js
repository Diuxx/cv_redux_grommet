// app theme
const Theme = {
    global: {
      font: {
        family: "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      },
      colors: {
        'grey-light': '#f2f2f2',
        'gery-light-1': '#A6ACAF',
        'light-grey-2': '#B2BABB',
        'light-red': '#FF5733',
        'light-green': '#2ECC71', 
        'light-blue': '#3498DB',
        'light-yellow': '#F4D03F',
        'light-black': '#2C3E50 ',
        'light-purple': '#A569BD',
        'light-orange': '#F5B041'
      },
    meter: {
        extend: {
          'min-width': '32px',
          'min-height': '32px'
        }
      },
      breakpoints: {
        "small": {
          "value": 1290
        }
      }
    }
};

export default Theme;