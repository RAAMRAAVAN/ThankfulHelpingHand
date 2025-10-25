"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { ReactNode } from "react";

// ✅ Create your MUI theme here
const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // You can customize NGO colors
    },
    background: {
      default: "#ffffff",
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
