import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ disabledLink = false, sx, ...other }) => {
  if (disabledLink) {
    <Box
      component="img"
      src="/logo/logo_single.svg"
      sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
      {...other}
    />;
  }

  return (
    <Link component={Link} href="/" sx={{ display: 'contents' }}>
      <Box
        component="img"
        src="/logo/logo_single.svg"
        sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
        {...other}
      />
    </Link>
  );
};

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
