import React, { useEffect } from "react";
import ModelForm from "../ModelForm";
import { modelInitialValues } from "features/models/constants";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelTags, updateModel } from "../../services";

const ModelEdit = ({ setModel, setType, model }) => {
  const { crudLoading, tags } = useSelector((state) => state.models);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    dispatch(updateModel({ payload: values, dispatch }))
      .unwrap()
      .then(() => {
        setType("view");
        setModel(values);
      });
  };

  useEffect(() => {
    if (!tags.length) dispatch(getAllModelTags());
  }, [dispatch, tags.length]);

  return (
    <ModelForm
      setType={setType}
      isEdit={true}
      isLoading={crudLoading}
      handleSubmit={handleSubmit}
      initialValues={{
        ...modelInitialValues,
        ...model,
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
