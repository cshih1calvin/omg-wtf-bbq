import { Config } from "@remotion/cli/config";

Config.overrideWebpackConfig((config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      // Prefer CJS so @remotion/google-fonts subpath imports resolve to
      // ./dist/cjs/*.js instead of the .mjs files webpack can't handle.
      conditionNames: ["require", "node", "default"],
      extensions: [
        ...(config.resolve?.extensions ?? []),
        ".mjs",
        ".js",
        ".ts",
        ".tsx",
      ],
    },
  };
});
