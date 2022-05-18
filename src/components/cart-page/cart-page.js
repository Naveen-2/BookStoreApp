import React from "react";
import "./cart-page.css";

export default function CartPage({ cartItems, handleAddItem, handleRemoveItem }) {


  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
      <div className="cart-page">
         <div className="cart-items">

            <div className="cart-items-header" >My cart({cartItems.length})</div>
          
            {cartItems.length === 0 && (
              <div className="cart-items-empty">No items are added.</div>
            )}

            <div className="cart-items-body">
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
                        <button className="remove-item-button">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))} 
              <div><button className="place-order-button">PLACE ORDER</button></div>
            </div>

          </div>

          <br/>

          <div className="customer-details">
            <div className="form-content">
              <form action="#" className="form" onSubmit="save()">
                  <div className="form-head">
                      Customer Details
                  </div>
            
                <div className="form-constrains">

                  <div className="row-content">
                    <div className="column-constrains">

                      <div className="column-content">
                        <input type="text" className="input" id="name" name="fullName" 
                        placeholder="Name" autoComplete="off" required />
                      </div>

                      <div className="column-content">
                        <input type="tel" className="input" id="phoneNumber" name="phoneNumber" 
                        placeholder="Phone number" autoComplete="off" required/>
                      </div>
                    </div>
                  </div>
                  <div className="row-content">
                    <div className="column-constrains">

                      <div className="column-content">
                        <input type="text" className="input" id="pincode" name="pincode" 
                        placeholder="Pincode" autoComplete="off" required />
                      </div>

                      <div className="column-content">
                        <input type="text" className="input" id="locality" name="locality" 
                        placeholder="Locality" autoComplete="off" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row-content">
                      <textarea name="address" id="address" placeholder="Your address" 
                      autoComplete="off" required></textarea>
                  </div>

                  <div className="row-content">
                      <div className="column-constrains">

                        <div className="column-content">
                          <input type="text" className="input" id="city" name="city" 
                          placeholder="City/Town" autoComplete="off" required />
                        </div>

                        <div className="column-content">
                          <input type="text" className="input" id="landmark" name="landmark" 
                          placeholder="Landmark" autoComplete="off" required />
                        </div>

                      </div>
                    </div>
                    <div className="continueButton">
                      <button type="submit" className="continue-button" id="continueButton" >CONTINUE</button>
                    </div>
                </div>
              </form>
            </div>
          </div>

          <br/>

          <div className="order-summary">
              <div className="order-summary-head-text">Order Summary</div>

              <div className="order-summary-body">
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
                                  <div className="item-quantity">
                                      Qty: {item.quantity}
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  ))} 
              </div>
              <div className="checkout-summary">
                <div className="cart-items-total-price">
                    Order Total: Rs. {totalPrice} /-
                </div>
                <div className="checkoutBtn">
                  <button type="submit" className="checkout-button" id="checkoutBtn" >CHECKOUT</button>
                </div>
              </div>
          </div>
      </div>
  )
}