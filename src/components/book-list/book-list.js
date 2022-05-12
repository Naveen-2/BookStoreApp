import React from "react";
import "./book-list.css";
import ItemCard from "../item-card/item-card";

export default function BookList({bookDetails, handleAddItem}){
    
    return(
        <div className="main-content">
            <div className="body-header">
                <div className="title-text">
                    <div className="page-title">Books</div>
                    <div className="items-count">({bookDetails.length} Items)</div>
                </div>
                <div className="sort-container">
                    <select className="sort-options" name="sort" id="sort" >
                        <option hidden defaultValue="Sort by relevance">Sort by relevance</option>
                        <option value="Price : Low to High">Price : Low to High</option>
                        <option value="Price : High to Low">Price : High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select>
                </div>
            </div>
            <div className="body-list">
                {bookDetails.map((book) => (
                    <ItemCard bookDetail={book} handleAddItem={handleAddItem}/>
                ))}
                
                
            </div>
        </div>
    );
}