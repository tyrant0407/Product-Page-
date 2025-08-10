import React from 'react'
import { Routes ,Route} from 'react-router'
import ProductPage from '../pages/ProductPage'


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      {/* <Route path="/video/:id" element={<PlayerPage />} />   */}
    </Routes>
  )
}

export default AppRouter
