import { Box } from "@mui/material";
import { Color } from "../../../app/config/styles/colors";
import DraggableComponent from "./DraggableComponent";

interface BowProps {
  color?: string;
  size?: string;
}

export default function Bow({
  color = Color.DarkRed,
  size = "2rem",
}: BowProps) {
  return (
    <DraggableComponent type="bow" data={{ color, size }} sx={{}}>
      <Box sx={{ width: size, height: size, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: "15%",
            top: "25%",
            width: "30%",
            height: "50%",
            bgcolor: color,
            borderRadius: "50%",
            transform: "rotate(-30deg)",
            boxShadow: `
            inset -2px -2px 4px rgba(0, 0, 0, 0.2),
            2px 2px 4px rgba(0, 0, 0, 0.2)
          `,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: "15%",
            top: "25%",
            width: "30%",
            height: "50%",
            bgcolor: color,
            borderRadius: "50%",
            transform: "rotate(30deg)",
            boxShadow: `
            inset -2px -2px 4px rgba(0, 0, 0, 0.2),
            2px 2px 4px rgba(0, 0, 0, 0.2)
          `,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "35%",
            bottom: "10%",
            width: "15%",
            height: "30%",
            bgcolor: color,
            transform: "rotate(15deg)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: "35%",
            bottom: "10%",
            width: "15%",
            height: "30%",
            bgcolor: color,
            transform: "rotate(-15deg)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </DraggableComponent>
  );
}
