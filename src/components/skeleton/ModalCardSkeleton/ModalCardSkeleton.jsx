import { Box, Skeleton } from "@mui/material";
import { ModelCardSkeletonWrapper } from "./style";

const ModalCardSkeleton = () => {
  return (
    <ModelCardSkeletonWrapper spacing={1}>
      <Box className="modal_header">
        <Skeleton
          className="logo_frame"
          variant="rectangular"
          width={60}
          height={60}
        />
        <Box className="model_content">
          <Skeleton variant="rectangular" width={76} height={24} />
          <Skeleton variant="rectangular" width={196} height={24} />
          <Skeleton variant="rectangular" width={120} height={24} />
        </Box>
      </Box>
      <Skeleton variant="rectangular" width={"100%"} height={2} />
      <Skeleton variant="rectangular" width={"70%"} height={10} />
      <Skeleton variant="rectangular" width={"70%"} height={10} />
      <Skeleton variant="rectangular" width={"20%"} height={10} />
      <Box className="model_tags_loader">
        <Skeleton variant="rounded" width={70} height={26} />
        <Skeleton variant="rounded" width={70} height={26} />
        <Skeleton variant="rounded" width={70} height={26} />
      </Box>
      <Skeleton className="footer_btn" width={"90%"}></Skeleton>
    </ModelCardSkeletonWrapper>
  );
};
export default ModalCardSkeleton;
