import type { Config } from 'tailwindcss'

const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customColor: '#1c1c22', // Add your custom color here
        customColor2: '#cda274',
        customColor3: '#292f36',
      },
    },
  },
  plugins: [
    // Add the @iconify/tailwind plugin
    addDynamicIconSelectors(),
  ],
} satisfies Config