import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from "./theme/theme";
import './index.css'

function App() {

  return (
    <>
        <ChakraBaseProvider theme={theme}>
          <p>Hello World</p>
        </ChakraBaseProvider>
    </>
  )
}

export default App
