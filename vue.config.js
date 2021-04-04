module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/_variables.sass"
            @import "@/styles/_icons_styling.sass"
          `,
      },
    },
  },
};
