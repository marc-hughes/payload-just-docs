/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        table: {
                            width: '100%',
                        },
                        'thead th': {
                            paddingTop: '0.875rem',
                            paddingBottom: '0.875rem',
                            backgroundColor: 'rgb(249 250 251)',
                            borderBottom: '1px solid rgb(229 231 235)',
                        },
                        'tbody td': {
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                            borderBottom: '1px solid rgb(229 231 235)',
                        },
                        'tbody tr': {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'rgb(229 231 235)',
                        },
                        'tbody tr:last-child td': {
                            borderBottom: 'none',
                        },
                        'th, td': {
                            padding: '1rem',
                            borderRight: '1px solid rgb(229 231 235)',
                        },
                        'th:last-child, td:last-child': {
                            borderRight: 'none',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} 