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
      textcolor:"#252627"
  },
  },
  plugins: [],
} satisfies Config