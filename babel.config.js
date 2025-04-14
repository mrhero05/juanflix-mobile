module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    envName: "APP_ENV",
                    moduleName: "@env",
                    path: ".env",
                },
            ],
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "@": "./",
                        "@components": "./app/components/",
                        "@images": "./src/assets/images",
                        "@fonts": "./src/assets/fonts",
                        "@styles": "./src/styles/",
                        "@utils": "./app/utils/",
                        "@screens": "./app/screens/",
                        "@services": "./app/services/",
                        "@context": "./src/context/",
                        "@navigation": "./app/navigation/",
                    },
                },
            ],
            ["react-native-paper/babel"],
        ],
    };
};
