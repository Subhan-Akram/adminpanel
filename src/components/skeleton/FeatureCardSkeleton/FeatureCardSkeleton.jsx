import { Box, Skeleton } from "@mui/material";
import { FeatureCardSkeletonWrapper } from "./style";

const FeatureCardSkeleton = () => {
  return (
    <FeatureCardSkeletonWrapper spacing={1}>
      <Skeleton variant="rectangular" width={"60px"} height={"60px"} />
      <Box className="header" mt={2} width={120} textAlign="center">
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="100%" height={20} />
      </Box>
      <Skeleton variant="rectangular" width={"100%"} height={30} mt={2} />
      <Skeleton variant="rectangular" width="100%" height={1} mt={2} />
      <Box className="feature_content_box" width="100%">
        {[...Array(2)].map((_, index) => (
          <Box className="item" key={index} mb={2}>
            <Skeleton variant="text" width={"40%"} height={40} />
            <Skeleton variant="text" width={"70%"} height={22} />
            <Skeleton variant="text" width={"70%"} height={22} />
          </Box>
        ))}
      </Box>
    </FeatureCardSkeletonWrapper>
  );
};
export default FeatureCardSkeleton;
