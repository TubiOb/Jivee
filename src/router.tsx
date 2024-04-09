import { createBrowserRouter } from 'react-router-dom'
import { Jivee } from './pages'
import { ForgotPassword, SignIn, SignUp } from './modules'

const router = createBrowserRouter ([
    {
        path: '',
        element: <Jivee />,
    },
    {
        path: 'auth',
        children: [
            {
                path: 'signup',
                element: <SignUp />,
            },
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
    
])

export default router