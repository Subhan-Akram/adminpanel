import { CodeSkeletonWrapper } from "./style";
import { Box, Skeleton } from "@mui/material";

const CodeSkeleton = () => {
  return (
    <CodeSkeletonWrapper>
      {[1, 2].map((val) => (
        <Box key={val}>
          <Skeleton width={"80%"} height={25}></Skeleton>
          <Skeleton width={"80%"} height={25}></Skeleton>
          <Skeleton width={"70%"} height={25}></Skeleton>
          <Skeleton width={"40%"} height={25}></Skeleton>
          <Skeleton width={"60%"} height={25}></Skeleton>
        </Box>
      ))}
    </CodeSkeletonWrapper>
  );
};

export default CodeSkeleton;
