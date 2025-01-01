import { Stack, Typography } from "@mui/material";
import { Color } from "../../../app/config/styles/colors";
import Navigation from "../../components/Navigation";

interface Props {
  goToPreviousStep: () => void;
  activeStep: number;
}

export default function Step7({ activeStep, goToPreviousStep }: Props) {
  const userName = localStorage.getItem("userName") || "there";
  const petChoice = localStorage.getItem("petChoice") as
    | "dog"
    | "cat"
    | "none"
    | null;

  let message = "";

  if (petChoice === "dog") {
    message = `
      Oh no! The tree's down and chaos is everywhere. But hey, who cares? 
      You've got your best buddy wagging his/her tail and ready for cuddles.
    `;
  } else if (petChoice === "cat") {
    message = `
      What the fluff just happened here?! Well, it was just a tree. 
      Your little monster is purring on your lap, and together, 
      you can enjoy the laziest of Christmas days.
    `;
  } else {
    message = `
      No pet-induced stress for you, but there's still enough chaos to go around! 
      Take care of yourself, enjoy the wonderful holiday, and make the most 
      of this special time with your family.
    `;
  }

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        width: "100%",
        px: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{ whiteSpace: "pre-line", lineHeight: "2.7rem" }}
      >
        {message}
      </Typography>
      <Typography
        variant="h3"
        sx={{ whiteSpace: "pre-line", mt: 3, color: Color.CranberryRed }}
      >
        Merry Christmas, {userName}!
      </Typography>
      <Navigation activeStep={activeStep} goToPreviousStep={goToPreviousStep} />
    </Stack>
  );
}
