import React,{useState} from 'react'
 function Footer(){
    const[name,setName] = useState("Guest");
    const[quantity,setQuantity] = useState(1);
    const[comment,setComment] = useState("");
    const[payment,setPayment] = useState("");
    const[delivery,setDelivery] = useState("");
    function nameChange(event){
           setName(event.target.value);
    }
    function quantityChange(event){
          setQuantity(event.target.value);
    }
    function leaveComment(event){
          setComment(event.target.value);
    }
    function paymentMethod(event){
          setPayment(event.target.value);
    }
    function deliveryStatus(event){
          setDelivery(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={nameChange} />
            <p>Name: {name}</p>
            <input value={quantity} type='number' onChange={quantityChange} />
            <p>Quantity : {quantity}</p>
            <textarea value={comment} onChange={leaveComment}></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={paymentMethod}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>
            <label >
                <input type="radio" value="Pick up" checked={delivery === "Pick up"} onChange={deliveryStatus} />
                Pick up</label>
            <br />
            <label ><input type="radio" value="Delivered" checked={delivery === "Delivered"} onChange={deliveryStatus}/>
                Delivered</label>
                
            <p>Order status: {delivery}</p>
        </div>
    );

  }
 export default Footer  