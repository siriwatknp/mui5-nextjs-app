"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  modularCssLayers: "@layer theme, base, mui, components, utilities;",
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    background: {
      default: "rgba(248, 250, 252, 0.95)",
      paper: "rgba(255, 255, 255, 0.8)",
    },
    primary: {
      main: "rgba(59, 130, 246, 0.9)",
      light: "rgba(96, 165, 250, 0.9)",
      dark: "rgba(37, 99, 235, 0.9)",
    },
    secondary: {
      main: "rgba(139, 92, 246, 0.9)",
      light: "rgba(167, 139, 250, 0.9)",
      dark: "rgba(124, 58, 237, 0.9)",
    },
    action: {
      hover: "rgba(148, 163, 184, 0.1)",
    },
    text: {
      primary: "rgba(15, 23, 42, 0.9)",
      secondary: "rgba(51, 65, 85, 0.7)",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.8) 100%)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          boxShadow:
            "0 8px 32px rgba(59, 130, 246, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)",
          color: "rgba(255, 255, 255, 0.95)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(96, 165, 250, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)",
            boxShadow:
              "0 12px 40px rgba(59, 130, 246, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)",
          },
        },
        outlined: {
          background: "rgba(255, 255, 255, 0.5)",
          border: "1px solid rgba(59, 130, 246, 0.4)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)",
          color: "rgba(59, 130, 246, 0.9)",
          "&:hover": {
            background: "rgba(59, 130, 246, 0.08)",
            border: "1px solid rgba(59, 130, 246, 0.6)",
            boxShadow:
              "0 8px 24px rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.7)",
          },
        },
        text: {
          background: "transparent",
          backdropFilter: "blur(5px)",
          border: "1px solid transparent",
          color: "rgba(59, 130, 246, 0.8)",
          "&:hover": {
            background: "rgba(59, 130, 246, 0.08)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(15px)",
          borderRadius: "16px",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          padding: "16px",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.component === "code" && {
            background: "rgba(248, 250, 252, 0.9)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(148, 163, 184, 0.3)",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
            color: "rgba(51, 65, 85, 0.9)",
          }),
        }),
      },
    },
  },
});

export default theme;
