import { Box, Skeleton } from "@mui/material";
import { RecommendedSkeletonWrapper } from "./style";

const RecommendedPromptSkeleton = () => {
  return (
    <RecommendedSkeletonWrapper spacing={1}>
      <Box>
        <Skeleton width={"100%"} variant="rectangular" />
        <Skeleton width={"70%"} variant="rectangular" />
        <Skeleton width={"40%"} variant="rectangular" />
      </Box>
    </RecommendedSkeletonWrapper>
  );
};
export default RecommendedPromptSkeleton;
