import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = ({ handleView }) => [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 220,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
  },
  {
    field: "modelcard",
    headerName: "ModelCard",
    sortable: false,
    width: 180,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        icon={<VisibilityIcon />}
        label="View Details"
        onClick={() => handleView(params.row)}
      />,
    ],
  },
];

export default columns;

export const data = [
  {
    id: 1,
    name: "Model Alpha",
    description: "High performance model for text generation.",
    rating: 4.5,
    modelcard: "View Details",
  },
  {
    id: 2,
    name: "Model Beta",
    description: "Efficient model for classification tasks.",
    rating: 4.2,
    modelcard: "View Details",
  },
  {
    id: 3,
    name: "Model Gamma",
    description: "Versatile model for multiple NLP tasks.",
    rating: 4.8,
    modelcard: "View Details",
  },
  {
    id: 4,
    name: "Model Delta",
    description: "Optimized model for summarization.",
    rating: 4.0,
    modelcard: "View Details",
  },
  {
    id: 5,
    name: "Model Epsilon",
    description: "Robust model for sentiment analysis.",
    rating: 3.9,
    modelcard: "View Details",
  },
];
