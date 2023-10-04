import {
  AppBar,
  Container,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ConnectButton from '../web3/ConnectButton';
import NetworkSelect from '../web3/NetworkSelect';
import Logo from './Logo';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 70,
  [theme.breakpoints.down('sm')]: {
    height: 90,
  },
}));

const Header = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg" sx={{ height: 'inherit' }}>
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Logo useMobileLogo={isSm} />

          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={3}
            flexWrap="nowrap"
          >
            <Grid item>
              <NetworkSelect />
            </Grid>
            <Grid item>
              <ConnectButton />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
