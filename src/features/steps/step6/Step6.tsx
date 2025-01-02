import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import GiftBox from "../../components/GiftBox";
import DecoratedTree from "../../components/DecoratedTree";
import { useBreakpoints } from "../../../app/hooks/useBreakpoints";
import Navigation from "../../components/Navigation";
import { useEffect } from "react";

interface Props {
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  activeStep: number;
  stepComplete: boolean;
  setStepComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Step6({
  goToPreviousStep,
  goToNextStep,
  activeStep,
  setStepComplete,
  stepComplete,
}: Props) {
  const { sm, md } = useBreakpoints();

  useEffect(() => {
    setStepComplete(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giftVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

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
      }}
    >
      <Box sx={{ position: "relative" }}>
        <DecoratedTree />
      </Box>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={giftVariants}
        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: "14%",
          left: "29%",
        }}
      >
        <GiftBox width={md ? "8rem" : "4rem"} height={md ? "8rem" : "4rem"} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={giftVariants}
        transition={{ delay: 2.7, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: sm ? "15%" : "14%",
          left: sm ? "50%" : "61%",
        }}
      >
        <GiftBox width={md ? "6rem" : "2rem"} height={md ? "5rem" : "3rem"} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={giftVariants}
        transition={{ delay: 3.4, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: sm ? "17%" : "15%",
          left: sm ? "37%" : "65%",
        }}
      >
        <GiftBox
          width={md ? "5rem" : "3.5rem"}
          height={md ? "3.7rem" : "5rem"}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={giftVariants}
        transition={{ delay: 4.1, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: sm ? "16%" : "13%",
          left: sm ? "44%" : "47%",
        }}
      >
        <GiftBox
          width={sm ? "5rem" : "3.3rem"}
          height={sm ? "8rem" : "4.7rem"}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={giftVariants}
        transition={{ delay: 4.8, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: sm ? "13%" : "15%",
          left: sm ? "55%" : "21%",
        }}
      >
        <GiftBox
          width={sm ? "7rem" : "2.5rem"}
          height={sm ? "4.8rem" : "5rem"}
        />
      </motion.div>

      <Navigation
        activeStep={activeStep}
        goToPreviousStep={goToPreviousStep}
        stepComplete={stepComplete}
        goToNextStep={goToNextStep}
      />
    </Stack>
  );
}

export default Step6;
