import React from "react";
import { FormControl, Avatar } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from "react-hook-form";

interface JumboAvatarFieldProps {
  fieldName: string;
  formControl?: boolean;
  className?: string;
  alt: string;
  defaultValue?: File | null;
  sx?: object;
  fullWidth?: boolean;
}

const JumboAvatarField = ({
  fieldName,
  formControl = true,
  className,
  fullWidth,
  alt,
  defaultValue,
  sx,
}: JumboAvatarFieldProps) => {
  const { setValue, control } = useForm();

  React.useEffect(() => {
    setValue(fieldName, defaultValue);
  }, [fieldName, setValue, defaultValue]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setValue(fieldName, acceptedFiles[0]);
    },
  });

  const inputField = (
    <Controller
      control={control}
      name={fieldName}
      defaultValue={defaultValue}
      render={({ field }) => {
        const src = field.value ? URL.createObjectURL(field?.value) : "";
        return (
          <div {...getRootProps({ className: "Dropzone pointer" })}>
            <input {...getInputProps()} />
            <Avatar alt={alt} src={src} sx={sx} />
          </div>
        );
      }}
    />
  );

  if (formControl) {
    return (
      <FormControl className={className} fullWidth={fullWidth}>
        {inputField}
      </FormControl>
    );
  }

  return inputField;
};

export { JumboAvatarField };
