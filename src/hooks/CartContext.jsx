// src/hooks/CartContext.js
import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)
    let newProductsInCart = []

    if (cartIndex >= 0) {
      newProductsInCart = [...cartProducts]
      newProductsInCart[cartIndex].quantity += 1
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product]
    }

    setCartProducts(newProductsInCart)
    updateLocalStorage(newProductsInCart)
  }

  const clearCart = () => {
    setCartProducts([])
    updateLocalStorage([])
  }

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    )
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      )
      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  const getCartQuantity = () => {
    return cartProducts.reduce((acc, item) => acc + item.quantity, 0)
  }

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
  }

  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo')
    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        deleteProduct,
        clearCart,
        increaseProduct,
        decreaseProduct,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
