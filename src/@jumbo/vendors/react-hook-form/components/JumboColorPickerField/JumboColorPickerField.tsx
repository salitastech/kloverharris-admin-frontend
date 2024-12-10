import React from "react";
import { Popover, FormControl, TextFieldProps } from "@mui/material";
import { SketchPicker } from "react-color";
import { useJumboForm } from "../../hooks";
import { Controller } from "react-hook-form";
import { Div } from "@jumbo/shared";

type JumboColorPickerProps = {
  fieldName: string;
  formControl?: boolean;
  className?: string;
  onChange?: (color: string) => void;
  defaultValue?: string;
} & TextFieldProps;

const JumboColorPickerField = ({
  fieldName,
  formControl = true,
  onChange,
  defaultValue,
  className,
}: JumboColorPickerProps) => {
  const { setValue, control } = useJumboForm();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    setValue(fieldName, defaultValue || "");
  }, [fieldName, setValue, defaultValue]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onColorSelect = (color: any) => {
    setValue(fieldName, color.hex);
    if (onChange) {
      onChange(color.hex);
    }
  };

  const id = open ? "simple-popover" : undefined;

  const colorPickerField = (
    <Controller
      control={control}
      name={fieldName}
      defaultValue={defaultValue || ""}
      render={({ field }) => (
        <Div
          sx={{
            border: 1,
            borderColor: "primary.main",
            p: 0.5,
            display: "flex",
            flex: 1,
            minWidth: 40,
            minHeight: 38,
            cursor: "pointer",
          }}
        >
          <Div
            onClick={handleClick}
            sx={{ flex: 1, p: 1, bgcolor: field.value || defaultValue }}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <SketchPicker
              color={field.value || defaultValue}
              onChange={onColorSelect}
            />
          </Popover>
        </Div>
      )}
    />
  );

  if (formControl) {
    return <FormControl className={className}>{colorPickerField}</FormControl>;
  }

  return colorPickerField;
};

export { JumboColorPickerField };
