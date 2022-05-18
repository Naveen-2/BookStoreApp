import React,{useState} from "react";
import bookIcon from "../../assets/icons/education.svg";
import cartIcon from "../../assets/icons/supermarket.svg";
import "./header.css";
import {Link} from "react-router-dom";

export default function Header({cartItems, bookDetails}){
        
    const [searchTerm, setSearchTerm] = useState([]);

    const searchItem = (searchTerm) => { 
        // console.log(bookDetails)
        // console.log(searchTerm)
        let filteredData = bookDetails;
        filteredData = bookDetails.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(filteredData)
    }

    const handleChange = (event) => {
        // console.log(event.target.value)
        setSearchTerm(event.target.value);
        // console.log(bookDetails); 
        searchItem(event.target.value);
    }
    
    return(
        <header className="header-content header">
            <div className="logo-content">
                <div className="logo-content-img">
                    <img src={bookIcon} alt="book icon"/>
                </div>
                <div className="logo-content-text">Bookstore</div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="   🔍Search..." onChange={handleChange}></input>
            </div>
            
            <Link to="/cart-page" className="cart-content">
                <div className="cart-content-logo">
                    <img src={cartIcon} alt="cart icon" />
                    <span className="cart-length">
                        {cartItems.length === 0 ? "" : cartItems.length}
                    </span>
                </div>
            </Link>
        </header>
    );
}