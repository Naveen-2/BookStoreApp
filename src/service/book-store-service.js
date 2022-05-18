import config from "../config/config";

import axios from "axios";

class BookStoreService {
    baseURL = config.baseURL;

    getAllItems = () => {
        return axios.get(`${this.baseURL}bookDetails`);
    }

    getCartItems = () => {
        return axios.get(`${this.baseURL}cartItems`);
    }

    addCartItem = (data) => {
        return axios.post(`${this.baseURL}cartItems`, data);
    }

    updateCartItem(id,data) {
        return axios.put(`${this.baseURL}cartItems/${id}`, data);
    }

    deleteCartItem = (id) => {
        return axios.delete(`${this.baseURL}cartItems/${id}`);
    }

    getWishListItems = () => {
        return axios.get(`${this.baseURL}wishListItems`);
    }

    addWishListItem = (data) => {
        return axios.post(`${this.baseURL}wishListItems`, data);
    }

    updateWishListItem(id,data) {
        return axios.put(`${this.baseURL}wishListItems/${id}`, data);
    }

    deleteWishListItem = (id) => {
        return axios.delete(`${this.baseURL}wishListItems/${id}`);
    }
}

export default new BookStoreService();