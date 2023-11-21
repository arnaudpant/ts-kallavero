import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaire: "#F6F6F6",
      "prim-variant": "#dfe4ea",
      secondaire: "#0078AA",
      "sec-variant": "#3AB4F2",
      background: "#F6F6F6",
      error: "#EB5E28",
      textcolor:"#252627",
      rad1: "#FDFDFF",
      rad2: "#F8F8FF",
      rad3: "#F0F1FE",
      rad4: "#E6E7FF",
      rad5: "#DADCFF",
      rad6: "#CBCDFF",
      rad7: "#B8BAF8",
      rad8: "#9B9EF0",
      rad9: "#5B5BD6",
      rad10: "#5151CD",
      rad11: "#5753C6",
      rad12: "#272962",
  },
  },
  plugins: [],
} satisfies Config