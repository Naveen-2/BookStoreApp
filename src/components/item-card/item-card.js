import React from "react";
import "./item-card.css";
import itemImage from "../../assets/images/Image 11.png";

export default function ItemCard() {
    return (
        <div className="item-card">
            <div className="item-image-container">
                <img className="item-image" src={itemImage} alt="item" />
            </div>
            <div className="item-details">
                <div className="item-title">
                    Don't Make Me Think
                </div>
                <div className="item-author">
                    by Steve Krug
                </div>
                <div className="item-price">
                    Rs. 1500
                </div>
                <div className="card-buttons">
                    <button className="add-cart-btn">ADD TO CART</button>
                    <button className="wishlist-btn">WISHLIST</button>
                </div>
            </div>
        </div>
    )
}