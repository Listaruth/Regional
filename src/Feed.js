import React from 'react'
import Product from './Product'
function Feed({products}) {
  return (
    <>
    {
        products.map(product => 
            (<Product product ={product} key ={product.id}/>)
        )
    }
    </>
  )
}

export default Feed