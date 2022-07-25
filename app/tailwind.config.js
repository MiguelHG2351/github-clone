/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
      preflight: false,
    },
    content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          colors: {
            'gray-state': 'rgba(39, 48, 63, 1)',
            'gray-light': 'rgba(100, 116, 139, 1)',
            'gray-blue': '#F1F5F9',
            'blue-dark': 'rgba(26, 32, 46, 1)'
          },
          spacing: {
            '4.5': '18px',
          }
        },
    },
    plugins: [],
};
