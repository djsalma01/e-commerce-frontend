import { React, useState } from 'react';
import axios from 'axios';
import { Form, Label, Input } from 'reactstrap';
import './Items.css'

const BASE_URL = 'https://e-commerce-backend-coding.herokuapp.com/api';


function AddItem() {
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [providersArray, setProvidersArray] = useState([]);
   
    const [provId, setProvId] = useState(null);

    async function get_categories() {
        await axios.get(BASE_URL + "/categories")
            .then(res => {
                console.log(res.data)
                const data = res.data;
                const cat_id = data._id;
                const cat_name = data.nameCat
                setCategoriesArray(data)

            })
    }
    async function get_providers() {
        await axios.get(BASE_URL + "/providers")
            .then(res => {
                console.log(res.data)
                const data = res.data;
                const provider_id = data._id
                setProvId(provider_id)
                setProvidersArray(data)
            })
    }
    async function create_item(item) {
        await axios.post(BASE_URL + '/items', {item

        })
            .then(res => {
                console.log(res.data)
            })
    }
    function onSubmit(e) {
        e.preventDefault();
        const title = e.target.title.value
        const description = e.target.description.value;
        const category_name = e.target.categories.value;
        const category_id = e.target.categories_id.value;
        const first_stock = e.target.first_stock.value;
        const image_1 = e.target.image_1.value;
        const image_2 = e.target.image_2.value;
        const image_3 = e.target.image_3.value;
        const price = e.target.price.value;
        const sell_price = e.target.sell_price.value;
        const provider_id = e.target.providers.value;
        const quantity = e.target.quantity.value;

        const item = {
            title: title,
            description: description,
            category_name: category_name,
            category_id: category_id,
            first_stock: first_stock,
            image_1: image_1,
            image_2: image_2,
            image_3: image_3,
            price: price,
            sell_price: sell_price,
            provider_id: provider_id,
            quantity: quantity

        }
        console.log(item)
        create_item(item)



    }



    return (
        <div className="Form">
            <button onClick={get_categories}>get categories</button>
            <button onClick={get_providers}>get providers</button>
            <Form onSubmit={onSubmit}>
                <Label for="title">Title</Label>
                <Input type="text" required name="title" />
                <Label for="description">Description</Label>
                <Input type="text" required name="description" />

                {/* 0000000000000000000000000000000000000000 */}
                <div>
                    <Label id="cat" for="categories">Categories</Label>
                    <select name="categories" id="cars" >
                        {categoriesArray.map(({ id, _id, nameCat, description, parent_id }) => {
                            return (

                                    <option key={id} value={nameCat}>{nameCat}</option>
                                   

                            )
                        })}
                    </select>
                    <br></br>
                </div>
                {categoriesArray.map(({ id, _id, nameCat, description, parent_id }) => {
                            return (

                                    
                                    <p key={id} value={_id}>id: {_id}, name: {nameCat}</p>
                                   

                            )
                        })}
                <Label id="cat" for="categories_id">Categories (Copy and paste one of the id of the list)</Label>
                <Input type="text" required name="categories_id" />
               

                {/* 0000000000000000000000000000000000000000 */}
                <Label for="first_stock">First Stock</Label>
                <Input type="text" required name="first_stock" />
                <Label for="image_1">image_1</Label>
                <Input type="text" required name="image_1" />
                <Label for="image_2">image_2</Label>
                <Input type="text" required name="image_2" />
                <Label for="image_3">image_3</Label>
                <Input type="text" required name="image_3" />
                <Label for="price">price</Label>
                <Input type="text" required name="price" />
                <Label for="sell_price">sell_price</Label>
                <Input type="text" required name="sell_price" />
                {/* 0000000000000000000000000000000000000000 */}
                <div>
                    <Label id="prov" for="providers">providers</Label>
                    <select name="providers" id="providers">
                        {providersArray.map(({ id, _id, name_1 }) => {
                            return (

                                <option key={id} value={_id}>id: {_id} name: {name_1}</option>

                            )
                        })}
                    </select>
                    <br></br>
                </div>

                {/* 0000000000000000000000000000000000000000 */}
                <Label for="quantity">quantity</Label>
                <Input type="text" required name="quantity" />
                <button onClick={() => console.log("Clicccccked")}>New Item</button>

            </Form>
        </div>
    );

}
export default AddItem;