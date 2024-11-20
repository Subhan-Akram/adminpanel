import { Box, Skeleton } from "@mui/material";
import { PromptSkeletonWrapper } from "./style";

const PromptCompareSkeleton = () => {
  return (
    <PromptSkeletonWrapper spacing={1}>
      <Box className="model_container">
        <Skeleton variant="rectangular" width={"100%"} height={24} />
        <Skeleton variant="rectangular" width={"100%"} height={24} />
      </Box>
    </PromptSkeletonWrapper>
  );
};

export default PromptCompareSkeleton;
