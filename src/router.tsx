import { createBrowserRouter } from 'react-router-dom'
import { J, Jivee } from './pages'
import { ForgotPassword, SignIn, SignUp } from './modules'

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Jivee />,
    },
    {
        path: 'auth',
        children: [
            {
                path: 'signup',
                element: <SignUp />,
            },
            // {
            //     path: 'register-phoneNumber',
            //     element: <RegisterNumber  />,
            // },
            // {
            //     path: 'get-started',
            //     element: <GetStarted />,
            // },
            {
                path: 'signin',
                element: <SignIn />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
        ]
    },
    {
        path: 'j',
        element: <J />,
    }
    
])

export default router