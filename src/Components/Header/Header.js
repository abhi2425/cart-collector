import React from 'react'
import "./Header.css"
import cartImage from "../../Assets/img/icons8-favorite-cart-48.png"

const Header = (props) => (
    <header className="header">
        <div className="header__heading">UseReducer</div>
        <div className="header__cart">
            <img className="header__cart--image" src={cartImage} alt="cart" />
            <div className="totalCount--container">
                <div className="totalCount">{props.totalCount}</div>
            </div>
        </div>
    </header>
)
export default Header