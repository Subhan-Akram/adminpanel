import { generateSnippet } from "features/integration/services";
import { CodeTabsWrapper } from "./style";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCodeSnippet } from "features/integration/slice";
import { CodeTabSkeleton } from "components";

const CodeTabs = ({ activeTab, setActiveTab, handleGenerateSnippet }) => {
  const dispatch = useDispatch();
  const {
    securityKey,
    programmingLanguages: languages,
    modelSet,
    codeSnippet,
    isLanguageCodeLoading,
  } = useSelector((state) => state.integration);

  const [language] = languages;

  useEffect(() => {
    if (language && !activeTab) {
      dispatch(setCodeSnippet(""));
      setActiveTab(language);
    }
  }, [language, setActiveTab, activeTab, dispatch]);
  useEffect(() => {
    const [{ modelSetExtId } = {}] = modelSet;
    if (activeTab && securityKey && !codeSnippet)
      dispatch(
        generateSnippet({
          payload: {
            modelSetExtId,
            authorization: securityKey,
            language: activeTab,
          },
          dispatch,
        }),
      );
  }, [activeTab, codeSnippet, dispatch, modelSet, securityKey]);
  return (
    <CodeTabsWrapper variant="outlined" aria-label="Basic button group">
      {isLanguageCodeLoading && !languages.length && <CodeTabSkeleton />}
      {languages.map(({ code, displayName }) => (
        <Button
          key={code}
          className={activeTab === code ? "active" : ""}
          onClick={() => {
            setActiveTab({ code, displayName });
            if (!securityKey) return;
            handleGenerateSnippet(securityKey, code);
          }}
        >
          {displayName}
        </Button>
      ))}
    </CodeTabsWrapper>
  );
};

CodeTabs.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
  handleGenerateSnippet: PropTypes.func,
};

export default CodeTabs;
