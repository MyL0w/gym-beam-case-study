module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["module-resolver", {
      "alias": {
        "@screens": "./src/screens",
        "@firebase": "./src/firebase",
        "@languages": "./src/assets/languages",
        "@assets": "./src/assets",
        "@navigation": "./src/navigation",
        "@modules": "./src/modules",
        "@components": "./src/components",
        "@hooks": "./src/lib/hooks",
        "@constants": "./src/lib/constants",
        "@services": "./src/lib/services",
        "@context": "./src/lib/context",
        "@utils": "./src/lib/utils",
        "@api": "./src/api",
      },
    }],
    "react-native-reanimated/plugin",
  ],
};
