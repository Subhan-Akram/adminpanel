import { Box, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SullyTypography } from "components";
import { OvalLogin } from "assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, LoginSubmitButton, LoginWrapper, ToolBar } from "./style";
import { SullyLogo } from "assets";
import EastIcon from "@mui/icons-material/East";
import { signIn } from "features/login/services";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);
  const handleLogin = async (credentials) => {
    try {
      const resp = await dispatch(signIn({ credentials, dispatch }, navigate));
      if (resp) navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      await handleLogin(values);
      navigate("/");
    },
  });

  return (
    <>
      <AppBar position="fixed" open={false}>
        <ToolBar>
          <Box className="logoRoot">
            <img src={SullyLogo} alt="" />
          </Box>
          <Box className="profileRoot">
            <Box>
              <SullyTypography
                classNameProps="bold-500  text-primary-17"
                variant="subtitle1"
              >
                Sign in
              </SullyTypography>
            </Box>
            <Box className="active_menu">
              <SullyTypography
                classNameProps="bold-500  text-primary-17"
                variant="subtitle1"
              >
                Sign up
              </SullyTypography>
              <EastIcon />
            </Box>
          </Box>
        </ToolBar>
      </AppBar>
      <LoginWrapper>
        <Box className="oval_right">
          <img src={OvalLogin} alt="Decoration" />
        </Box>
        <Box className="oval_left">
          <img src={OvalLogin} alt="Decoration" />
        </Box>
        <Box className="red_shadow">sdsa</Box>
        <Box className="form_content">
          <Box className="typo_box">
            <SullyTypography classNameProps="page_title_lg">
              Login
            </SullyTypography>
            <SullyTypography
              classNameProps="sub_title_1_lg join_text"
              variant="h5"
            >
              Join our community today!
            </SullyTypography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Box className="form_field">
              <label>Email</label>
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box className="form_field">
              <label>Password</label>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>

            <LoginSubmitButton type="submit">
              Login{" "}
              {isLoading ? <CircularProgress size={24} color="inherit" /> : ""}
            </LoginSubmitButton>
          </form>
          <Box className="dont_have_account">
            <SullyTypography
              classNameProps="font-500"
              variant="h5"
            >{`Don't have an account? `}</SullyTypography>
            <Link to="/login">Sign up</Link>
          </Box>
        </Box>
      </LoginWrapper>
    </>
  );
};

export default Login;
