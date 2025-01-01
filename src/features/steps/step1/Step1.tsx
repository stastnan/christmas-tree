import { Stack, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import { useEffect } from "react";

interface Props {
  activeStep: number;
  stepComplete: boolean;
  goToNextStep: () => void;
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Step1({
  activeStep,
  goToNextStep,
  stepComplete,
  setStepComplete,
}: Props) {
  useEffect(() => {
    setStepComplete(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        width: "100%",
        gap: { xs: 5, md: 8 },
        px: 3,
      }}
    >
      <Typography variant="h1">
        We're Just a Step(per) Away from Christmas!
      </Typography>
      <Typography variant="h2">
        Christmas is near! 🎄 Let's get your tree decked out in style. Just a
        few quick steps, a sprinkle of chaos, and boom - holiday magic! Let's do
        this! 🎅✨
      </Typography>

      <Navigation
        activeStep={activeStep}
        stepComplete={stepComplete}
        goToNextStep={goToNextStep}
      />
    </Stack>
  );
}

export default Step1;
