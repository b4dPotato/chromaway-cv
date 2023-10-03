import {
  Box,
  FilledInput,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import SmartButton from 'src/components/web3/SmartButton';

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  background: theme.palette.primary.main,
  padding: '40px 80px',
}));

const TransferPage = () => {
  const sendCrypto = () => {
    console.log('send');
  };

  return (
    <Box pt={20}>
      <StyledPaper elevation={3}>
        <Typography color="white" variant="h5" align="center" fontWeight={600}>
          Send Crypto in One Click!
        </Typography>

        <Box mt={8}>
          <FilledInput
            fullWidth
            disableUnderline
            placeholder="Address you want to send a crypto 0xef1..."
          />

          <Grid container mt={2}>
            <FilledInput
              fullWidth
              disableUnderline
              placeholder="How much? ... 3 ETH"
            />
          </Grid>
          <SmartButton
            disabled={false}
            sx={{ mt: 2, width: '100%' }}
            fullWidth
            variant="contained"
            color="secondary"
            onClick={sendCrypto}
          >
            Send
          </SmartButton>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default TransferPage;
