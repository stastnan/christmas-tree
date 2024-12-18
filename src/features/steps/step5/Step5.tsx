import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import Cat from "./Cat";
import Dog from "./Dog";
import DecoratedTree from "../../components/DecoratedTree";
import { useBreakpoints } from "../../../app/hooks/useBreakpoints";

interface Props {
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Step5({ setStepComplete }: Props) {
  const [pet, setPet] = useState<"cat" | "dog" | null>(null);
  const [startTreeFall, setStartTreeFall] = useState(false);
  const { md } = useBreakpoints();

  useEffect(() => {
    setStepComplete(false);
    const savedPet = localStorage.getItem("petChoice") as "cat" | "dog" | null;
    let petTimeoutId: ReturnType<typeof setTimeout>;
    let treeTimeoutId: ReturnType<typeof setTimeout>;

    if (savedPet) {
      petTimeoutId = setTimeout(() => {
        setPet(savedPet);

        treeTimeoutId = setTimeout(() => {
          setStartTreeFall(true);
          setStepComplete(true);
        }, 500);
      }, 2000);
    }

    return () => {
      clearTimeout(petTimeoutId);
      clearTimeout(treeTimeoutId);
    };
  }, [setStepComplete]);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        width: "100%",
        gap: { xs: 2, md: 8 },
        px: 3,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={startTreeFall ? { rotate: -90, y: 100 } : {}}
        transition={{ duration: 1.5 }}
        style={{ display: "flex" }}
      >
        <DecoratedTree />
      </motion.div>
      {pet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            right: md ? "29%" : "3%",
            bottom: md ? "30%" : "1%",
          }}
        >
          {pet === "cat" ? <Cat size={100} /> : <Dog size={100} />}
        </motion.div>
      )}
    </Stack>
  );
}

export default Step5;
