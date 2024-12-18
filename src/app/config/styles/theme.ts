import { createTheme } from "@mui/material";

import { FontFamilies } from "./FontFamilies";
import { FontWeights } from "./FontWeights";
import { Color } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Color.SoftOrange,
    },
  },
});

theme.typography.h1 = {
  fontFamily: FontFamilies.mountainsChristmas,
  fontWeight: FontWeights.bold,
  fontSize: "3rem",
  lineHeight: "4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: "2.25rem",
  },
};

theme.typography.h2 = {
  fontFamily: FontFamilies.dmSans,
  fontWeight: FontWeights.regular,
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    lineHeight: "1.4rem",
  },
};

theme.typography.h3 = {
  fontFamily: FontFamilies.mountainsChristmas,
  fontWeight: FontWeights.bold,
  fontSize: "1.7rem",
  lineHeight: "1.907rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
};

theme.typography.h4 = {
  fontFamily: FontFamilies.roboto,
  fontWeight: FontWeights.medium,
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
  },
};

theme.typography.subtitle1 = {
  fontFamily: FontFamilies.dmSans,
  fontWeight: FontWeights.regular,
  fontSize: "1.375rem",
  lineHeight: "1.79rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    lineHeight: "1.2rem",
  },
};

theme.typography.subtitle2 = {
  fontFamily: FontFamilies.dmSans,
  fontWeight: FontWeights.regular,
  fontSize: "1rem",
  lineHeight: "1.5rem",
};

export { theme };
