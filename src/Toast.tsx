import { Toaster } from 'sonner'
import '../index.css'
// import { ToastProps } from './interface'

const Toast = ( showToast: any ) => {

  return (
    <div>
        <Toaster
            position='top-center'
            visibleToasts={2}
            dir='rtl'
            theme="light"
            invert={true}
            expand={true}
            richColors
            closeButton
            // containerStyle={{ marginRight: '2%' }}
            />
    </div>
  )
}

export default Toast