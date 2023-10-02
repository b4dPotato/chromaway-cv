import { AppBar, Grid } from '@mui/material'
import ConnectButton from '../web3/ConnectButton'
import Logo from './Logo'

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ height: 70, px: 10 }}>
      <Grid container justifyContent="space-between" alignItems="center" height="100%">
        <Logo />

        <ConnectButton />
      </Grid>
    </AppBar>
  )
}

export default Header
