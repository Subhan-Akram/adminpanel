/* eslint-disable react/prop-types */
import { styled } from "@mui/material";

const Label = ({ children, ...props }) => {
  return <label {...props}>{children}</label>; // Ensure this forwards props
};

const InputLabelWrapper = styled(Label)`
  font-size: 14px !important;
  margin-bottom: 6px;
`;

export default InputLabelWrapper;
