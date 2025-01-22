import { Drawer, PrimaryButton } from "components";
import React, { useRef, useState } from "react";
import UserForm from "../UserForm";
import { triggerAlert } from "slice/alertSlice";
import { useDispatch } from "react-redux";
import { userData } from "features/users/constants";

const UserCreate = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      triggerAlert({
        title: "Success",
        text: "User Created Successfully",
        alertType: "success",
      }),
    );
    setOpen(false);
  };

  return (
    <>
      <PrimaryButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Create User
      </PrimaryButton>
      <Drawer
        formRef={formRef}
        title="Create User"
        setOpen={setOpen}
        open={open}
        isLoading={false}
      >
        <UserForm
          isEdit={true}
          formRef={formRef}
          initialValues={userData}
          handleSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
};

export default UserCreate;
