import { Color } from "@config/styles/colors";
import { Button, type SxProps, type Theme, Typography } from "@mui/material";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  onClick?: () => void;
  disabled?: boolean;
  text: string;
  sx?: SxProps<Theme>;
  ariaLabel?: string;
}

export default function AppButton({
  type = "button",
  variant = "contained",
  disabled,
  sx,
  text,
  onClick,
  ariaLabel,
}: Props) {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      sx={{
        height: { xs: 56, md: 45 },
        textTransform: "none",
        minWidth: "fit-content",
        width: "8rem",
        borderRadius: 4,
        borderColor: disabled ? Color.Charcoal : Color.DarkerOrange,
        ...sx,
      }}
    >
      <Typography component="span" variant="subtitle1">
        {text}
      </Typography>
    </Button>
  );
}
