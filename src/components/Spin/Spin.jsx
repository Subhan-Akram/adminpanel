import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import { Container, ShadowScreen } from "./Style";
export default function Spin({ loading }) {
  return (
    loading && (
      <Container>
        <ShadowScreen open={true}>
          <CircularProgress color="inherit" />
        </ShadowScreen>
      </Container>
    )
  );
}

Spin.propTypes = {
  loading: PropTypes.bool.isRequired,
  open: PropTypes.bool,
};
