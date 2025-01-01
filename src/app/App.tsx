import { Box } from "@mui/material";

import DesktopStepper from "../features/components/DesktopStepper";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: `
      radial-gradient(
        circle at top left,
        rgba(255, 255, 255, 0.9),   
        rgba(240, 248, 255, 0.8) 30%, 
        rgba(200, 220, 255, 0.7) 60%,
        rgba(180, 200, 255, 0.6) 90% 
      )
    `,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          overflowY: "hidden",
        }}
      >
        <DesktopStepper />
      </Box>
    </SnackbarProvider>
  );
}

export default App;
