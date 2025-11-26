/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [{ pattern: /^(text|border|focus:ring|bg|hover:bg)-./ }],
    theme: { extend: {} },
    plugins: [],
}
