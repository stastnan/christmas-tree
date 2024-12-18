import { Box } from "@mui/material";
import { useDragLayer } from "react-dnd";
import Ball from "./Ball";
import Star from "./Star";
import LongOrnament from "./LongOrnament";
import LittleBell from "./LittleBell";
import Bow from "./Bow";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "transparent",
};

function getItemStyles(
  initialOffset: { x: number; y: number } | null,
  currentOffset: { x: number; y: number } | null
) {
  if (!initialOffset || !currentOffset) return { display: "none" };

  const { x, y } = currentOffset;
  return {
    transform: `translate(${x}px, ${y}px)`,
    WebkitTransform: `translate(${x}px, ${y}px)`,
  };
}

const itemTypeMap = {
  ball: Ball,
  star: Star,
  long: LongOrnament,
  bow: Bow,
  littleBell: LittleBell,
};

interface DragItem {
  type: keyof typeof itemTypeMap;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function CustomDragLayer() {
  const { item, isDragging, initialOffset, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem() as DragItem | null,
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  if (!isDragging || !item) return null;

  const ComponentToRender = itemTypeMap[item.type];

  return (
    <Box sx={layerStyles}>
      <Box sx={getItemStyles(initialOffset, currentOffset)}>
        {ComponentToRender && <ComponentToRender {...item.data} />}
      </Box>
    </Box>
  );
}
