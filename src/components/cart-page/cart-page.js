import React from "react";
import "./cart-page.css";

export default function CartPage({ cartItems, handleAddItem, handleRemoveItem }) {
    console.log(cartItems.length)

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    return (
        <>
            <div className="cart-items">

                <div className="cart-items-header">My cart({cartItems.length})</div>
            
                {cartItems.length === 0 && (
                    <div className="cart-items-empty">No items are added.</div>
                )}

                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <div className="cart-item-container">
                                <div><img className="cart-item-image-container" src={item.image} alt={item.title}/></div>
                                <div className="item-details">
                                    <div className="item-title">
                                        {item.title}
                                    </div>
                                    <div className="item-author">
                                        by {item.author}
                                    </div>
                                    <div className="item-price">
                                        Rs. {item.price}
                                    </div>
                                    <div className="cart-items-function">
                                        <button className="cart-items-remove" onClick={() => handleRemoveItem(item)}>-</button>
                                        <input className="cart-items-quantity" value={item.quantity} />
                                        <button className="cart-items-add" onClick={() => handleAddItem(item)}>+</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))} 
                </div>

            </div>
            <div className="customer-details">
            <div className="form-content">
        <form action="#" className="form" onSubmit="{save()}">
            <div className="form-head">
                <div className="form-head-text">Customer Details</div>
            </div>
      
            <div className="form-constrains">
                <div className="row-content">
                    <label htmlFor="name" className="label text">Full Name</label>
                    <input type="text" className="input" id="name" name="fullName" placeholder="Your name.." autoComplete="off" required />
                    {/* {formError.fullName && <div className="error">{formError.fullName}</div>} */}
                </div>
                <div className="row-content">
                    <label htmlFor="phoneNumber" className="label text">Phone Number</label>
                    <input type="tel" className="input" id="phoneNumber" name="phoneNumber" placeholder="Your phone number.."
                    autoComplete="off"  required/>
                    {/* {formError.phoneNumber && <div className="error">{formError.phoneNumber}</div>} */}
                </div>

                <div className="row-content">
                    <label htmlFor="address" className="label text">Address</label>
                    <textarea name="address" id="address" placeholder="Your address" autoComplete="off" required></textarea>
                    {/* {formError.address && <div className="error">{formError.address}</div>} */}
                </div>
                <div className="row-content">
                    <div className="column-constrains">
                        

                        

                        <div className="column-content">
                            <label htmlFor="zip" className="label text">Zip code</label>
                            <input type="text" className="input zipcode" id="zip" name="zip" autoComplete="off" placeholder="Your zipcode.." required />
                            {/* {formError.zipCode && <div className="error">{formError.zipCode}</div>} */}
                        </div>
                    </div>
                </div>
                <div className="buttons-contact">
                    <button type="submit" className="button button-submit" id="submitButton">Continue</button>
                </div>
            </div>
        </form>
    </div>
            </div>
            <div className="order-summary">
            <div className="order-summary-head-text">Order Summary</div>

                <div>
                {cartItems.map((item) => (
                        <div key={item.id}>
                            <div className="cart-item-container">
                                <div><img className="cart-item-image-container" src={item.image} alt={item.title}/></div>
                                <div className="item-details">
                                    <div className="item-title">
                                        {item.title}
                                    </div>
                                    <div className="item-author">
                                        by {item.author}
                                    </div>
                                    <div className="item-price">
                                        Rs. {item.price}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))} 
                </div>
                <div className="cart-items-total-price-name">
                    Total:
                    <div className="cart-items-total-price">{totalPrice}</div>
                </div>
                
            </div>
        </>
    )
}