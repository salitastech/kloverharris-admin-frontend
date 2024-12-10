import React from "react";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  FormControlLabel,
  CheckboxProps,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useJumboForm } from "../../hooks";

type JumboCheckboxProps = {
  fieldName: string;
  formControl?: boolean;
  label: string;
  defaultChecked?: boolean;
} & CheckboxProps;

const JumboCheckbox = ({
  fieldName,
  formControl = true,
  label,
  defaultChecked,
}: JumboCheckboxProps) => {
  const [selectedItem, setSelectedItem] = React.useState<boolean>(
    defaultChecked ?? false
  );

  const { setValue, control, errors } = useJumboForm();

  const handleSelect = () => {
    setSelectedItem(!selectedItem);
  };

  React.useEffect(() => {
    setValue(fieldName, selectedItem);
  }, [fieldName, setValue, selectedItem]);

  const inputField = (
    <FormControlLabel
      control={
        <Controller
          name={fieldName}
          render={() => {
            return <Checkbox checked={selectedItem} onChange={handleSelect} />;
          }}
          control={control}
        />
      }
      label={label}
    />
  );

  if (formControl) {
    return (
      <FormControl>
        {inputField}
        {!!errors && errors.hasOwnProperty(fieldName) ? (
          <FormHelperText error>{errors[fieldName]?.message}</FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    );
  }

  return inputField;
};

export { JumboCheckbox };
