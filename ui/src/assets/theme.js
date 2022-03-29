export const themeConfig = (mode) => {
  return {
    palette: {
      mode,
      type: "dark",
      // primary: {
      //   main: "#4527a0",
      // },
      // secondary: {
      //   main: "#0288d1",
      // },
      // background: {
      //   default: "#6147ae",
      //   paper: "#4527a0",
      // },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: () => ({
            textTransform: "none",
            borderRadius: "25px",
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: () => ({
            "& fieldset": {
              borderRadius: "25px",
              overflow: "none",
            },
          }),
        },
      },
    },
    // typography: {
    //   fontFamily: "Open Sans",
    //   h1: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   h2: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   h3: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   h4: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   h6: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   h5: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   subtitle1: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   subtitle2: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    //   button: {
    //     fontFamily: "Ubuntu Mono",
    //     fontWeight: 900,
    //   },
    //   overline: {
    //     fontFamily: "Ubuntu Mono",
    //   },
    // },
  };
};
