import { Box, Skeleton } from "@mui/material";
import { PromptModelCardSkeletonWrapper } from "./style";

const PromptModelCardSkeleton = () => {
  return (
    <PromptModelCardSkeletonWrapper spacing={1}>
      <Box className="prompt_header_box">
        <Box className="prompt_inner_left">
          <Skeleton height={40} width={40} variant="rectangular" />
          <Box className="prompt_inner_2">
            <Skeleton height={20} width={40} variant="rectangular" />
          </Box>
        </Box>
        <Box>
          <Skeleton width={6} height={6} variant="rectangular" />
          <Skeleton width={6} height={6} variant="rectangular" />
          <Skeleton width={6} height={6} variant="rectangular" />
        </Box>
      </Box>
    </PromptModelCardSkeletonWrapper>
  );
};
export default PromptModelCardSkeleton;
