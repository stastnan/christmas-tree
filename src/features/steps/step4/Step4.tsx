import { Stack, Typography } from "@mui/material";
import ChristmasTree from "./ChristmasTree";
import Ball from "./Ball";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { useBreakpoints } from "../../../app/hooks/useBreakpoints";
import LongOrnament from "./LongOrnament";
import LittleBell from "./LittleBell";
import Star from "./Star";
import Bow from "./Bow";
import { Color } from "@config/styles/colors";
import Navigation from "@features/components/Navigation";

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
  stepComplete: boolean;
  activeStep: number;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export default function Step4({
  setStepComplete,
  stepComplete,
  activeStep,
  goToPreviousStep,
  goToNextStep,
}: Props) {
  const { md } = useBreakpoints();

  return (
    <DndProvider
      backend={md ? HTML5Backend : TouchBackend}
      options={{ enableMouseEvents: true }}
    >
      <Stack
        sx={{
          width: "100%",
          height: { xs: "100%", md: "auto" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, md: 5 },
        }}
      >
        <Typography variant="h1">Let's decorate the tree!</Typography>
        <Typography variant="subtitle2">
          Drag and drop the ornaments below. Place at least 5 and maximum 20
          ornaments on the tree.
        </Typography>

        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, md: 15 },
          }}
        >
          <ChristmasTree setStepComplete={setStepComplete} />

          <Stack
            sx={{
              flexDirection: { xs: "row", md: "column" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 2 },
            }}
          >
            <Ball color={Color.FrostedBlue} size="1.7rem" />
            <Ball color={Color.CranberryRed} size="1.2rem" />
            <LongOrnament color={Color.RoyalPurple} size="1.2rem" />
            <LittleBell color={Color.BellYellow} size="1.1rem" />
            <Star size="1.5rem" color={Color.SoftOrange} />
            <Bow size="2rem" color={Color.DarkRed} />
          </Stack>
        </Stack>

        <Navigation
          activeStep={activeStep}
          stepComplete={stepComplete}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      </Stack>
    </DndProvider>
  );
}
