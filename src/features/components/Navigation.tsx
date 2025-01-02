import { Box } from "@mui/material";
import {
  MOBILE_FOOTER_HEIGHT,
  DESKTOP_FOOTER_HEIGHT,
  LAST_STEP,
} from "../../app/config/constants";
import AppButton from "./AppButton";
import { Color } from "../../app/config/styles/colors";

interface Props {
  activeStep: number;
  stepComplete?: boolean;
  goToNextStep?: () => void;
  goToPreviousStep?: () => void;
}

function Navigation({
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

export default Navigation;
