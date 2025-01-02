import { Box } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { Color } from "@config/styles/colors";
import DecoratedTreeBall from "./DecoratedTreeBall";

export default function DecoratedTree() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "320px",
        height: "410px",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "4rem",
          height: "4rem",
          zIndex: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: -200,
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${Color.Gold} 0%, transparent 90%)`,
            filter: "blur(10px)",
            opacity: 0.6,
          }}
        />
        <StarBorder
          sx={{
            position: "absolute",
            left: 0,
            top: -200,
            color: Color.Gold,
            width: "4rem",
            height: "4rem",
            filter: "drop-shadow(0 0 50px rgba(255, 215, 0, 0.8))",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "130px",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "65px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "260px",
          height: "160px",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "145px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          height: "200px",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: `linear-gradient(135deg, ${Color.TreeGreen} 0%, ${Color.TreeGreen} 50%, ${Color.DarkGreen} 100%)`,
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "30px",
          height: "50px",
          background: `linear-gradient(to bottom, ${Color.TrunkBrown}, #5A2D0C)`,
          borderRadius: "5px",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      <DecoratedTreeBall
        color={Color.FrostedBlue}
        size="1.5rem"
        top="10%"
        left="40%"
      />
      <DecoratedTreeBall
        color={Color.CranberryRed}
        size="1.2rem"
        top="30%"
        left="25%"
      />
      <DecoratedTreeBall
        color={Color.RoyalPurple}
        size="1rem"
        top="20%"
        left="60%"
      />
      <DecoratedTreeBall
        color={Color.SoftOrange}
        size="1.3rem"
        top="50%"
        left="50%"
      />
      <DecoratedTreeBall
        color={Color.LightCream}
        size="1.3rem"
        top="30%"
        left="60%"
      />
      <DecoratedTreeBall
        color={Color.Charcoal}
        size="1.3rem"
        top="70%"
        left="60%"
      />
      <DecoratedTreeBall
        color={Color.Gold}
        size="1.8rem"
        top="79%"
        left="10%"
      />
    </Box>
  );
}
