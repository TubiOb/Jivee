import { ChakraBaseProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import theme from "./theme/theme";
import './index.css'

function App() {

  return (
    <>
        <ChakraBaseProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ChakraBaseProvider>
    </>
  )
}

export default App
