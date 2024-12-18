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
import { Color } from "../../../app/config/styles/colors";
import { useEffect } from "react";
import Bow from "./Bow";

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Step4({ setStepComplete }: Props) {
  const { md } = useBreakpoints();

  useEffect(() => {
    setStepComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DndProvider
      backend={md ? HTML5Backend : TouchBackend}
      options={{ enableMouseEvents: true }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",

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
        <ChristmasTree setStepComplete={setStepComplete} />

        <Stack
          sx={{
            width: md ? "60%" : "100%",
            flexDirection: "row",
            justifyContent: md ? "space-between" : "center",
            alignItems: "center",
            gap: md ? 0 : 3,
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
    </DndProvider>
  );
}

export default Step4;
