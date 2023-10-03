import { createTheme } from '@mui/material';

const primaryColor = '#FF6B6B'; // Red
const secondaryColor = '#9ACD32'; // Yellow-Green (Muted)
const accentColor = '#6B8BFF'; // Blue
const textColor = '#333'; // Dark Grey

// Create a Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: accentColor,
    },
    background: {
      default: '#FFFFFF', // White background
    },
    text: {
      primary: textColor, // Dark grey text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Set your preferred font family
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: 'solid 2px',
          ':hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: 4,
          input: {
            padding: 15,
          },
          ':hover': {
            outline: '2px solid black',
            background: 'white',
          },
          '&.Mui-focused': {
            outline: '2px solid black',
            background: 'white',
            input: {
              color: 'black',
            },
          },
        },
      },
    },
  },
});

export default theme;
