import { useLocation } from "react-router-dom";

function useGetNavigationPath() {
  const { pathname } = useLocation();
  const splitPaths = pathname.slice(1).split("/");
  const getNavigatePath = `/${pathname
    .slice(1)
    .split("/")
    .slice(0, splitPaths.length - 1)
    .join("/")}`;
  return { getNavigatePath };
}

export default useGetNavigationPath;
