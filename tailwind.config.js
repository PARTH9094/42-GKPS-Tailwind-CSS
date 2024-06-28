/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg_img': "url('./images/bg.png')",

      }, colors: {
        primary: '#F19F30',
        'primary-1':'#DF8204',
        secondary: '#364C4C',
        text_color2: '#14141499',
        bg_color: '#254D4D1A',
        bg_color2: '#254D4D',
        bg_color3: '#F5F5F5',
        bg_color4: '#FCF8F2',
        bg_color5: '#F1DDC1',
        text_p: '#313131',
        btn_col: '#7AA9A7',
        border:'#C0C0C0'
      }, fontFamily: {
        'Inter': ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}

