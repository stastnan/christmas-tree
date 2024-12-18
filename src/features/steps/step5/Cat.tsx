import { Box, Paper } from "@mui/material";

interface CatProps {
  size?: number;
}

export default function Cat({ size = 200 }: CatProps) {
  const bodyWidth = size * 0.8;
  const bodyHeight = size * 0.6;
  const headSize = size * 0.4;

  return (
    <Box sx={{ position: "relative", width: size, height: size, zIndex: 100 }}>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "10%",
          height: "30%",
          bgcolor: "#9E9E9E",
          borderRadius: "50%",
          transform: "rotate(45deg)",
        }}
      />

      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          bottom: 0,
          width: bodyWidth,
          height: bodyHeight,
          bgcolor: "#9E9E9E",
          borderRadius: bodyHeight / 2,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          width: headSize,
          height: headSize,
          bgcolor: "#9E9E9E",
          borderRadius: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            left: "15%",
            width: "20%",
            height: "30%",
            bgcolor: "#9E9E9E",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            right: "15%",
            width: "20%",
            height: "30%",
            bgcolor: "#9E9E9E",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "30%",
            width: "12%",
            height: "12%",
            bgcolor: "#FFC107",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            right: "30%",
            width: "12%",
            height: "12%",
            bgcolor: "#FFC107",
            borderRadius: "50%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "35%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "10%",
            height: "10%",
            bgcolor: "#FFB6C1",
            clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
          }}
        />
      </Paper>
    </Box>
  );
}
