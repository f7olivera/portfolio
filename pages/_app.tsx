import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";
import "@fontsource/inter";
import "@fontsource/karla";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    'terminal': '#101010',
    'uwu': '#4a4a81',
    'zinc.800.bluer': '#27272c',
    'zinc.800': '#27272a',
    'slate.300': '#cbd5e1',
    'zinc.900': '#18181b'
  },
  styles: {
    global: {
      body: {
        color: 'gray.300',
        backgroundColor: 'zinc.900'
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
