import React,{useState} from "react";
import "./book-list.css";
import ItemCard from "../item-card/item-card";


export default function BookList({bookDetails, handleAddItem}){
    // console.log(bookDetails)
    const [sortType, setSortType] = useState([]);

    // console.log(sortType)
    const sortItems = (sortType) => {
        console.log(sortType)
        if (sortType === 'LOW_TO_HIGH') {
            bookDetails.sort((a,b) => {
                return a.price-b.price;
            });
        } else if (sortType === 'HIGH_TO_LOW') {
            bookDetails.sort((a,b) => {
                return b.price-a.price;
            });
        } else if (sortType === 'NEWEST_ARRIVAL') {
            bookDetails.sort((a,b) => {
                return a.id-b.id;
            });
        } 
        
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setSortType({
            selectBoxValue: event.target.value,
        });
        sortItems(event.target.value);
    }

    
    return(
        <div className="main-content">
            <div className="body-header">
                <div className="title-text">
                    <div className="page-title">Books</div>
                    <div className="items-count">({bookDetails.length} Items)</div>
                </div>
                <div className="sort-container">
                    <select className="sort-options" name="sort" id="sort" 
                            onChange={handleChange}>
                        <option hidden value="None"
                                defaultValue="Sort by relevance">
                                    Sort by relevance</option>
                        <option value="LOW_TO_HIGH" >Price : Low to High</option>
                        <option value="HIGH_TO_LOW">Price : High to Low</option>
                        <option value="NEWEST_ARRIVAL">Newest Arrival</option>
                    </select>
                </div>
            </div>
            <div className="body-list">
                {bookDetails.map((book) => (
                    <ItemCard bookDetail={book} 
                              handleAddItem={handleAddItem}/>
                ))}
                
                
            </div>
        </div>
    );
}