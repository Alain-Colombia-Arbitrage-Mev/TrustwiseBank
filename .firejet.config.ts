import { FJ } from "@firejet/cli";

const config: FJ.FireJetConfig = {
  groups: {
    default: {
      components: {
        SignInEmpty: {
          defaultExport: true,
          path: "src/components/SignInEmpty.tsx",
          exportName: "SignInEmpty",
          structure: {
            type: "component",
            name: "SignInEmpty",
            children: [],
            props: {},
          },
        },
      },
      globalCss: ["./styles.css"],
      postcssPath: "./postcss.config.js",
    },
  },
};

export default config;
