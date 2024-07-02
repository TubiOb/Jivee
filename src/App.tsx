import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import theme from "./theme/theme";
import './index.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in');
    } else {
      console.log('User is logged out');
    }
  });

  return (
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
  )
}

export default App
