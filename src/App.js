
import './App.css';
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import BookList from './components/book-list/book-list';
import CartPage from './components/cart-page/cart-page';
import OrderConfirmation from './components/order-confirmation/order-confirmation';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import data from "./components/Data/Data";
import React, {useState} from 'react';

function App() {

  const { bookDetails } = data;
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);


  const handleAddItem = (bookDetail) => {
    const ItemExist = cartItems.find((item) => item.id === bookDetail.id);
    if(ItemExist){
      setCartItems(
        cartItems.map((item) => 
          item.id === bookDetail.id 
          ? {...ItemExist, quantity: ItemExist.quantity + 1}
          : item)
      );
    } else {
      setCartItems([...cartItems, {...bookDetail, quantity: 1}]);
    }
    // console.log(bookDetail)
  }

  const handleRemoveItem = (bookDetail) => {
    const ItemExist = cartItems.find((item) => item.id === bookDetail.id);
    if(ItemExist.quantity === 1){
      setCartItems( cartItems.filter((item) => item.id !== bookDetail.id ));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === bookDetail.id 
        ? {...ItemExist, quantity: ItemExist.quantity - 1}
        : item) 
      );
    }
  }
console.log(handleRemoveItem)
  return (
    <>
      <Router>
        <Header />
        <div className="App">
              <Switch>
                  <Route exact path="/"> 
                    <BookList bookDetails={bookDetails}
                              handleAddItem={handleAddItem}/>
                  </Route>
                  <Route exact path="/cart-page"> 
                    <CartPage cartItems={cartItems}
                              handleAddItem={handleAddItem}
                              handleRemoveItem={handleRemoveItem}/>
                  </Route>
                  <Route exact path="/order-confirmation">
                    <OrderConfirmation /> 
                  </Route>
              </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
