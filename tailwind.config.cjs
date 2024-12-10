/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    
    theme:{
      fontSize:{
        xs: "12px",
        sm: "14px",
        base: "16px", 
        lg: "18px", 
        xl: "20px",
        "2xl":"24px",
        "3xl": "32px",
        "4xl": "36px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "52px",
        "8xl": "64px",
      }
    },
    
    theme:{
      spacing:{
        0.5:"2px",
        1:"4px",
        2:"6px",
        3:"8px",
        4:"10px",
        5:"12px",
        6:"14px",
        7:"16px",
        8:"18px",
        9:"20px",
        10:"24px",
        11:"28px",
        12:"32px",
        13:"36px",
        14:"40px",
        15:"46px",
        16:"48px",
        17:"54px",
        18:"56px",
        19:"64px",
        20:"80px",
      }
    },

    extend:{
      fontFamily:{
        display:['Gabarito','sans-serif'], //Add font as font-display
        body:['DM Sans','sans-serif'], // Add font as font-body
      }
    },

   
};