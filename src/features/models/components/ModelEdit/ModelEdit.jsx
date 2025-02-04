import React from "react";
import ModelForm from "../ModelForm";
import { modelInitialValues } from "features/models/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateModel } from "../../services";

const ModelEdit = ({ setModel, setType, model }) => {
  const { crudLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    dispatch(updateModel({ payload: values, dispatch }))
      .unwrap()
      .then((val) => {
        setType("view");
        setModel(val);
      });
  };

  return (
    <ModelForm
      setType={setType}
      isEdit={true}
      isLoading={crudLoading}
      handleSubmit={handleSubmit}
      initialValues={{
        ...modelInitialValues,
        ...model,
        tags: model.tags.map(({ name }) => name),
        features: {
          Pricing: [{ title: "" }],
          Weakness: [{ title: "" }],
          "Key Features": [{ title: "" }],
        },
      }}
    />
  );
};

export default ModelEdit;
