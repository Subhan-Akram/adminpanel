import PropTypes from "prop-types";
import { TypographyWrapper } from "./Style";

const SullyTypography = ({ variant, classNameProps, children, onClick }) => {
  return (
    <TypographyWrapper
      onClick={onClick}
      variant={variant}
      className={classNameProps}
    >
      {children}
    </TypographyWrapper>
  );
};

SullyTypography.propTypes = {
  children: PropTypes.node,
  classNameProps: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
export default SullyTypography;
