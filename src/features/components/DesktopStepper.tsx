import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Stack,
  StepIconProps,
} from "@mui/material";
import { Star, StarOutline } from "@mui/icons-material";
import { useStepNavigation } from "@hooks/useNavigation";
import { Color } from "@config/styles/colors";
import {
  MOBILE_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
  DESKTOP_FOOTER_HEIGHT,
  MOBILE_FOOTER_HEIGHT,
} from "@config/constants";
import Step1 from "@features/steps/step1/Step1";
import Step2 from "@features/steps/step2/Step2";
import Step3 from "@features/steps/step3/Step3";
import Step4 from "@features/steps/step4/Step4";
import Step5 from "@features/steps/step5/Step5";
import Step6 from "@features/steps/step6/Step6";
import Step7 from "@features/steps/step7/Step7";
import { useEffect, useState } from "react";

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
  const savedStep = parseInt(localStorage.getItem("activeStep") || "0");
  const [stepComplete, setStepComplete] = useState<boolean>(true);

  const { activeStep, goToNextStep, goToPreviousStep } = useStepNavigation(
    savedStep,
    5
  );

  useEffect(() => {
    localStorage.setItem("activeStep", activeStep.toString());
  }, [activeStep]);

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
        height: { xs: "100dvh", md: "100vh" },
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: {
            xs: `${MOBILE_HEADER_HEIGHT}px`,
            md: `${DESKTOP_HEADER_HEIGHT}px`,
          },
          minHeight: {
            xs: `${MOBILE_HEADER_HEIGHT}px`,
            md: `${DESKTOP_HEADER_HEIGHT}px`,
          },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
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
          mt: { xs: 0, md: 4 },
          mb: { xs: 0, md: 2 },
          px: { xs: 2, md: 0 },
          height: {
            xs: `calc(100vh - ${MOBILE_HEADER_HEIGHT}px - ${MOBILE_FOOTER_HEIGHT}px - 5rem)`,
            md: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px - ${DESKTOP_FOOTER_HEIGHT}px )`,
          },
        }}
      >
        {activeStep === 0 && (
          <Step1
            activeStep={activeStep}
            goToNextStep={goToNextStep}
            stepComplete={stepComplete}
            setStepComplete={setStepComplete}
          />
        )}
        {activeStep === 1 && (
          <Step2
            setStepComplete={setStepComplete}
            stepComplete={stepComplete}
            activeStep={activeStep}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        )}
        {activeStep === 2 && (
          <Step3
            setStepComplete={setStepComplete}
            stepComplete={stepComplete}
            activeStep={activeStep}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        )}
        {activeStep === 3 && (
          <Step4
            setStepComplete={setStepComplete}
            stepComplete={stepComplete}
            activeStep={activeStep}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        )}
        {activeStep === 4 && isPet && (
          <Step5
            setStepComplete={setStepComplete}
            activeStep={activeStep}
            goToPreviousStep={goToPreviousStep}
            stepComplete={stepComplete}
            goToNextStep={goToNextStep}
          />
        )}
        {activeStep === 4 && !isPet && (
          <Step6
            activeStep={activeStep}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
            stepComplete={stepComplete}
            setStepComplete={setStepComplete}
          />
        )}
        {activeStep === 5 && (
          <Step7 activeStep={activeStep} goToPreviousStep={goToPreviousStep} />
        )}
      </Box>
    </Stack>
  );
}
