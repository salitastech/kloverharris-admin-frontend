import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useJumboForm } from "../../hooks";

type JumboSelectProps = {
  fieldName: string;
  formControl?: boolean;
  options: any;
  placeholder?: string;
  label?: string;
} & SelectProps;

const JumboSelect = ({
  fieldName,
  formControl = true,
  options,
  children,
  label,
  placeholder,
  defaultValue,
  ...restProps
}: JumboSelectProps) => {
  const { errors, setValue, control } = useJumboForm();
  
  React.useEffect(() => {
    setValue(fieldName, defaultValue);
  }, [fieldName, setValue, defaultValue]);

  const generateSelectOptions = React.useCallback(() => {
    if (Array.isArray(options)) {
      return options?.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ));
    }

    return options?.data?.map((option: any, index: number) => (
      <MenuItem key={index} value={option[options.labelKey]}>
        {option[options.valueKey]}
      </MenuItem>
    ));
  }, [options]);

  const inputField = (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => {
        return (
          <>
            <Select
              onChange={field.onChange}
              label={label}
              value={field.value === undefined ? "" : field.value}
              {...restProps}
            >
              {placeholder && (
                <MenuItem disabled value="">
                  <em>{placeholder}</em>
                </MenuItem>
              )}
              {generateSelectOptions()}
            </Select>
            {!!errors && errors.hasOwnProperty(fieldName) && !field.value ? (
              <FormHelperText>{errors[fieldName]?.message}</FormHelperText>
            ) : (
              ""
            )}
          </>
        );
      }}
      defaultValue={defaultValue}
    />
  );

  if (formControl) {
    return (
      <FormControl variant="outlined" error={!!errors[fieldName]}>
        {label && <InputLabel>{label}</InputLabel>}
        {inputField}
      </FormControl>
    );
  }

  return inputField;
};

export { JumboSelect };
