import { Box, Skeleton } from "@mui/material";
import { ModelSetSkeletonWrapper } from "./style";

const ModelSetSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((val) => (
        <ModelSetSkeletonWrapper key={val}>
          <Box className="skeleton_content" height={100}>
            <Box className="card_header">
              <Skeleton
                className="logo_frame"
                variant="rectangular"
                // width={60}
                // height={60}
              />
              <Box>
                <Skeleton width={80} height={30}></Skeleton>
                <Skeleton width={120} height={30}></Skeleton>
              </Box>
            </Box>
            <Box>
              <Skeleton
                className="skeleton_switch"
                width={54}
                height={44}
              ></Skeleton>
            </Box>
          </Box>
        </ModelSetSkeletonWrapper>
      ))}
    </>
  );
};

export default ModelSetSkeleton;
