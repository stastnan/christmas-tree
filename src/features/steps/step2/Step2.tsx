import { useEffect, useState } from "react";
import { TextField, Typography, Stack } from "@mui/material";
import useToast from "@hooks/useToast";
import { Color } from "@config/styles/colors";
import Navigation from "@features/components/Navigation";

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
  stepComplete: boolean;
  activeStep: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export default function Step2({
  activeStep,
  goToPreviousStep,
  goToNextStep,
  setStepComplete,
  stepComplete,
}: Props) {
  const [userName, setUserName] = useState(() => {
    const savedName = localStorage.getItem("userName");
    return savedName || "";
  });

  useEffect(() => {
    if (userName.trim().length >= 2) {
      setStepComplete(true);
    } else {
      setStepComplete(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { showErrorMessage, showSuccessMessage } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    setStepComplete(event.target.value.trim().length >= 2);
  };

  const handleSaveAndNextStep = () => {
    if (!userName.trim()) {
      showErrorMessage("Name cannot be empty!");
      return;
    }
    if (userName.trim().length < 2) {
      showErrorMessage(
        "Please enter a valid name, that is longer than 2 characters!"
      );
      return;
    }
    localStorage.setItem("userName", userName.trim());
    showSuccessMessage("Name saved successfully!");
    goToNextStep();
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
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Please, enter your name
      </Typography>
      <TextField
        placeholder="Enter your name..."
        variant="outlined"
        value={userName}
        onChange={handleInputChange}
        sx={{
          fontSize: "16px",
          "& input": {
            fontSize: "16px",
          },
          "& label": {
            fontSize: "16px",
          },
          width: "300px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: Color.SoftOrange,
            },
            "&:hover fieldset": {
              borderColor: Color.SoftOrange,
            },
            "&.Mui-focused fieldset": {
              borderColor: Color.SoftOrange,
            },
          },
        }}
      />
      <Navigation
        activeStep={activeStep}
        goToNextStep={handleSaveAndNextStep}
        goToPreviousStep={goToPreviousStep}
        stepComplete={stepComplete}
      />
    </Stack>
  );
}
