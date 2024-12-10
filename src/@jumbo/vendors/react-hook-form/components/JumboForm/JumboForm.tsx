import React from "react";
import { useForm } from "react-hook-form";

import JumboFormContext from "./JumboFormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

const JumboForm = ({
  sx,
  validationSchema,
  children,
  onSubmit,
  keepWatch = true,
  onChange,
  watchOn,
}: any) => {
  const formProps = React.useMemo(() => {
    const object: any = {};
    if (validationSchema) {
      object["resolver"] = yupResolver(validationSchema);
    }
    return object;
  }, [validationSchema]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setValue,
    getValues,
  } = useForm(formProps);

  const contextValue = React.useMemo(() => {
    return {
      register,
      errors,
      handleSubmit,
      setValue,
      getValues,
      control,
    };
  }, [register, errors, control, setValue, getValues, handleSubmit]);

  React.useEffect(() => {
    let subscription = null;
    if (keepWatch) {
      if (watchOn && watchOn.length > 0) {
        subscription = watch((value, { name }) => {
          if (watchOn.includes(name)) {
            let entries = Object.entries(value);
            const changedFields: any = {};
            entries.forEach(([key, value]) => {
              if (watchOn.includes(key)) {
                changedFields[key] = value;
              }
            });
            if (onChange && typeof onChange === "function") {
              onChange(changedFields);
            }
          }
        });
      } else {
        subscription = watch((value, {}) => {
          let entries = Object.entries(value);
          const changedFields: any = {};
          entries.forEach(([key, value]) => {
            changedFields[key] = value;
          });
          onChange(changedFields);
        });
      }
    }

    return () => {
      if (subscription) subscription?.unsubscribe();
    };
  }, [keepWatch, watch, onChange, watchOn]);

  return (
    <JumboFormContext.Provider value={contextValue}>
      <Box
        component={"form"}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={sx}
      >
        {children}
      </Box>
    </JumboFormContext.Provider>
  );
};

export { JumboForm };
