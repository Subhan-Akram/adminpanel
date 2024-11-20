import { Box, Skeleton } from "@mui/material";
import { ChatSkeletonWrapper, TabWrapper } from "./style";
import { useSelector } from "react-redux";
import { useState } from "react";

const ChatSkeleton = () => {
  const { mergeSelectedModelsCollection } = useSelector((state) => state.home);
  const getSelectedModels = mergeSelectedModelsCollection.filter(
    (val) => val.extId,
  );
  const [activeTab, setActiveTab] = useState(
    getSelectedModels[0].name.replace(/\s+/g, ""),
  );

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <>
      <TabWrapper className="model_tabs">
        {getSelectedModels.map((val, i) => {
          const promptKey = val.name.replace(/\s+/g, "");
          return (
            <Box
              key={promptKey}
              className={`tab ${activeTab === promptKey ? "active" : ""} ${
                i > 0 ? "tab_margin" : ""
              }`}
              onClick={() => handleTabChange(promptKey)}
            >
              <img alt="logo" src={val.logoUrl} />
            </Box>
          );
        })}
      </TabWrapper>
      <ChatSkeletonWrapper spacing={1}>
        <Box>
          <Skeleton height={20} width={"30%"} variant="rectangular" />
          <Skeleton height={20} width={"100%"} variant="rectangular" />
          <Skeleton height={20} width={"50%"} variant="rectangular" />
        </Box>
      </ChatSkeletonWrapper>
    </>
  );
};
export default ChatSkeleton;
