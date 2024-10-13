export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope, ui-sans-serif, system-ui, sans-serif" },
      backgroundImage: {
        "background-":
          "url(/assets/background-1.png)",
        "t-bg-pattern-modal-send-money-11frame":
          "url(/assets/Pattern.svg)",
        "modal-send-money":
          "url(/assets/modal-send-money.png)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
