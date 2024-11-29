// /* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import { Table, Avatar, Tag, Button, Space } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteModel } from "../../models/services";
// import { triggerAlert } from "../../../slice/alertSlice";
// import getUserByEmail from "../services/getUserByEmail";
// import { getUsers } from "../services";

// const columns = ({ handleView, setDeletePopover }) => [
//   {
//     title: "Full Name",
//     dataIndex: "fullName",
//     key: "fullName",
//     width: 220,
//     render: (text, row) => (
//       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//         {row.fullName && (
//           <Avatar
//             src={row.logoUrl}
//             alt={row.fullName}
//             style={{ width: 30, height: 30 }}
//           />
//         )}
//         <span
//           style={{
//             fontWeight: 500,
//             width: "120px",
//             textAlign: "center",
//             display: "flex",
//             justifyContent: row.fullName ? "start" : "center",
//           }}
//         >
//           {row.fullName || "-"}
//         </span>
//       </div>
//     ),
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     key: "email",
//     width: 220,
//   },
//   {
//     title: "Company",
//     dataIndex: "company",
//     key: "company",
//     width: 180,
//     render: (_, row) => row.name,
//   },
//   {
//     title: "Teams",
//     dataIndex: "teams",
//     key: "teams",
//     width: 200,
//     render: (teams) => (
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "8px",
//           marginLeft: teams?.length ? "0" : "20px",
//         }}
//       >
//         {teams?.length
//           ? teams.map(({ name }) => (
//               <Tag key={name} style={{ whiteSpace: "nowrap" }}>
//                 {name}
//               </Tag>
//             ))
//           : "-"}
//       </div>
//     ),
//   },
//   {
//     title: "Roles",
//     dataIndex: "roles",
//     key: "roles",
//     width: 200,
//     render: (roles) =>
//       roles?.length
//         ? roles.map((role) => (
//             <Tag key={role} style={{ whiteSpace: "nowrap" }}>
//               {role}
//             </Tag>
//           ))
//         : "No Roles",
//   },
//   {
//     title: "Actions",
//     key: "actions",
//     width: 100,
//     render: (_, row) => (
//       <Space size="middle">
//         <Button
//           icon={<EditOutlined style={{ color: "var(--icon-primary)" }} />}
//           onClick={() => handleView(row)}
//         />
//         <Button
//           icon={<DeleteOutlined style={{ color: "var(--icon-primary)" }} />}
//           onClick={(e) => {
//             setDeletePopover({ element: e.currentTarget, model: row });
//           }}
//         />
//       </Space>
//     ),
//   },
// ];

// const UserTable2 = () => {
//   const { users, isLoading } = useSelector((state) => state.users);
//   console.log("users", users);
//   const [open, setOpen] = useState(false);
//   const [deletePopover, setDeletePopover] = useState({
//     element: null,
//     model: "",
//   });
//   // eslint-disable-next-line no-unused-vars
//   const [user, setUser] = useState({
//     model: "ns",
//     description: "s",
//     rating: 2,
//     modelCard: "23",
//   });
//   const dispatch = useDispatch();
//   const handleDelete = async () => {
//     const { model } = deletePopover;
//     const { payload } = await dispatch(deleteModel({ extId: model.extId }));
//     if (payload) {
//       dispatch(
//         triggerAlert({
//           title: "Success",
//           text: "Model Deleted Successfully",
//           alertType: "success",
//         })
//       );
//       setDeletePopover({ element: null, extId: "" });
//     }
//   };
//   const handleView = (row) => {
//     console.log("row", row);
//     setUser(row);
//     setOpen(true);
//     console.log("view ticket ");
//   };
//   const handleSearch = async (value) => {
//     console.log("val", value);
//     if (value) return dispatch(getUserByEmail({ email: value, dispatch }));
//     dispatch(getUsers({ dispatch }));
//   };

//   return (
//     <Table
//       dataSource={users}
//       columns={columns({ handleView, handleDelete })}
//       rowKey={(record) => record.id}
//       pagination={{ pageSize: 10 }}
//       bordered
//     />
//   );
// };

// export default UserTable2;
