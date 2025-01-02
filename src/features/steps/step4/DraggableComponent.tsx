import { Box, SxProps, Theme } from "@mui/material";
import { useDrag } from "react-dnd";

interface DraggableComponentProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  type: string;
  id?: string;
  position?: { x: number; y: number };
  onDrop?: (id: string, position: { x: number; y: number }) => void;
  source?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

function DraggableComponent({
  sx,
  children,
  type,
  id,
  position,
  source = false,
  data,
}: DraggableComponentProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: type,
      item: {
        id,
        type,
        data,
        position,
        source,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [type, id, position, data, source]
  );

  return (
    <Box
      ref={drag}
      sx={{
        position: source ? "relative" : "absolute",
        top: source ? undefined : `${position?.y || 0}px`,
        left: source ? undefined : `${position?.x || 0}px`,
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
