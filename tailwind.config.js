/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                customYellow: "#FFC300",
                customGray: "#C1C1C1",
                customDarkGray: "#0C0C0C",
                customBlack: "#000000",
                customMidBlack: "#262626",
                customWhite: "#ffffff",
                customLowOpacityGray: "#00000099",
            },
        },
    },
    corePlugins: {
        backgroundOpacity: true,
    },
    plugins: [],
};
