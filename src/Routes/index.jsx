import { Route, Routes } from 'react-router-dom';
import {
  Cart,
  ChecKout,
  Home,
  Login,
  Menu,
  Register,
  NewProduct,
  Orders,
  EditProduct,
  Products
} from '../container';

import { CompletePaymentWrapper } from '../container/completePayment/CompletePaymentWrapper';
import { AdminLayout } from '../layouts/AdminLayout';
import { UserLayout } from '../layouts/UserLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cardapio' element={<Menu />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/checkout' element={<ChecKout />} />
        <Route path='/complete' element={<CompletePaymentWrapper />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='pedidos' element={<Orders />} />
        <Route path='novo-produto' element={<NewProduct />} />
        <Route path='editar-produto' element={<EditProduct />} />
        <Route path='produtos' element={<Products />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
    </Routes>
  );
}
