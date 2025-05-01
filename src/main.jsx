import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import GlobalStyles from './styles/globalStyle'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
 
    <RouterProvider router={router} />
    <GlobalStyles />
    <Elements stripe={stripePromise}>
    <ToastContainer autoClose={2000} theme="colored" />
    </Elements>
    </AppProvider>
  </StrictMode>,
)
