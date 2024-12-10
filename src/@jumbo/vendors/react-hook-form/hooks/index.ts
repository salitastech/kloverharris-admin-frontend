import React from "react";
import JumboFormContext from "../components/JumboForm/JumboFormContext";

export const useJumboForm: any = () => {
  return React.useContext(JumboFormContext);
};
