import { React, useState } from 'react'
import axios from 'axios';
import { Form, FormGroup,  Col, Input, Label } from 'reactstrap'
import { withRouter, Redirect, Link } from 'react-router-dom'


function UpdateItem(props) {
    const [redirect, setRedirect] = useState(false);
    const [itemInfo, setItemInfo] = useState({})
    async function get_itemInfo() {
        const id = props.match.params.id;
        await axios.get(`https://e-commerce-backend-coding.herokuapp.com/api/items/${id}`)
            .then(res => {
                const data = res.data;

                const title = data.title;
                const description = data.description;
                const category_id = data.category_id;
                const catName = data.catName;
                const price = data.price;
                const sell_price = data.sell_price;
                const quantity = data.quantity;
                const image_1 = data.image_1;
                const image_2 = data.image_2;
                const image_3 = data.image_3;
                const provider_id = data.provider_id;


                const item = {
                    id: id, title: title, description: description, category_id: category_id, catName: catName, price: price, sell_price: sell_price, quantity: quantity, image_1: image_1, image_2: image_2,
                    image_3: image_3, provider_id: provider_id
                }
                if (item) {
                    setItemInfo(item)
                }

                console.log("get_ItemInfo(): ", data)
            })
    }
    async function update_item(id, item) {
        await axios.put(`https://e-commerce-backend-coding.herokuapp.com/api/items/${id}`, {
            title: item.title,
            description: item.description,
            category_id: item.category_id,
            catName: item.catName,
            price: item.price,
            sell_price: item.sell_price,
            quantity: item.quantity,
            image_1: item.image_1,
            image_2: item.image_2,
            image_3: item.image_3,
            provider_id: item.provider_id

        }).then(res => {
            setRedirect(true);
            console.log("response obtained in update_item(): ", res)
        })/* .catch(e => console.log(e)) */
    }
    function onSubmit(e) {
        e.preventDefault();
        const id = props.match.params.id;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category_id = e.target.category_id.value;
        const catName = e.target.catName.value;
        const price = e.target.price.value;
        const sell_price = e.target.sell_price.value;
        const quantity = e.target.quantity.value;
        const image_1 = e.target.image_1.value;
        const image_2 = e.target.image_2.value;
        const image_3 = e.target.image_3.value;
        const provider_id = e.target.provider_id.value;
        const item = {
            id: id,
            title: title,
            description: description,
            category_id: category_id,
            catName: catName,
            price: price,
            sell_price: sell_price,
            quantity: quantity,
            image_1: image_1,
            image_2: image_2,
            image_3: image_3,
            provider_id: provider_id
        }
        if(item){
            update_item(item);
        }else {throw new Error()}
        //update_user(id, user);
        console.log("onSubmit: ", item);
    }
    if (redirect === false) {
        return (

            <div className="container">
                <button onClick={get_itemInfo}><h3>Click here to Get Item Info</h3></button>
                <h1>Update this Item </h1>
                <Form onSubmit={onSubmit}>
                    <FormGroup row>
                        <Label for="Title" sm={1} >Title</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.title} required id="title" name="title" placeholder="exampleTitle" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="description" sm={1} >description</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.description} required id="description" name="description" placeholder="exampleDescription" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="category_id" sm={1} >category_id</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.category_id} required id="category_id" name="category_id" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="catName" sm={1} >catName</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.catName} required id="catName" name="catName" placeholder="******" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="price" sm={1} >price</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.price} required id="price" name="price" placeholder="555" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="sell_price" sm={1} >sell_price</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.sell_price} required id="sell_price" name="sell_price" placeholder="Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image_1" sm={1} >image_1</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.image_1} required id="image_1" name="image_1" placeholder="Continuation Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image_2" sm={1} >image_2</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.image_2} required id="image_2" name="image_2" placeholder="false" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image_3" sm={1} >image_3</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.image_3} required id="image_3" name="image_3" placeholder="http://www.someurlwherephotois.com" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="provider_id" sm={1} >provider_id</Label>
                        <Col sm={6}>
                            <Input value={itemInfo.provider_id} required id="provider_id" name="provider_id" placeholder="http://www.someurlwherephotois.com" type="text" />
                        </Col>
                    </FormGroup>

                    <button onClick={() => console.log("Clicked")} style={{ background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
                        Register this Changes
                    </button>

                    <Link to={"/admin"}>
                        <button onClick={() => console.log("Clicked")} style={{marginLeft:"5px", background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
                            Cancel this Changes
                        </button>
                    </Link>



                </Form>


            </div>


        );
    } else if (redirect === true) {
        return (<Redirect to={"/admin"}></Redirect>)

    }

}
export default withRouter(UpdateItem)

