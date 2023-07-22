/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ligthshadow: "0px 0px 20px rgba(168, 168, 168, 0.15)"
      },
      backgroundImage: {
        bgWhite: "url('../src/assets/bgWhite.png')",
        bgIMG: "url('../src/assets/bgIMG.png')"
      },
      fontFamily: {
        "DM-sans": ["DM Sans", "sans-serif"]
      },
      backgroundColor: {
        skin: {
          "primary-color": withOpacity("--primary-color"),
          "secondary-color": withOpacity("--secondary-color"),
          "black-color": withOpacity("--black-color"),
          "lightGray-color": withOpacity("--lightGray-color"),
          "gray-color": withOpacity("--gray-color"),
          "brown-color": withOpacity("--brown-color"),
          "white-color": withOpacity("--white-color"),          
        }
      },
      textColor: {
        skin: {
          "gray-color": withOpacity("--gray-color"),
          "secondary-color": withOpacity("--secondary-color"), 
          "white-color": withOpacity("--white-color"),      
          "black-color": withOpacity("--black-color"),
        }
      },
      screens: {
        "msm": "450px" ,
        "md2": "900px",
        "3xl": "2000px", 
      }
    },
  },
  plugins: [],
}

