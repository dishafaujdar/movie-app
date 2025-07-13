
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./my-app", // 👈 point this to your actual root folder
          },
        },
      ],
      "react-native-reanimated/plugin", // 👈 must be LAST
    ],
  };
};
