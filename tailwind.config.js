module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
        fontSize: {
         xxs: ['0.5rem', '0.75rem'],
      },
        colors: {
          nOrange: '#ff6454',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      },
    },
  plugins: []
}
