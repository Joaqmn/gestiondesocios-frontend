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
    content: ["./public/**/*.html", "./src/**/*.vue"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  }
};
