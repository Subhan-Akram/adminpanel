import { ModelTableWrapper } from "./style";
import Table from "../../../../components/Table";
import columns, { data } from "./columns";
import ModelDrawer from "../ModelDrawer/ModelDrawer";
import { Box } from "@mui/material";
import { useState } from "react";

export default function ModelTable() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({
    model: "ns",
    description: "s",
    rating: 2,
    modelCard: "23",
  });
  const handleView = (row) => {
    console.log("row", row);
    setModel(row);
    setOpen(true);
    console.log("view ticket ");
  };
  return (
    <ModelTableWrapper sx={{ height: 400, width: "100%" }}>
      <Box className="model_drawer_box">
        <ModelDrawer open={open} setOpen={setOpen} model={model} />
      </Box>
      <Table rows={data} columns={columns({ handleView })} />
    </ModelTableWrapper>
  );
}
