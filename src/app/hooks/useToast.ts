import { useSnackbar } from "notistack";
import { useBreakpoints } from "./useBreakpoints";

export default function useToast() {
  const { enqueueSnackbar } = useSnackbar();
  const { md } = useBreakpoints();

  const showErrorMessage = (message: string) => {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: md
        ? { vertical: "bottom", horizontal: "center" }
        : { vertical: "top", horizontal: "center" },
      autoHideDuration: 2000,
    });
  };

  const showSuccessMessage = (message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
      anchorOrigin: md
        ? { vertical: "bottom", horizontal: "center" }
        : { vertical: "top", horizontal: "center" },
      autoHideDuration: 2000,
    });
  };

  return { showErrorMessage, showSuccessMessage };
}
