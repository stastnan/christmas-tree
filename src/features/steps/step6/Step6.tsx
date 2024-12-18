import { Box, Stack } from "@mui/material";
import GiftBox from "../../components/GiftBox";
import DecoratedTree from "../../components/DecoratedTree";
import { useBreakpoints } from "../../../app/hooks/useBreakpoints";

function Step6() {
  const { md } = useBreakpoints();

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
      <Box
        sx={{ position: "absolute", zIndex: 50, bottom: "20%", left: "30%" }}
      >
        <GiftBox width={md ? "8rem" : "4rem"} height={md ? "8rem" : "4rem"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 50,
          bottom: { xs: "20%", md: "15%" },
          left: { xs: "60%", md: "50%" },
        }}
      >
        <GiftBox width={md ? "6rem" : "2rem"} height={md ? "5rem" : "3rem"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 50,
          bottom: { xs: "15%", md: "17%" },
          left: { xs: "48%", md: "-100%" },
        }}
      >
        <GiftBox
          width={md ? "5rem" : "2.5rem"}
          height={md ? "3.7rem" : "5rem"}
        />
      </Box>
    </Stack>
  );
}

export default Step6;
