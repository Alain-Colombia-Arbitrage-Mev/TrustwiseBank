export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope, ui-sans-serif, system-ui, sans-serif" },
      backgroundImage: {
        background:
          "url(/assets/background.png)",
        frame:
          "url(/assets/frame.png)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
