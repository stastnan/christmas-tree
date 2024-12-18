import { useEffect, useState } from "react";
import { TextField, Typography, Stack } from "@mui/material";
import useToast from "../../../app/hooks/useToast";
import AppButton from "../../onboarding/AppButton";
import { Color } from "../../../app/config/styles/colors";

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Step2({ setStepComplete }: Props) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setStepComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { showErrorMessage, showSuccessMessage } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveName = () => {
    if (!userName.trim()) {
      showErrorMessage("Name cannot be empty!");
      return;
    }

    if (userName.length < 2) {
      showErrorMessage(
        "Please enter a valid name, that is longer than 2 characters!"
      );
      return;
    }

    localStorage.setItem("userName", userName.trim());
    showSuccessMessage("Name saved successfully!");
    setStepComplete(true);
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
      <AppButton
        text="Save"
        onClick={handleSaveName}
        sx={{
          width: "300px",
          backgroundColor: Color.SoftOrange,
          color: "#fff",
          "&:hover": {
            backgroundColor: "#FFB74D",
          },
        }}
      />
    </Stack>
  );
}

export default Step2;
