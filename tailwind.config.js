const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Add the files from which to check classes
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E30613',
          base: '#FFFCE5',
          pink: '#E60064',
          gold: '#A89258',
          blue: '#323044',
          green: '#ADA01F',
          purple: '#702283',
          brown: '#932826',
          orange: '#E84E0F',
        },
        gray: {
          300: '#CCCCCC',
          500: '#999999',
          700: '#666666',
          900: '#333333',
        }
      },
      fontFamily: {
        sans: ['"Graphik Web"', '"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        serif: ['"Canela Text Web"', '"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
        orleans: ['"LifePlus Orleans Web"', ...defaultTheme.fontFamily.serif],
        'arabic-sans': ['"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        'arabic-serif': ['"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.brand.primary'),
            '--tw-prose-counters': theme('colors.brand.primary'),
            '--tw-prose-quote-borders': theme('colors.gray.300'),
            color: theme('colors.black'),
            fontFamily: theme('fontFamily.serif').join(','),
            lineHeight: '1.5rem',
            maxWidth: 'none',
            a: {
              'transition-property': 'color, text-decoration-color',
              'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
              'transition-duration': '150ms',
              color: theme('colors.brand.primary'),
              textDecoration: 'underline',
              fontFamily: theme('fontFamily.sans').join(','),
              '&:hover': {
                color: theme('colors.black'),
                textDecoration: 'none',
              },
            },
            p: {
              marginTop: 0,
              marginBottom: '1.6875rem',
            },
            'ul, ol': {
              listStylePosition: 'inside',
              marginBottom: '1.6875rem',
              paddingLeft: 0,
              '> li': {
                paddingLeft: 0,
                marginTop: 0,
                marginBottom: 0,
                'p:first-child': {
                  display: 'inline',
                },
              },
              '> li::marker': {
                fontFamily: theme('fontFamily.sans').join(','),
              },
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              p: {
                marginTop: 0,
                marginBottom: 0,
              }
            },
            img: {
              marginTop: 0,
              marginBottom: '1.7rem',
            },
            strong: {
              fontWeight: theme('fontWeight.bold'),
            },
            h3: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: '1rem',
              marginBottom: 0,
            },
            h4: {
              fontWeight: theme('fontWeight.bold'),
            },
            blockquote: {
              width: '100%',
              fontStyle: 'normal',
              fontFamily: theme('fontFamily.sans').join(','),
              fontWeight: 'normal',
              paddingLeft: 0,
              paddingTop: theme('spacing.2'),
              borderLeft: 'none',
              margin: '0 auto',
              borderColor: theme('colors.gray.300'),
              borderTopWidth: `1px`,
              borderBottomWidth: `1px`,
              borderRightWidth: 0,
              borderLeftWidth: 0,
            }
          }
        },
      })
    },
  },
  plugins: [
    // require('@tailwindcss/typography')({
    //   className: 'user_content',
    // }),
  ],
}
