import React from "react";
import celebImage from "../../src/assets/icons/success.png";


export default function OrderConfirmation(){
    return (
        <> 
            <h4>Order Placed Successfully</h4>
            <img src={celebImage} alt="celebration" />
        </>
    )
}