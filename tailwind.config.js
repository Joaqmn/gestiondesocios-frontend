module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito"]
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./public//*.html",
      "./src//.vue",
      "./src/main.ts",
      "node_modules/vue-tailwind/dist/.ts"
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  }
};
