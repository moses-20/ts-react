import { ThemeOptions } from "@mui/material";

type Components = ThemeOptions["components"] & {
  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: string;
        paddingLeft: string;
      };
    };
  };
};

const components: Components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "15px !important",
        paddingRight: "15px !important",
        maxWidth: "1600px",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: "5px",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "5px",
        padding: "14px",
        margin: "15px",
        boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: "40px",
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: "20px",
        paddingLeft: "20px !important",
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: "0",
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: "500",
        fontSize: "0.75rem",
      },
    },
  },
};

export default components;
