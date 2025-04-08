module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1F2937',     // Slate gray
        secondary: '#4B5563',   // Cool gray
        accent: '#2563EB',      // Indigo
        light: '#F9FAFB',       // Light gray background
        darkText: '#111827',    // Dark readable text
      },
    },
  },
  plugins: [],
};
