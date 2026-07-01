/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          black: "#111111",
          surface: "#1A1714",
          card: "#201C19",
          border: "#2E2720",
          cream: "#F0EBE1",
          brown: "#6F4E37",
          darkBrown: "#3D2B1F",
          green: "#7EA46A",
          gold: "#C9A84C",
          muted: "#7A6A5A",
          mutedLight: "#9A8878",
        },
      },
    },
  },
  plugins: [],
};
