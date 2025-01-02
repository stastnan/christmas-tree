import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { useDrop } from "react-dnd";
import { XYCoord } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Color } from "../../../app/config/styles/colors";
import Ball from "./Ball";
import Bow from "./Bow";
import CustomDragLayer from "./CustomDragLayer";
import LittleBell from "./LittleBell";
import LongOrnament from "./LongOrnament";
import Star from "./Star";

interface Position {
  x: number;
  y: number;
}

interface DroppedItem {
  id: string;
  type: OrnamentType;
  data: OrnamentData;
  position: Position;
}

type OrnamentType = "ball" | "star" | "long" | "bow" | "littleBell";

interface OrnamentData {
  color?: string;
  size?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemTypeMap: Record<OrnamentType, React.ComponentType<any>> = {
  ball: Ball,
  star: Star,
  long: LongOrnament,
  bow: Bow,
  littleBell: LittleBell,
};

const maxOrnaments = 20;
const minOrnaments = 5;

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChristmasTree({ setStepComplete }: Props) {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (droppedItems.length >= minOrnaments) {
      setStepComplete(true);
    }
  }, [droppedItems.length, setStepComplete]);

  const [, drop] = useDrop(
    () => ({
      accept: Object.keys(itemTypeMap) as OrnamentType[],
      drop: (item: { type: OrnamentType; data: OrnamentData }, monitor) => {
        const clientOffset = monitor.getClientOffset();
        if (clientOffset && treeRef.current) {
          const treeRect = treeRef.current.getBoundingClientRect();
          const position = getAdjustedPosition(clientOffset, treeRect);

          if (
            isWithinTreeBoundaries(position, treeRect) &&
            droppedItems.length < maxOrnaments
          ) {
            addOrnament(item, position);
          }
        }
      },
    }),
    [droppedItems.length]
  );

  drop(treeRef);

  const getAdjustedPosition = (
    clientOffset: XYCoord,
    treeRect: DOMRect
  ): Position => {
    const adjustedX = clientOffset.x - treeRect.left;
    const adjustedY = clientOffset.y - treeRect.top;
    return { x: adjustedX, y: adjustedY };
  };

  const isWithinTreeBoundaries = (
    position: Position,
    treeRect: DOMRect
  ): boolean => {
    const { x, y } = position;
    return x >= 0 && y >= 0 && x <= treeRect.width && y <= treeRect.height;
  };

  const addOrnament = (
    item: { type: OrnamentType; data: OrnamentData },
    position: Position
  ) => {
    if (droppedItems.length >= maxOrnaments) return;

    const newItem: DroppedItem = {
      id: uuidv4(),
      type: item.type,
      data: item.data,
      position,
    };
    setDroppedItems((prev) => [...prev, newItem]);
  };

  const renderStaticOrnament = (item: DroppedItem) => {
    const Component = itemTypeMap[item.type];
    if (!Component) return null;

    return (
      <Box
        key={item.id}
        sx={{
          position: "absolute",
          left: item.position.x,
          top: item.position.y,
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        <Component {...item.data} />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <CustomDragLayer />
      <Box
        ref={treeRef}
        sx={{
          position: "relative",
          width: { xs: "160px", md: "320px" },
          height: { xs: "205px", md: "410px" },
          backgroundColor: "transparent",
          cursor:
            droppedItems.length >= maxOrnaments ? "not-allowed" : "default",
        }}
      >
        {droppedItems.map(renderStaticOrnament)}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "100px", md: "200px" },
            height: { xs: "65px", md: "130px" },
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
            zIndex: 3,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "130px", md: "260px" },
            height: { xs: "80px", md: "160px" },
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "160px", md: "320px" },
            height: { xs: "100px", md: "200px" },
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "15px", md: "30px" },
            height: { xs: "25px", md: "50px" },
            background: `linear-gradient(to bottom, ${Color.TrunkBrown}, #5A2D0C)`,
            borderRadius: "5px",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        />
      </Box>
    </Box>
  );
}

export default ChristmasTree;
