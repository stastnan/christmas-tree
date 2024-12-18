import { Box } from "@mui/material";
import { Color } from "../../app/config/styles/colors";

interface GiftBoxProps {
  width?: string;
  height?: string;
  boxColor?: string;
  ribbonColor?: string;
}

function GiftBox({
  width = "7rem",
  height = "7rem",
  boxColor = Color.CranberryRed,
  ribbonColor = Color.Gold,
}: GiftBoxProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: width,
        height: height,
        backgroundColor: boxColor,
        borderRadius: 0.8,
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "45%",
          width: "10%",
          height: "100%",
          backgroundColor: ribbonColor,
          boxShadow: "0 5px 3px rgba(0, 0, 0, 0.2)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: 0,
          width: "100%",
          height: "10%",
          backgroundColor: ribbonColor,
          boxShadow: "0 5px 3px rgba(0, 0, 0, 0.2)",
        }}
      />
    </Box>
  );
}

export default GiftBox;
