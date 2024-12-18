import { Box, Paper } from "@mui/material";

interface DogProps {
  size?: number;
}

export default function Dog({ size = 200 }: DogProps) {
  const bodyWidth = size * 0.8;
  const bodyHeight = size * 0.6;
  const headSize = size * 0.45;
  const earWidth = size * 0.125;
  const earHeight = size * 0.15;
  const eyeSize = size * 0.075;
  const noseWidth = size * 0.1;
  const noseHeight = size * 0.075;

  return (
    <Box sx={{ position: "relative", width: size, height: size, zIndex: 100 }}>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          bottom: 0,
          width: bodyWidth,
          height: bodyHeight,
          bgcolor: "#795548",
          borderRadius: bodyHeight / 4,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "15%",
          left: "50%",
          width: headSize,
          height: headSize,
          bgcolor: "#795548",
          borderRadius: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -earHeight / 4,
            left: -earWidth / 7,
            width: earWidth,
            height: earHeight,
            bgcolor: "#5D4037",
            borderRadius: "50% 50% 0 0",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: -earHeight / 4,
            right: -earWidth / 7,
            width: earWidth,
            height: earHeight,
            bgcolor: "#5D4037",
            borderRadius: "50% 50% 0 0",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "30%",
            width: eyeSize,
            height: eyeSize,
            bgcolor: "#3E2723",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            right: "30%",
            width: eyeSize,
            height: eyeSize,
            bgcolor: "#3E2723",
            borderRadius: "50%",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: noseWidth,
            height: noseHeight,
            bgcolor: "#212121",
            borderRadius: "50%",
          }}
        />
      </Paper>
    </Box>
  );
}
