module.exports = {
  purge: {
    content: ["./app/**/*.html.erb", "./app/helpers/**/*.rb"],
    options: {
      whitelist: ["qubit-circle-octet", "text-center", "font-bold"],
      whitelistPatterns: [
        /^circle-notation--\d+qubit/,
        /^circuit/,
        /^pill/,
        /^qubits-\d+/,
        /^readout--/,
        /^reg-end-\d+/,
        /^reg-start-\d+/,
        /^simulator-wrapper--\d+qubit/,
        /^span-\d+/,
        /^write--/,
      ],
    },
  },
  theme: {
    extend: {
      spacing: {
        "9": "2.25rem",
        "18": "4.5rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
