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
                        "@components": "./src/components/",
                        "@images": "./src/assets/images",
                        "@fonts": "./src/assets/fonts",
                        "@styles": "./src/styles/",
                        "@utils": "./src/utils/",
                        "@screens": "./app/screens/",
                        "@services": "./src/services/",
                        "@context": "./src/context/",
                        "@navigation": "./app/navigation/",
                        "@queries": "./src/queries/",
                    },
                },
            ],
            ["react-native-paper/babel"],
        ],
    };
};
