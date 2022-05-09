import React from "react";
import bookIcon from "../../assets/icons/education.svg";
import cartIcon from "../../assets/icons/supermarket.svg";
import "./header.css";


export default function Header(){
    return(
        <header className="header-content header">
            <div className="logo-content">
                <div className="logo-content-img">
                    <img src={bookIcon} alt="book icon"/>
                </div>
                <div className="logo-content-text">Bookstore</div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="   🔍Search..."></input>
            </div>
            <div className="cart-content">
                <div className="cart-content-text">Cart</div>
                <div className="cart-content-logo">
                    <img src={cartIcon} alt="cart icon" />
                </div>
            </div>
        </header>
    );
}