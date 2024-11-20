import { Box, Card, Skeleton } from "@mui/material";
import { ModelDescriptionSkeletonWrapper } from "./style";

export default function ModelDescriptionSkeleton() {
  return (
    <ModelDescriptionSkeletonWrapper>
      <Box className="header_box">
        <Skeleton variant="text" width="200px" height="40px" />
        <Skeleton variant="rectangular" width="100px" height="40px" />
      </Box>

      <Box className="description_container">
        <Box className="model_card">
          <Box className="header">
            {" "}
            <Skeleton width="110px" height="110px" />
            <Box>
              <Skeleton variant="text" width="60px" height="20px" />
              <Skeleton variant="text" width="120px" height="20px" />
              <Skeleton variant="text" width="60px" height="20px" />
            </Box>
          </Box>

          <Box className="skeleton_divider">
            {" "}
            <Skeleton variant="text" width="100%" height="4px" />
          </Box>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="150px"
            style={{ margin: "16px 0" }}
          />
          <Box className="skeleton_divider">
            {" "}
            <Skeleton variant="text" width="100%" height="4px" />
          </Box>
          <Box className="group_box">
            <Skeleton width={"100%"} height={"40px"}></Skeleton>
            <Skeleton width={"100%"} height={"40px"}></Skeleton>
          </Box>
        </Box>

        <Box className="model_card_right">
          <Card className="detail_card_skeleton">
            <Skeleton
              className="title"
              variant="text"
              width="120px"
              height="28px"
            />
            {[1, 2, 3].map((val) => (
              <Skeleton key={val} variant="text" width="100%" height="14px" />
            ))}
            <Skeleton variant="text" width="80%" height="14px" />
            <Skeleton variant="text" width="60%" height="14px" />
            <Skeleton variant="text" width="40%" height="14px" />
          </Card>
          <Card className="detail_card_skeleton detail_card_skeleton_2">
            <Skeleton
              className="title"
              variant="rectangular"
              width="120px"
              height="24px"
            />
            {[1, 2, 3, 4].map((val) => (
              <Skeleton key={val} variant="text" width="100%" height="14px" />
            ))}
            <Skeleton variant="text" width="80%" height="14px" />
            <Skeleton variant="text" width="60%" height="14px" />
            <Skeleton variant="text" width="40%" height="14px" />
          </Card>
        </Box>
      </Box>
    </ModelDescriptionSkeletonWrapper>
  );
}
