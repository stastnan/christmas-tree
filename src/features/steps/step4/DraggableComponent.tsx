import { Box, SxProps, Theme } from "@mui/material";
import { useDrag } from "react-dnd";

interface DraggableComponentProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

function DraggableComponent({
  sx,
  children,
  type,
  data,
}: DraggableComponentProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item: { type, data },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [type, data]
  );

  return (
    <Box
      ref={drag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "grab",
        transform: "translate(0, 0)",
        backgroundColor: isDragging ? "transparent" : "",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default DraggableComponent;
