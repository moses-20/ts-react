import { ThemeOptions } from "@mui/material";

type Palette = ThemeOptions["palette"] & {
  tertiary: {
    main: string;
    light: string;
    dark: string;
  };
};

const palette: Palette = {
  primary: {
    main: "#00a854",
    light: "#55db82",
    dark: "#007828",
  },

  secondary: {
    main: "#ef5f22",
    light: "#ff9050",
    dark: "#b52c00",
  },

  tertiary: {
    main: "#ffb727",
    light: "#ffe95e",
    dark: "#c78700",
  },

  success: {
    main: "#00c292",
    dark: "#00964b",
  },

  info: {
    main: "#0bb2fb",
    light: "#a7e3f4",
  },

  error: {
    main: "#e46a76",
    dark: "#e45a68",
  },

  warning: {
    main: "#fec90f",
    dark: "#dcb014",
  },

  action: {
    disabledBackground: "rgba(73,82,88,0.12)",
    hoverOpacity: 0.02,
    hover: "rgba(0, 0, 0, 0.03)",
  },
};

export default palette;
