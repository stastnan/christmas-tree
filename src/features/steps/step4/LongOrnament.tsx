import { Box } from "@mui/material";
import { SHADOW_COLOR, GLOW_COLOR } from "../../../app/config/constants";
import DraggableComponent from "./DraggableComponent";
import GeneralOrnamentProps from "./generalOrnamentTypes";
import { Color } from "../../../app/config/styles/colors";

export default function LongOrnament({
  color = Color.DarkRed,
  size = "2.5rem",
  sx,
}: GeneralOrnamentProps) {
  return (
    <DraggableComponent
      type="long"
      data={{ color, size }}
      sx={{
        position: "relative",
        width: size,
        height: `calc(${size} * 2)`,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `
            inset -5px -5px 10px ${SHADOW_COLOR},
            0 5px 10px ${SHADOW_COLOR}
          `,
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "25%",
          width: "30%",
          height: "20%",
          backgroundColor: GLOW_COLOR,
          borderRadius: "50%",
          boxShadow: `0 0 8px 4px ${GLOW_COLOR}`,
          filter: "blur(2px)",
          ...sx,
        }}
      />
    </DraggableComponent>
  );
}
