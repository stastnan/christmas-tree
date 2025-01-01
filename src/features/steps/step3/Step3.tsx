import { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import useToast from "../../../app/hooks/useToast";
import { useBreakpoints } from "../../../app/hooks/useBreakpoints";
import { Color } from "../../../app/config/styles/colors";
import AppButton from "../../components/AppButton";
import Navigation from "../../components/Navigation";

interface Props {
  activeStep: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
  stepComplete: boolean;
}
function Step3({
  activeStep,
  goToPreviousStep,
  goToNextStep,
  setStepComplete,
  stepComplete,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { showErrorMessage, showSuccessMessage } = useToast();
  const { md } = useBreakpoints();

  useEffect(() => {
    setStepComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setStepComplete(true);
  };

  const handleNextStep = () => {
    if (!selectedOption) {
      showErrorMessage("Please select an option before proceeding!");
      return;
    }

    localStorage.setItem("petChoice", selectedOption);
    goToNextStep();
    showSuccessMessage(`You chose: ${selectedOption}`);
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        gap: 4,
      }}
    >
      <Typography variant="h1" textAlign="center" sx={{ mb: 2 }}>
        Do you have a pet?
      </Typography>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        textAlign="center"
        sx={{ mb: 3 }}
      >
        Grinch: "You can choose only the most favorite one, ha-ha-ha-ha!"
      </Typography>

      <Stack
        gap={md ? 3 : 2}
        direction="row"
        sx={{
          height: "auto",
          width: md ? "auto" : "300px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppButton
          text="Cat"
          onClick={() => handleOptionClick("cat")}
          sx={{
            width: { xs: "6rem", md: "8rem" },
            height: { xs: "3rem", md: "auto" },
            backgroundColor:
              selectedOption === "cat" ? Color.DarkerOrange : "transparent",
            color: selectedOption === "cat" ? "#fff" : "inherit",
            borderColor: Color.SoftOrange,
            "&:hover": {
              backgroundColor:
                selectedOption === "cat" ? Color.DarkerOrange : "transparent",
              borderColor: Color.DarkerOrange,
            },
          }}
        />
        <AppButton
          text="Dog"
          onClick={() => handleOptionClick("dog")}
          sx={{
            width: { xs: "6rem", md: "8rem" },
            height: { xs: "3rem", md: "auto" },
            backgroundColor:
              selectedOption === "dog" ? Color.DarkerOrange : "transparent",
            color: selectedOption === "dog" ? "#fff" : "inherit",
            borderColor: Color.SoftOrange,
            "&:hover": {
              backgroundColor:
                selectedOption === "dog" ? Color.DarkerOrange : "transparent",
              borderColor: Color.DarkerOrange,
            },
          }}
        />
        <AppButton
          text="None of these"
          onClick={() => handleOptionClick("none")}
          sx={{
            width: { xs: "6rem", md: "8rem" },
            height: { xs: "3rem", md: "auto" },
            backgroundColor:
              selectedOption === "none" ? Color.DarkerOrange : "transparent",
            color: selectedOption === "none" ? "#fff" : "inherit",
            borderColor: Color.SoftOrange,
            "&:hover": {
              backgroundColor:
                selectedOption === "none" ? Color.DarkerOrange : "transparent",
              borderColor: Color.DarkerOrange,
            },
          }}
        />
      </Stack>

      <Navigation
        goToNextStep={handleNextStep}
        activeStep={activeStep}
        goToPreviousStep={goToPreviousStep}
        stepComplete={stepComplete}
      />
    </Stack>
  );
}

export default Step3;
