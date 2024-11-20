import { Skeleton } from "@mui/material";
import { CodeTabWrapper } from "./style";

const CodeTabSkeleton = () => {
  return (
    <CodeTabWrapper variant="rounded" spacing={1}>
      {[1, 2, 3, 4].map((val) => (
        <Skeleton key={val} width={40} />
      ))}
    </CodeTabWrapper>
  );
};
export default CodeTabSkeleton;
