import '@fontsource/poppins';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SongsContextProvider } from '../contexts/SongContext';
import PlayerLayout from '../components/PlayerLayout';
import 'reset-css';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
  },
  colors: {
    gray: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  components: {
    Button: {
      variant: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SongsContextProvider>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </SongsContextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
