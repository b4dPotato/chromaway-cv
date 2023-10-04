import { Grid, Typography } from '@mui/material';

interface Props {
  useMobileLogo?: boolean;
}

const Logo = ({ useMobileLogo = false }: Props) => {
  if (useMobileLogo) {
    return (
      <Grid container direction="row" wrap="nowrap">
        <img alt="Logo" src="/logo.svg" style={{ width: 40, height: 40 }} />
      </Grid>
    );
  }

  return (
    <Grid container direction="row" wrap="nowrap">
      <Typography color="white" variant="h4" mr={1}>
        TRANS
        <Typography variant="h4" component="span" color="yellowgreen">
          FER
        </Typography>
      </Typography>
      <img alt="Logo" src="/logo.svg" />
    </Grid>
  );
};

export default Logo;
