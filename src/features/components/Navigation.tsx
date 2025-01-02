import { Box } from "@mui/material";

import AppButton from "./AppButton";
import {
  DESKTOP_FOOTER_HEIGHT,
  LAST_STEP,
  MOBILE_FOOTER_HEIGHT,
} from "@config/constants";
import { Color } from "@config/styles/colors";

interface Props {
  activeStep: number;
  stepComplete?: boolean;
  goToNextStep?: () => void;
  goToPreviousStep?: () => void;
  handleOrnamentsReset?: () => void;
}

export default function Navigation({
  activeStep,
  stepComplete,
  goToNextStep,
  goToPreviousStep,
}: Props) {
  return (
    <Box
      sx={{
        height: {
          xs: `${MOBILE_FOOTER_HEIGHT}px`,
          md: `${DESKTOP_FOOTER_HEIGHT}px`,
        },
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: "1rem", md: "3rem" },
        position: "fixed",
        bottom: 0,
        zIndex: 100,
      }}
    >
      <AppButton
        text="Back"
        aria-label="go back to the previous step"
        variant="outlined"
        onClick={goToPreviousStep}
        disabled={activeStep === 0}
        sx={{
          visibility: activeStep === 0 ? "hidden" : "visible",
          color: Color.SoftOrange,
          borderColor: Color.SoftOrange,
          "&:hover": {
            borderColor: Color.SoftOrange,
            backgroundColor: Color.LightCream,
          },
        }}
      />

      {activeStep < 5 && (
        <AppButton
          aria-label="continue to the next step"
          text="Next"
          variant="contained"
          onClick={goToNextStep}
          disabled={!stepComplete || activeStep === LAST_STEP}
          sx={{
            backgroundColor: Color.SoftOrange,
            "&:hover": {
              backgroundColor: Color.DarkerOrange,
            },
          }}
        />
      )}
    </Box>
  );
}
