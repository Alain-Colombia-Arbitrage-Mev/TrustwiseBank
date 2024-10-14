export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope, ui-sans-serif, system-ui, sans-serif" },
      backgroundImage: {
        "campo-de-imagenes":
          "url(/assets/8c97745aa92bccd61a93edca7cf1f783d5ae9984.png)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
