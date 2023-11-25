/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors:{
                'facebook-color': '#3b5998',
                'instagram-color': '#C13584',
                'github-color': '#e8eaea'
            },
            backgroundImage: {
                'un-cuarto': "url('/img/hero-pattern.svg')",
            }
        },
    },
    plugins: [],
}

