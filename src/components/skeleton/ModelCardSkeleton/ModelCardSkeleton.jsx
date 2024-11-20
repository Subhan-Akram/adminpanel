import { Box, Skeleton } from "@mui/material";
import { ModelCardSkeletonWrapper } from "./style";

const ModelCardSkeleton = () => {
  return (
    <ModelCardSkeletonWrapper spacing={1}>
      <Skeleton
        className="logo_frame"
        variant="rectangular"
        width={60}
        height={60}
      />
      <Box className="model_content">
        <Skeleton variant="rectangular" width={76} height={12} />
        <Skeleton variant="rectangular" width={166} height={10} />
        <Skeleton variant="rectangular" width={166} height={10} />
      </Box>
      <Skeleton variant="rounded" width={"100%"} height={2} />
      <Box className="sk_description">
        <Skeleton variant="rounded" width={"100%"} height={10} />
        <Skeleton variant="rounded" width={"60%"} height={10} />
      </Box>
      <Box className="model_tags">
        <Skeleton variant="rounded" width={70} height={32} />
        <Skeleton variant="rounded" width={70} height={32} />
        <Skeleton variant="rounded" width={70} height={32} />
      </Box>
      <Box className="footer">
        <Box className="comparision">
          <Skeleton variant="rounded" width={"90%"} height={40} />
          <Skeleton variant="rounded" width={"10%"} height={40} />
        </Box>
        <Skeleton variant="rounded" width={"100%"} height={40} />
      </Box>
    </ModelCardSkeletonWrapper>
  );
};
export default ModelCardSkeleton;
