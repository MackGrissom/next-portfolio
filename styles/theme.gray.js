const colors = require('tailwindcss/colors')

const theme = {
  // Primary color - Teal
  alpha: colors.teal,
  // Secondary color - Amber (for contrast)
  beta: colors.amber,
  // Accent color
  accent: colors.teal,
  // Neutral color
  omega: colors.slate, // Using slate instead of zinc for better contrast
  // High contrast color for achievements
  highlight: colors.white,
}

module.exports = theme
