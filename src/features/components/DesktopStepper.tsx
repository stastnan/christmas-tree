import { Box, Step, StepLabel, Stepper, Stack } from "@mui/material";
import { Star, StarOutline } from "@mui/icons-material";
import { useStepNavigation } from "../../app/hooks/useNavigation";
import Step1 from "../steps/step1/Step1";
import Step2 from "../steps/step2/Step2";
import Step3 from "../steps/step3/Step3";
import {
  DESKTOP_FOOTER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
  MOBILE_FOOTER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
} from "../../app/config/constants";
import { Color } from "../../app/config/styles/colors";
import Step4 from "../steps/step4/Step4";
import Step5 from "../steps/step5/Step5";
import { useState } from "react";
import Step6 from "../steps/step6/Step6";
import Step7 from "../steps/step7/Step7";
import AppButton from "./AppButton";

import { StepIconProps } from "@mui/material";

function CustomStepIcon(props: StepIconProps) {
  const { active = false, completed = false } = props;

  if (active) {
    return <Star sx={{ color: Color.BrightOrange }} />;
  } else if (completed) {
    return <Star sx={{ color: Color.SoftOrange }} />;
  } else {
    return <StarOutline sx={{ color: Color.DarkerOrange }} />;
  }
}
export default function DesktopStepper() {
  const [stepComplete, setStepComplete] = useState<boolean>(true);
  const { activeStep, goToNextStep, goToPreviousStep } = useStepNavigation(
    0,
    5
  );

  const hasPet = localStorage.getItem("petChoice") as
    | "cat"
    | "dog"
    | "none"
    | null;

  const isPet = hasPet === "cat" || hasPet === "dog";

  return (
    <Stack
      sx={{
        width: "100vw",
        textAlign: "center",
        height: { xs: "90vh", md: "100vh" },
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: {
            xs: `${MOBILE_HEADER_HEIGHT}px`,
            md: `${DESKTOP_HEADER_HEIGHT}px`,
          },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            width: "100%",
            ".MuiStepIcon-root": {
              color: Color.DarkerOrange,
            },
            ".Mui-active .MuiStepIcon-root": {
              color: Color.BrightOrange,
            },
            ".Mui-completed .MuiStepIcon-root": {
              color: Color.SoftOrange,
            },
          }}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Step key={index}>
                <StepLabel
                  slots={{
                    stepIcon: CustomStepIcon,
                  }}
                />
              </Step>
            ))}
        </Stepper>
      </Stack>
      <Box
        sx={{
          mt: 4,
          mb: 2,
          px: { xs: "2rem", md: 0 },
          height: {
            xs: `calc(60vh - ${MOBILE_HEADER_HEIGHT}px)`,
          },
        }}
      >
        {activeStep === 0 && <Step1 setStepComplete={setStepComplete} />}
        {activeStep === 1 && <Step2 setStepComplete={setStepComplete} />}
        {activeStep === 2 && <Step3 setStepComplete={setStepComplete} />}
        {activeStep === 3 && <Step4 setStepComplete={setStepComplete} />}
        {activeStep === 4 && isPet && (
          <Step5 setStepComplete={setStepComplete} />
        )}
        {activeStep === 4 && !isPet && <Step6 />}
        {activeStep === 5 && <Step7 />}
      </Box>
      <Box
        sx={{
          height: {
            xs: `${MOBILE_FOOTER_HEIGHT}px`,
            md: `${DESKTOP_FOOTER_HEIGHT}px`,
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "1rem", md: "3rem" },
        }}
      >
        <AppButton
          text="Back"
          variant="outlined"
          onClick={goToPreviousStep}
          disabled={activeStep === 0}
          sx={{
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
            disabled={!stepComplete}
            sx={{
              backgroundColor: Color.SoftOrange,
              "&:hover": {
                backgroundColor: Color.DarkerOrange,
              },
            }}
          />
        )}
      </Box>
    </Stack>
  );
}
