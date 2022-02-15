import { React, useState } from 'react';
import axios from 'axios';
import './Admin.css'

function Microservices() {
    const [usersLength, setUserLength] = useState();
    const [itemsLength, setItemLength] = useState();
    const [cartsLength, setCartLength] = useState();
    const [ordersLength, setOrderLength] = useState();
    const [ordersTotal, setOrderTotal] = useState();
    async function get_users(){
        await axios.get("https://e-commerce-backend-coding.herokuapp.com/api/users")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setUserLength(len)
        })
    }
    async function get_items(){
        await axios.get("https://e-commerce-backend-coding.herokuapp.com/api/items")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setItemLength(len)
        })
    }
    async function get_carts(){
        await axios.get("https://e-commerce-backend-coding.herokuapp.com/api/carts")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setCartLength(len)
        })
    }
    async function get_orders(){
        await axios.get('https://e-commerce-backend-coding.herokuapp.com/api/order')
            .then(res=>{
                const data = res.data;
                const len = data.orders.length;
                setOrderLength(len)
                const orders = data.orders;
                for (var i = 0; i< orders.length; i ++){
                    
                    var subtotal = orders[i].total * i
                                       
                }
                console.log("ORDERSSSSSS:>>>>>", subtotal/* order.total * orders.length */ )
                const total = subtotal.toFixed(2).replace(/[.,]00$/, "");
                setOrderTotal(total);
               
                 
            })
    }

  return(
      <div id="micro-services">
          <button onClick={()=>{get_users(); get_items();get_carts(); get_orders()}}>Get Stats </button>
          <h1>Web Statistics</h1>
          <div id="square">
            <p>Users in db: {usersLength}</p>
          </div>
          <div id="square">
            <p>items in db: {itemsLength}</p>
          </div>
          <div id="square">
            <p>Carts in db: {cartsLength}</p>
          </div>
          <div id="square">
            <p>Orders in db: {ordersLength}</p>
          </div>
          <div id="square2">
            <p>Total ammount of Orders in db: {ordersTotal}€    </p>
          </div>

      </div>
  );
}
export default Microservices