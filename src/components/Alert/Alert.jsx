import { useEffect } from "react";
import { SullyTypography } from "components";
import { AlertWrapper, SnackbarWrapper } from "./style";
import { Box } from "@mui/material";
import { ErrorIcon, SuccessIcon, WarningIcon } from "sullyIcons";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "slice/alertSlice";

const iconMap = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
};

const Alert = () => {
  const dispatch = useDispatch();
  const { title, alertType, text, isAlert } = useSelector(
    (state) => state.alert,
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeAlert());
    }, 1700);
    return () => clearTimeout(timer);
  }, [isAlert, dispatch]);

  if (!isAlert) return null;

  return (
    <SnackbarWrapper
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isAlert}
      key={"topright"}
    >
      <AlertWrapper
        className={`slide-in ${isAlert ? "visible" : "hidden"}`}
        severity={alertType}
        icon={false}
      >
        <Box className={`icon icon-${alertType}`}>{iconMap[alertType]}</Box>
        <Box>
          <SullyTypography classNameProps="page_title">{title}</SullyTypography>
          <SullyTypography classNameProps="alert_text">{text}</SullyTypography>
        </Box>
      </AlertWrapper>
    </SnackbarWrapper>
  );
};

export default Alert;
