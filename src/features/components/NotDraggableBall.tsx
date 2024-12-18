import { Box } from "@mui/material";

interface BallProps {
  color: string;
  size: string;
  top: string;
  left: string;
}

const NotDraggableBall = ({ color, size, top, left }: BallProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0 0 8px ${color}, inset 0 0 6px rgba(0, 0, 0, 0.2)`,
        zIndex: 10,
      }}
    />
  );
};

export default NotDraggableBall;
