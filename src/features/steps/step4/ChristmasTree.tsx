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

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChristmasTree({ setStepComplete }: Props) {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const treeRef = useRef<HTMLDivElement>(null);
  const [dropsCount, setDropsCount] = useState(0);

  useEffect(() => {
    if (dropsCount >= 5) setStepComplete(true);
  }, [dropsCount, setStepComplete]);

  const [, drop] = useDrop(() => ({
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
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  drop(treeRef);

  const getAdjustedPosition = (
    clientOffset: XYCoord,
    treeRect: DOMRect
  ): Position => {
    const adjustedX = clientOffset.x - treeRect.left - treeRect.width / 2;
    const adjustedY = clientOffset.y - treeRect.top;

    return { x: adjustedX + treeRect.width / 2, y: adjustedY };
  };

  const isWithinTreeBoundaries = (
    position: Position,
    treeRect: DOMRect
  ): boolean => {
    const { x, y } = position;
    const centerX = treeRect.width / 2;

    const trunkTop = treeRect.height - 80;
    const trunkLeft = centerX - 30;
    const trunkRight = centerX + 30;

    if (
      y >= trunkTop &&
      y <= treeRect.height &&
      x >= trunkLeft &&
      x <= trunkRight
    ) {
      return false;
    }

    return true;
  };

  const addOrnament = (
    item: { type: OrnamentType; data: OrnamentData },
    position: Position
  ) => {
    const newItem: DroppedItem = {
      id: uuidv4(),
      type: item.type,
      data: item.data,
      position,
    };
    setDroppedItems((prev) => [...prev, newItem]);
    setDropsCount((prev) => prev + 1);
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
        }}
      >
        {droppedItems.map((item) => {
          const OrnamentComponent = itemTypeMap[item.type];
          return (
            <Box
              key={item.id}
              sx={{
                position: "absolute",
                top: `${item.position.y}px`,
                left: `${item.position.x}px`,
                zIndex: 10,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <OrnamentComponent {...item.data} />
            </Box>
          );
        })}

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
