import React from 'react'
import './Product.css'
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean start</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>

            </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61n-uoGiXAL._SY355_.jpg" alt="">   
        </img>

        <button>Add To Basket </button>    
        </div>
    )
}

export default Product
