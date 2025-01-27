import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";

const useUserInfo = () => {
  const { access_token: token } = useSelector((state) => state.auth);
  const { decodedToken } = useJwt(token);
  const name = decodedToken?.name || "";

  if (!token) {
    return { decodedToken: null, isExpired: true };
  }

  return name;
};

export default useUserInfo;
