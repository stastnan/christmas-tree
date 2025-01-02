import { Box } from "@mui/material";

import DraggableComponent from "./DraggableComponent";
import GeneralOrnamentProps from "./generalOrnamentTypes";
import { DEFAULT_SIZE, GLOW_COLOR, SHADOW_COLOR } from "@config/constants";

interface BallProps extends GeneralOrnamentProps {
  color: string;
  size: string;
}

export default function Ball({
  color = "red",
  size = DEFAULT_SIZE,
}: BallProps) {
  return (
    <DraggableComponent
      type="ball"
      data={{ color, size }}
      sx={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        position: "relative",
        boxShadow: `
          inset -6px -6px 10px ${SHADOW_COLOR},
          0 6px 12px ${SHADOW_COLOR}
        `,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "25%",
          height: "25%",
          backgroundColor: GLOW_COLOR,
          borderRadius: "50%",
          boxShadow: `0 0 10px 4px ${GLOW_COLOR}`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "15%",
          height: "15%",
          backgroundColor: SHADOW_COLOR,
          borderRadius: "50%",
          filter: "blur(3px)",
        }}
      />
    </DraggableComponent>
  );
}
