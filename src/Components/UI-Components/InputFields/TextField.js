import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({
  ref,
  id,
  focus,
  value,
  label,
  width,
  required,
  disable,
  type,
  size,
  helper,
  error,
  fullWidth,
  placeholder,
  textLength,
  margin,
  change,
  name,
  variant,
  color,
  onInput,
  height,
  onBlur,
}) => {

  const memoizedComponent = useMemo(() => (
    <TextField
      ref={ref && ref}
      id={id && id}
      onFocus={focus}
      name={name && name}
      onChange={change}
      onInput={onInput}
      style={{
        width: `${width}`,
        margin: `${margin}`,
        backgroundColor: `${color}`,
        height: `${height}`,
      }}
      placeholder={placeholder && placeholder}
      autoFocus={focus}
      value={value === null ? "" : value}
      fullWidth={fullWidth}
      label={label}
      variant={variant}
      size={size}
      helperText={error && helper}
      error={error}
      type={type}
      disabled={disable}
      required={required}
      onBlur={onBlur}
      inputProps={{ maxLength: textLength }}
    />
  ), [
    ref,
    id,
    focus,
    value,
    label,
    width,
    required,
    disable,
    type,
    size,
    helper,
    error,
    fullWidth,
    placeholder,
    textLength,
    margin,
    change,
    name,
    variant,
    color,
    onInput,
    height,
    onBlur,
  ]);

  return memoizedComponent;
};

export default TextInput;
