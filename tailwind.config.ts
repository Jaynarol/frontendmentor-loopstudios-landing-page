import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {
        ...daisyuiThemes['[data-theme=lofi]'],
        primary: 'hsl(0, 0%, 100%)',
        secondary: 'hsl(0, 0%, 55%)',
        accent: 'hsl(0, 0%, 41%)',
      },
    }],
    darkTheme: 'themes',
    logs: false,
  },
}

export default config
