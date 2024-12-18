import { DeleteOutline } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import EditIcon from "@mui/icons-material/Edit";
import { Chip, DropDown } from "../../../../components";
import { TagsGroupStyle } from "globalStyles";
const useColumns = ({ handleView, setDeletePopover, handleOrgnization }) => [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    alignItems: "center",
  },
  {
    field: "subscriber",
    headerName: "Subscriber",
    width: 220,
    valueGetter: (subscriber) => {
      return subscriber ? "Yes" : "No";
    },
  },
  {
    field: "enabled",
    headerName: "Status",
    width: 100,
    valueGetter: (enable) => {
      return enable ? "Yes" : "No";
    },
  },

  {
    field: "companies",
    headerName: "Companies",
    sortable: false,
    width: 300,
    renderCell: ({ row }) => {
      return (
        <>
          <TagsGroupStyle>
            {[...row?.companies].map(({ name }, index) => (
              <Chip classNameProps="more_chips" key={index} label={name} />
            ))}
          </TagsGroupStyle>
        </>
      );
    },
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    renderCell: ({ row }) => (
      <DropDown
        width={"170px"}
        className="medium"
        menuItems={[
          {
            label: "Edit",
            icon: <EditIcon />,
            onClick: () => {
              handleView(row);
            },
          },
          {
            label: "Join Companies",
            icon: <BusinessIcon />,
            onClick: () => {
              handleOrgnization(row);
            },
          },
          {
            label: "Delete",
            icon: <DeleteOutline />,
            onClick: (e) => {
              setDeletePopover({ isConfirmModalOpen: true, value: row });
            },
          },
        ]}
      />
    ),
  },
];

export default useColumns;
