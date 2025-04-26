import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import GlobalStyles from './styles/globalStyle'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
 
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>,
)
