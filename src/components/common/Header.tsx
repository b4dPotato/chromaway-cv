import { AppBar, Container, Grid } from '@mui/material';
import ConnectButton from '../web3/ConnectButton';
import NetworkSelect from '../web3/NetworkSelect';
import Logo from './Logo';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: 70, px: 10 }}>
      <Container maxWidth="lg" sx={{ height: 'inherit' }}>
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Logo />

          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={3}
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
    </AppBar>
  );
};

export default Header;
