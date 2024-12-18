import { Box } from "@mui/material";
import DraggableComponent from "./DraggableComponent";
import GeneralOrnamentProps from "./generalOrnamentTypes";
import { StarBorder } from "@mui/icons-material";

export default function Star({
  color = "gold",
  size = "1.5rem",
}: GeneralOrnamentProps) {
  return (
    <DraggableComponent
      type="star"
      data={{ color, size }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${
            color || "gold"
          } 0%, transparent 70%)`,
          filter: "blur(10px)",
          opacity: 0.6,
        }}
      />
      <StarBorder
        sx={{
          color: color,
          width: size,
          height: size,
          filter: "drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))",
        }}
      />
    </DraggableComponent>
  );
}
