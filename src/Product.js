import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <>
         <div className="col-md-4">
            <div className="bbb_deals">
                <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>{Math.floor(Math.random()* 10)}</span></div>
                <div className="bbb_deals_title">Today's Combo Offer</div>
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><img src={product.image} alt=""/></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_category"><span>{product.category}</span></div>
                                <div className="bbb_deals_item_price_a ml-auto"><strike>{`${((product.price)+22.5).toFixed(2)} $`}</strike></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <Link to ={`/product/${product}`} product={product}>
                                    <div className="bbb_deals_item_name">{product.title}</div>
                                </Link>
                                <div className="bbb_deals_item_price ml-auto">{`${product.price} $`}</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_stars ml-auto">{
                                     [...Array(Math.floor(product.rating.rate))].map((e) => <i className="fa fa-star"></i>)
                                }</div>
                                </div>
                                <div className="available_bar"><span style={{width:"17%"}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>    
    )
}

export default Product