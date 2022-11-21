import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";

//color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d4dadd",
          200: "#a8b5ba",
          300: "#7d9098",
          400: "#516b75",
          500: "#264653",
          600: "#1e3842",
          700: "#172a32",
          800: "#0f1c21",
          900: "#080e11",
        },
        greenAccent: {
          100: "#d4ebe9",
          200: "#aad8d2",
          300: "#7fc4bc",
          400: "#55b1a5",
          500: "#2a9d8f",
          600: "#227e72",
          700: "#195e56",
          800: "#113f39",
          900: "#081f1d",
        },
        redAccent: {
          100: "#fdecdf",
          200: "#fbdac0",
          300: "#f8c7a0",
          400: "#f6b581",
          500: "#f4a261",
          600: "#c3824e",
          700: "#92613a",
          800: "#624127",
          900: "#312013",
        },
        blueAccent: {
          100: "#fae2dc",
          200: "#f5c5b9",
          300: "#f1a997",
          400: "#ec8c74",
          500: "#e76f51",
          600: "#b95941",
          700: "#8b4331",
          800: "#5c2c20",
          900: "#2e1610",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#080e11",
          200: "#0f1c21",
          300: "#172a32",
          400: "#1e3842",
          500: "#264653",
          600: "#516b75",
          700: "#7d9098",
          800: "#a8b5ba",
          900: "#d4dadd",
        },
        greenAccent: {
          100: "#081f1d",
          200: "#113f39",
          300: "#195e56",
          400: "#227e72",
          500: "#2a9d8f",
          600: "#55b1a5",
          700: "#7fc4bc",
          800: "#aad8d2",
          900: "#d4ebe9",
        },
        orangeAccent: {
          100: "#312013",
          200: "#624127",
          300: "#92613a",
          400: "#c3824e",
          500: "#f4a261",
          600: "#f6b581",
          700: "#f8c7a0",
          800: "#fbdac0",
          900: "#fdecdf",
        },
        redAccent: {
          100: "#2e1610",
          200: "#5c2c20",
          300: "#8b4331",
          400: "#b95941",
          500: "#e76f51",
          600: "#ec8c74",
          700: "#f1a997",
          800: "#f5c5b9",
          900: "#fae2dc",
        },
      }),
});

//mui theme

export const themeSetttings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};

//context for colour mode

export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSetttings(mode)), [mode]);

  return [theme, colorMode];
};
