/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        widget: {
          background: 'hsl(var(--widget-background))',
          border: 'hsl(var(--widget-border))'
        },
        foreground: 'hsl(var(--foreground))',
        border: {
          btn: 'hsl(var(--border-btn))'
        }
      }
    }
  },
  plugins: []
};
