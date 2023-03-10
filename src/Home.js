import React from 'react'
import Feed from './Feed'
import Nav from './Nav'

function Home({products}) {
    if(products == null){
        return (
          <div><p>Loading...</p></div>
        )
      }else{
        return (
          products.length ? (
            <div className="container mydiv">
                <div className="row">
                    <Feed products={products}/>
                </div>
            </div>) :(<p>Their is No Products To See</p>) 
        )
      }

}

export default Home