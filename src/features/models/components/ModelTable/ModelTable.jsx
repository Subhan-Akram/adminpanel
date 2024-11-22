import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns from "./columns";
import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box, Button, Popover, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CreateModelDrawer from "../CreateModelDrawer/CreateModelDrawer";
import { PrimaryButton, SullyTypography } from "../../../../components";
import { useSelector } from "react-redux";

export default function ModelTable() {
  const [open, setOpen] = useState(false);
  const [deletePopover, setDeletePopover] = useState({
    element: null,
    value: "",
  });
  const { models } = useSelector((state) => state.models);
  console.log("models", models);
  const [model, setModel] = useState({
    model: "ns",
    description: "s",
    rating: 2,
    modelCard: "23",
  });
  const handleDelete = async () => {
    console.log("deleted");
  };
  const handleView = (row) => {
    console.log("row", row);
    setModel(row);
    setOpen(true);
    console.log("view ticket ");
  };
  const renderConfirmDialog = () => {
    return (
      <Popover
        id={"delete_popover"}
        open={Boolean(deletePopover.element)}
        anchorEl={deletePopover.element}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: "4px 12px" }}>
          <SullyTypography>
            {" "}
            Are you sure you want to delete Model?
          </SullyTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "6px",
            padding: "10px",
          }}
        >
          <PrimaryButton
            variant="contained"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </PrimaryButton>
          <PrimaryButton
            variant="contained"
            onClick={() => {
              setDeletePopover(false);
            }}
          >
            Cancel
          </PrimaryButton>
        </Box>
      </Popover>
    );
  };
  return (
    <>
      {renderConfirmDialog()}
      <ModelDrawer
        setModel={setModel}
        open={open}
        setOpen={setOpen}
        model={model}
      />
      <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
        <Box className="model_drawer_box">
          <SullyTypography classNameProps={"page_title"}>
            All Models
          </SullyTypography>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "12px",
                // width: "200px",
              }}
            >
              {/* <TextField
                sx={{ width: "120px" }}
                id="standard-basic"
                label="Search Models"
                variant="standard"
              /> */}
              {/* {" "}
              <TextField
                sx={{ width: "300px", height: "30px" }}
                placeholder="Search"
              ></TextField> */}
              {/* <Box sx={{ width: "250px" }}> */}
              <CreateModelDrawer />
              {/* </Box> */}
            </Box>
          </Box>
        </Box>
        <Table
          rows={models}
          columns={columns({ handleView, setDeletePopover })}
        />
      </ModelTableWrapper>
    </>
  );
}
