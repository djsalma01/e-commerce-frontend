import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Modal, ModalBody, Label
} from "reactstrap"
import { Form,Input,Button, } from 'reactstrap';



const BASE_URL = "https://e-commerce-backend-coding.herokuapp.com/api"

function OrderNew(props) {
    // Modal open state
    const [modal, setModal] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    // Toggle for Modal
    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    //api responses
    const [resMessage, setResMessage] = useState();
    const [resTotal, setResTotal] = useState();

    async function post_order(order) {
        await axios.post(BASE_URL + '/order', {
            user_id: order.user_id,
            cart_id: order.cart_id,
            address_1: order.user_address_1,
            phone: order.user_phone,
            card_type: order.card_type,
            payment_method: order.payment_method
        })
            .then(res => {
                const message = res.data.message
                setResMessage(message)
                const total = res.data.order.total;
                setResTotal(total)
            })
        console.log(resMessage)
    }
    async function onSubmit(e) {
        e.preventDefault();
        const user_id = props.user.id;
        const cart_id = props.cart.cart._id;
        const user_address_1 = e.target.address_1.value;
        const phone = e.target.phone.value;
        const card_type = e.target.card_type.value;
        const payment_method = e.target.payment_method.value;
        const order = {
            user_id: user_id,
            cart_id: cart_id,
            user_address_1: user_address_1,
            phone: phone,
            card_type: card_type,
            payment_method: payment_method,
        }
        await post_order(order)
        

    }
    return (
        <div>                    
            <div style={{
                display: 'block', width: 700, padding: 30
            }}>

                <Button color="primary"
                    onClick={toggle}>Buy!</Button>
                <Modal isOpen={modal}
                    toggle={toggle}
                    modalTransition={{ timeout: 1000 }}>
                    <ModalBody>
                        <h4>Thanks {props.user.name},</h4>
                        <p>Now, <br />To complete your purchase you must enter this fields... </p>
                        <Form onSubmit={onSubmit}>
                            <Label for="address_1">Insert your Address</Label>
                            <Input required name="address_1" id="address_1" />
                            <Label for="phone">Insert your Phone</Label>
                            <Input required name="phone" id="phone" />
                            <select name="card_type" id="card_type">
                                <option value="Visa"> Visa</option>
                                <option value="Master-Card"> MasterCard</option>
                            </select>
                            <select name="payment_method" id="payment_method">
                                <option value="Credit-Card"> Credit Card</option>
                                <option value="Debit-Card"> Debit Card</option>
                            </select><br />
                            <Label for="card_number">Insert your Card Number</Label>
                            <Input required name="card_number" id="card_number" />
                            <Label>Insert your Card CVV</Label>
                            <Input required />
                            <Label>Insert your Pin</Label>
                            <Input required />
                            <button onClick={toggle2}><h3>Click here to,<br />Confirm Payment!</h3></button>
                        </Form>
                        {resMessage!= null && resTotal != null ?
                        <Modal isOpen={modal2}
                            toggle={toggle2}
                            modalTransition={{ timeout: 1000 }}>
                            <ModalBody>
                                <p>Thanks for you purchase! <br />Your order is the number: {resMessage}</p>
                                <p>Your order total: € {resTotal}</p>
                            </ModalBody>
                        </Modal> : <h1>Empty</h1>}
                    </ModalBody>
                </Modal>
            </div >

        </div>
    );
}
export default OrderNew;