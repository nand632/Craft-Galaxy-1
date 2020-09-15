import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/S/abs-image-upload-na/a/AmazonStores/A21TJRUUN4KGV/9fcd9dd335fdf274ad0c798e955f0da8.w3000.h800._CR0%2C0%2C3000%2C800_SX1500_.png" alt=""/>

            <div className="home__row">
                <Product />
                {/* <Product /> */}
            </div>

            <div className="home__row">
                {/* <Product /> */}
                {/* <Product /> */}
                {/* <Product /> */}
            </div>

            <div className="home__row">
                {/* <Product /> */}
            </div>

            </div>
        </div>
    )
}

export default Home
