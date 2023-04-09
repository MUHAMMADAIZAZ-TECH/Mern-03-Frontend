import React, { useMemo } from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  text,
  icon,
  onClick,
  endIcon,
  disableBtn,
  size,
  fullWidth,
  align,
  variant,
}) => {
  const memoizedButton = useMemo(() => (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      startIcon={icon ? icon : null}
      disabled={disableBtn}
      onClick={onClick}
      endIcon={endIcon ? endIcon : null}
      align={align}
    >
      {text}
    </Button>
  ), [fullWidth, variant, size, icon, disableBtn, onClick, endIcon, align, text]);

  return memoizedButton;
};
export default CustomButton;
