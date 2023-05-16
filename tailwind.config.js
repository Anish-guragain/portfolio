module.exports = {
  content: [
     "./src/**/*.{js,ts.tsx,jxs}",
    "./pages/**/*.{js,ts.tsx,jxs}",
    "./components/**/*.{js,ts.tsx,jxs}"
  ],
  mode: "jit",
  theme: {
    extend: {  
    },

    fontFamily:{
      'sans':'IBM Plex Mono, monospace'
      
    }
    
  },
  plugins: [],
};