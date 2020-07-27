// Optional to add. You could also add it to another file
const colors = {
  blue: '#61dafb',
  black: {
    100: '#282c34',
    200: '#20232a'
  },
  gray: {
    100: '#e1e1e1',
    200: '#6d6d6d'
  },
  white: '#fff'
}

export const Theme = {
  /*-- COLORS --*/

  // Brand Colors
  primaryColor: colors.blue,
  secondaryColor: colors.black[100],
  tirtiaryColor: colors.white,

  // Text Color
  primaryTextColor: colors.white,
  secondarydTestColor: colors.gray[200],

  // Button Colors
  primaryHoverColor: colors.black[100],
  secondaryHoverColor: '#fff'
}
