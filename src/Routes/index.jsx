import { createBrowserRouter }  from 'react-router-dom'

import { Home } from '../container/Home'
import { Login } from '../container/login'
import { Register } from '../container/Register'
import { Menu } from '../container/Menu'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cart } from '../container/Cart'



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
      
    

}

])

