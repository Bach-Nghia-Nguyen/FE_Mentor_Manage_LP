import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'utils/theme'
// import 'swiper/css/bundle'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
