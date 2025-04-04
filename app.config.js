export default {
    expo: {
      name: "JuanFlixApp",
      slug: "JuanFlixApp",
      scheme: "juanflix",
      version: "1.0.0",
      android: {
        package: "com.glimsol.glenn.JuanFlixApp",
      },
      extra: {
        eas: {
          projectId: "02123a9d-f7a2-49c5-8fc5-de8f3e22c78f",
        },
      },
      web: {
        bundler: "metro",
      },
      plugins: [
        "expo-router",
        [
          "expo-build-properties",
          {
            android: {
              extraMavenRepos: [
                "https://mvn.jwplayer.com/content/repositories/releases/",
              ],
            },
          },
        ],
      ],
    },
  };
  