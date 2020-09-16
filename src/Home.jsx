import React from 'react'
import './Home.css'
import Product from './Product'
import PUgate from './Images/PUgate.png'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={PUgate} alt=""/>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>

            </div>
        </div>
    )
}

export default Home
