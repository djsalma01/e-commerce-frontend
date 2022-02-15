import React, { useState } from 'react'
import axios from 'axios';
import AppNavbar from './AppNavbar';
import { withRouter} from 'react-router-dom';
import './admin/itemsCRUD/Items.css'

const BASE_URL = "https://e-commerce-backend-coding.herokuapp.com/api"
const token = localStorage.getItem('token');

function Orders(props) {
    
    const [ordersArray, setOrdersArray] = useState([]);
    const [itemsArray, setItemsArray] = useState([]);

    async function get_user_orders() {
	const id = props.match.params.id;
        await axios.get(BASE_URL + `/order/${id}`)
            .then(res => {

                const orders = res.data.order;
                setOrdersArray(orders);

                console.log(orders)
            })
        for (var i = 0; i < ordersArray.length; i++) {
            var ordItems = ordersArray[i].items
            itemsArray.push(ordItems)

        }

    }
    if (token) {
        return (
            <div>
                <AppNavbar/>
                <button onClick={get_user_orders}>Get orders</button>
                <div>
                    <tr id="orderTable">
                        <th>Order Number</th>
                        <th>Card</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th>Total</th>
                    </tr>

                    {ordersArray.map(({ _id, card_company, created_date, items, payment_method, total }, index) => {
                        return (
                            <tr key={index}>
                                
                                <td>{_id}</td>
                                <td>{card_company}</td>
                                <td>{created_date}</td>
                                <td>{payment_method}</td>
                                <td>{total}</td>

                            </tr>

                        )
                    })}

                </div>
            </div>

        )
    } else {
        return (
            <h1>Must be Logged in</h1>
        )
    }

}
export default withRouter(Orders);
