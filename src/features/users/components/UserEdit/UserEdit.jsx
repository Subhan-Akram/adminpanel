import React, { useRef } from "react";
import UserForm from "../UserForm";
import { triggerAlert } from "slice/alertSlice";
import { useDispatch } from "react-redux";
import { Drawer } from "components";

function UserEdit({ edit, setEdit, user }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      triggerAlert({
        title: "Success",
        text: "User Updated Successfully",
        alertType: "success",
      }),
    );
    setEdit(false);
  };

  return (
    <>
      <Drawer
        formRef={formRef}
        title="Edit User"
        setOpen={setEdit}
        open={edit}
        isLoading={false}
      >
        <UserForm
          isEdit={true}
          formRef={formRef}
          initialValues={user}
          handleSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
}

export default UserEdit;
