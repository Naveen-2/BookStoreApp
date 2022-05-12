import React from "react";
import "./item-card.css";

export default function ItemCard({bookDetail, handleAddItem}) {
    // console.log(bookDetail)
    // console.log(handleAddItem)
      const checkFunction = () => {
          console.log("summa");
      }
    return (
        <div key={bookDetail.id} className="item-card">
            <div className="item-image-container">
                <img className="item-image" src={bookDetail.image} alt="item" />
            </div>
            <div className="item-details">
                <div className="item-title">
                    {bookDetail.title}
                </div>
                <div className="item-author">
                    by {bookDetail.author}
                </div>
                <div className="item-price">
                    Rs. {bookDetail.price}
                </div>
                <div className="card-buttons">
                    <button className="add-cart-btn" 
                            onClick={() => handleAddItem(bookDetail)}>
                                ADD TO CART
                    </button>
                    <button className="wishlist-btn">WISHLIST</button>
                </div>
            </div>
        </div>
    )
}