import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeConfig } from "../assets/theme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ColorModeContextProvider({ children }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(themeConfig(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
