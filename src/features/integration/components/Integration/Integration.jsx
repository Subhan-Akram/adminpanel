import { Box, Breadcrumbs } from "@mui/material";
import { IntegartionWrapper } from "./style";
import {
  AddCard,
  ConfirmDynamicModal,
  ModelSetSkeleton,
  SullyTypography,
  TextButton,
} from "components";
import Add from "@mui/icons-material/Add";
import { DeleteIcon, RightArrowIcon } from "sullyIcons";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useEffect, useState } from "react";
import IntegrationCard from "./IntegrationCard";
import SearchModelSetModal from "./SearchModelSetModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelSet } from "features/integration/services";
import { deleteModelSet, generateSecurityKey } from "apiTwg";
import { setSecurityKey, resetState } from "features/integration/slice";
import { downloadFile } from "utils";
import { triggerAlert } from "slice/alertSlice";
import CodeSdk from "./CodeSdk";
import SaveKeyReminderModal from "../SaveKeyReminderModal";
import { setIsSaveKeyReminderOpen } from "features/integration/slice";
import { setCollectionByName } from "features/home";
import { setModelsArray } from "features/models/slice";
import GetBreadcrumb from "utils/getBreadcrumb";

const Integration = () => {
  const { modelSet, isLoading, error, allModelSetId } = useSelector(
    (state) => state.integration,
  );

  const dispatch = useDispatch();

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [deleteAllLoading, setDeleteAllLoading] = useState(false);
  const [isModelSetOpen, setIsModelSetOpen] = useState(false);

  const handleGenerateKey = async () => {
    try {
      const { data } = await generateSecurityKey(modelSet[0].modelSetExtId);
      dispatch(setSecurityKey(data.integrationToken));
      downloadFile(data.integrationToken, "security key");
      dispatch(setIsSaveKeyReminderOpen(true));
    } catch (err) {
      dispatch(
        triggerAlert({
          title: "Api Failed",
          text: err.message,
          alertType: "error",
        }),
      );
    }
  };
  const handleDelete = () => {
    if (!allModelSetId?.length) return;
    setDeleteAllLoading(true);
    const promises = [];
    for (let i = 0; i < allModelSetId.length; i++) {
      promises.push(deleteModelSet(allModelSetId[i]));
    }

    Promise.all(promises)
      .then(([{ status }]) => {
        if (status === 200) {
          setIsRemoveModalOpen(false);
          dispatch(resetState());
          dispatch(
            triggerAlert({
              title: "Successfull",
              text: "All Models Deleted",
              alertType: "success",
            }),
          );
        }
      })
      .catch(() => {
        dispatch(
          triggerAlert({
            title: "Api Failed",
            text: "Failed To Delete All Models",
            alertType: "error",
          }),
        );
      })
      .finally(() => setDeleteAllLoading(false));
  };

  const handleRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  useEffect(() => {
    if (!modelSet.length) {
      dispatch(getAllModelSet());
    }
  }, [dispatch, modelSet.length]);

  return (
    <>
      <SaveKeyReminderModal />
      <ConfirmDynamicModal
        isConfirmModalOpen={isRemoveModalOpen}
        handleSubmit={handleDelete}
        setIsConfirmModalOpen={setIsRemoveModalOpen}
        title="Delete All Models"
        description={
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to delete all models from the integration?
          </SullyTypography>
        }
        isLoading={deleteAllLoading}
      />
      <SearchModelSetModal
        isOpen={isModelSetOpen}
        setIsOpen={setIsModelSetOpen}
      />
      <IntegartionWrapper modelset={modelSet}>
        <Box className="header">
          <Breadcrumbs separator={<RightArrowIcon />} aria-label="breadcrumb">
            {GetBreadcrumb()}
          </Breadcrumbs>

          <Box className="header_inner">
            <SullyTypography classNameProps="page_title">
              Integrations
            </SullyTypography>
            <Box className="header_btn">
              <TextButton
                className="delete_btn"
                startIcon={<DeleteIcon />}
                sx={{ display: modelSet.length ? "" : "none" }}
                onClick={handleRemoveModal}
              >
                Delete All Models
              </TextButton>
              {!!modelSet.length && (
                <>
                  <TextButton
                    variant="text"
                    onClick={handleGenerateKey}
                    startIcon={<FileDownloadOutlinedIcon />}
                  >
                    Download New Security Key
                  </TextButton>
                  <TextButton
                    onClick={() => {
                      setIsModelSetOpen(true);
                      dispatch(setCollectionByName({ name: "tags", data: [] }));
                      dispatch(
                        setModelsArray({ name: "selectedModels", data: [] }),
                      );
                    }}
                    variant="text"
                    startIcon={<Add />}
                  >
                    Integrate LLM Models
                  </TextButton>
                </>
              )}
            </Box>
          </Box>
        </Box>
        {isLoading && !error && <ModelSetSkeleton />}
        {!modelSet.length && !isLoading && (
          <AddCard
            title="No Model Has Been Added"
            handleClick={setIsModelSetOpen}
            btnText="Integrate Models"
          />
        )}
        {!!modelSet.length && !isLoading && !error && (
          <>
            <Box className="model_set_list">
              {modelSet.map((val) => (
                <IntegrationCard key={val.modelSetExtId} {...val} />
              ))}
            </Box>
            <Box className="code_sdk_container">
              <SullyTypography classNameProps="sideBarTitle">
                SDK Code
              </SullyTypography>
              <CodeSdk />
            </Box>
          </>
        )}
      </IntegartionWrapper>
    </>
  );
};

export default Integration;
