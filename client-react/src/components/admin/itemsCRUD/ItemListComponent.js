import { React, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './Items.css'
import trash from './trash.png'
import pencil from './pencil.png'
const BASE_URL = "https://e-commerce-backend-coding.herokuapp.com/api"
function ItemList() {
    const [itemsArray, setItemsArray] = useState([]);

    async function get_items() {
        await axios.get(BASE_URL + "/items")
            .then(res => {
                const data = res.data;
                setItemsArray(data);
                console.log(data)

            })
    }
    async function delete_item(id){
        await axios.delete(`https://e-commerce-backend-coding.herokuapp.com/api/items/${id}`)
        alert("Item Deleted from DB");
        console.log(`https://e-commerce-backend-coding.herokuapp.com/api/items/${id}`)

    }
    return (
        <div>
            <h1>items list</h1>
            <button onClick={() => get_items()}>Get Items</button>
            {/* Make a list display in a table */}
            <div>
                <tr>
                    <th>Item _id</th>
                    <th>Item Title</th>
                    <th>Item Description</th>
                    <th>Item Price</th>
                    <th>Item Sell Price</th>
                    <th>Item Image 1</th>
                    <th>Item Actions</th>

                </tr>
                {itemsArray.map(({ _id, title, description, category_id, category_name, price, sell_price, image_1, image_2, image_3, quantity, size, provider_id, id }) => {
                    return (
                        <tr key={id} id="itemsInfoRow">
                            <td>
                                Id: {_id}

                            </td>
                            <td>

                                Title: {title}
                            </td>
                            <td>

                                Description: {description}
                            </td>
                            <td>

                                Price: {price}
                            </td>
                            <td>

                                Sell Price: {sell_price}
                            </td>
                            <td>

                                <img id="imge" src={image_1} height="30%" width="30%" alt="basic"></img>
                            </td>
                            <td>
                            
                                <button onClick={async () => {await delete_item(_id).then(res=>{console.log(res);window.location.reload(false)})}}>
                                    <img src={trash} id="trash" />
                                </button>
                                <Link to={"/upditem/" + _id}>
                                    <button onClick={() => console.log("pencil")}>
                                        <img src={pencil} id="pencil" />
                                    </button>
                                </Link>

                            </td>

                        </tr>
                    );


                })}
            </div>

        </div>
    );
}
export default ItemList
