import { createBrowserRouter }  from 'react-router-dom'

import { Home } from '../container/Home'
import { Login } from '../container/login'
import { Register } from '../container/Register'
import { Menu } from '../container/Menu'



export const router = createBrowserRouter([

       
{
    path:'/',
    element:<Home/>
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
    element:<Menu/>
}
])

