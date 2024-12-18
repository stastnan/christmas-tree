import { Box } from "@mui/material";
import { SHADOW_COLOR, GLOW_COLOR } from "../../../app/config/constants";
import DraggableComponent from "./DraggableComponent";
import GeneralOrnamentProps from "./generalOrnamentTypes";

export default function LittleBell({
  color = "#F4B400",
  size = "1.5rem",
  sx,
}: GeneralOrnamentProps) {
  return (
    <DraggableComponent
      type="littleBell"
      data={{ color, size }}
      sx={{
        position: "relative",
        width: size,
        height: `calc(${size} * 1.2)`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "85%",
          background: `linear-gradient(to bottom, ${color}, #d1a800)`,
          borderRadius: "50% 50% 20% 20%",
          position: "relative",
          boxShadow: `
            inset -4px -4px 8px ${SHADOW_COLOR},
            0 4px 8px ${SHADOW_COLOR}
          `,
          ...sx,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "30%",
            height: "30%",
            backgroundColor: GLOW_COLOR,
            borderRadius: "50%",
            filter: "blur(2px)",
            boxShadow: `0 0 8px 4px ${GLOW_COLOR}`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -2,
            left: 0,
            width: "100%",
            height: `calc(${size} * 0.15)`,
            background: `linear-gradient(to bottom, #d1a800, ${color})`,
            borderRadius: "50px",
            boxShadow: `
              inset 0 2px 4px ${SHADOW_COLOR},
              0 2px 6px ${SHADOW_COLOR}
            `,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          width: `calc(${size} * 0.2)`,
          height: `calc(${size} * 0.2)`,
          backgroundColor: "#8B4513",
          borderRadius: "50%",
          boxShadow: `0 4px 6px ${SHADOW_COLOR}`,
          zIndex: 1,
        }}
      />
    </DraggableComponent>
  );
}
