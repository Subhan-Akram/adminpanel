import { CopyButton } from "components";
import { CodeSdkWrapper } from "./style";
import { Box } from "@mui/material";
import CodeTabs from "../CodeTabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLanguageCode,
  generateSnippet,
} from "features/integration/services";
import AddKeyModal from "../../AddKeyModal";
import { setSecurityKey } from "features/integration/slice";
import PropTypes from "prop-types";
import CodeSnippet from "./CodeSnippet";

const CodeSdk = () => {
  const dispatch = useDispatch();
  const { codeSnippet, modelSet } = useSelector((state) => state.integration);
  const [activeTab, setActiveTab] = useState({ displayName: "", code: "" });
  const [isAddKeyModalOpen, setIsAddKeyModalOpen] = useState(false);

  const handleGenerateSnippet = async (authorization, language) => {
    const [{ modelSetExtId } = {}] = modelSet;
    const { payload } = await dispatch(
      generateSnippet({
        payload: {
          modelSetExtId,
          authorization,
          language,
        },
        dispatch,
      }),
    );

    if (payload && payload.status !== 400) {
      dispatch(setSecurityKey(authorization));
    }
    setIsAddKeyModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllLanguageCode(dispatch));
  }, [dispatch]);
  return (
    <>
      <AddKeyModal
        isOpen={isAddKeyModalOpen}
        setIsOpen={setIsAddKeyModalOpen}
        handleClick={handleGenerateSnippet}
        activeTab={activeTab}
      />
      <CodeSdkWrapper>
        <Box className="sdk_header">
          <Box className="sdk_header_left">
            <Box>
              <CodeTabs
                activeTab={activeTab.code}
                setActiveTab={setActiveTab}
                handleGenerateSnippet={handleGenerateSnippet}
              />
            </Box>
          </Box>
          {codeSnippet && <CopyButton item={codeSnippet} />}
        </Box>

        <Box className="code_display">
          <CodeSnippet
            activeTab={activeTab}
            setIsAddKeyModalOpen={setIsAddKeyModalOpen}
          />
        </Box>
      </CodeSdkWrapper>
    </>
  );
};

CodeSdk.propTypes = {
  modelSetExtId: PropTypes.string,
};

export default CodeSdk;
