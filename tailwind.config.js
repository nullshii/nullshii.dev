/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [],
    theme: {
        extend: {
            colors: {
                text: "var(--text)",
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)"
            },
            fontFamily: {
                beon: "Beon",
                roboto: "Roboto"
            }
        }
    },
    plugins: []
};
