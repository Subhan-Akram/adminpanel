import { Card, styled, Switch } from "@mui/material";

export const IntegrationWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .card_header {
    display: flex;
    justify-content: space-between;
  }
  & .title_description {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  & .content_left {
    display: flex;
    justify-content: flex-start;

    gap: 16px;
  }
  & .switch {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  & .model_name_chip {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
  }
  & .content_right {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & .delete_btn {
      margin-top: -6px;
      margin-right: 0px;
      & svg {
        height: 25px;
        width: 25px;
      }
    }
  }
  & .chip_title {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
  }
  & .MuiDivider-root {
    margin-top: 16px;
  }
  & .MuiCollapse-root {
    margin-top: -34px;
    border: 1px solid red;
  }

  @media screen and (max-width: 700px) {
    .content_left {
      width: 60%;
      flex-direction: column;
    }
    .content_right {
      align-items: flex-start;
    }
  }
`;
export const SwitchWrapper = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "3px",
    transitionDuration: "300ms",
    transform: "translateX(2px)",
    color: "black",
    "&.Mui-checked": {
      transform: "translateX(21px)",
      color: "black",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--green)",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "var(--green)",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "var(--green)",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    background: "var(--primary-button-bg)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 28,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#9AA4B2",
    }),
  },
}));
