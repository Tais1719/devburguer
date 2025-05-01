import { createBrowserRouter }  from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cart, ChecKout, CompletePayment, Home,Login,Menu,Register } from '../container'



export const router = createBrowserRouter([

       
{
    path:'/',
    element:
    (
        <>
        <Header/>
        <Home/>
        <Footer/>
        </>
    )
   
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/cadastro',
    element:<Register/>
},

{
    path:'/cardapio',
    element:(
        <>
        <Header/>
        <Menu/>
        </>
    )

},
{
    path:'/carrinho',
    element:<Cart/>,
      
    

},
{
    path:'/checkout',
    element:<ChecKout/>,
      
    

},
{
    path:'/complete',
    element:<CompletePayment/>,
      
    

},

])

