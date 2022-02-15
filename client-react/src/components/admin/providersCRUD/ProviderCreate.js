import { React, useState } from 'react';
import axios from 'axios';
import { Form, Label, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import {  FormGroup, FormText, Col } from 'reactstrap'


const BASE_URL = 'https://e-commerce-backend-coding.herokuapp.com/api';

function AddProvider() {

    async function create(provider) {
        await axios.post(BASE_URL + '/providers', { provider })
    }

    function onSubmit(e) {
        e.preventDefault();
        const city = e.target.city.value
        const country = e.target.country.value
        const email = e.target.email.value
        const fiscal_id = e.target.fiscal_id.value
        const name_1 = e.target.name_1.value
        const name_2 = e.target.name_2.value
        const phone = e.target.phone.value
        const postal_code = e.target.postal_code.value
        const provider = {

            city: city,
            country: country,
            email: email,
            fiscal_id: fiscal_id,
            name_1: name_1,
            name_2: name_2,
            phone: phone,
            postal_code: postal_code,
        }
        create(provider)

    }
    return (

        <div>
            <h1>Create a new Provider </h1>
            <Form onSubmit={onSubmit}>
                <FormGroup row>
                    <Label for="name_1" sm={1} >name_1</Label>
                    <Col sm={6}>
                        <Input  id="name_1" name="name_1" required placeholder="examplename_1" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name_2" sm={1} >name_2</Label>
                    <Col sm={6}>
                        <Input  id="name_2" name="name_2" required placeholder="examplename_2" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="fiscal_id" sm={1} >fiscal_id</Label>
                    <Col sm={6}>
                        <Input  id="fiscal_id" name="fiscal_id" required type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={1} >email</Label>
                    <Col sm={6}>
                        <Input  id="email" name="email" required placeholder="example@ex.com" type="email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phone" sm={1} >phone</Label>
                    <Col sm={6}>
                        <Input  id="phone" name="phone" required placeholder="555-555-555" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="city" sm={1} >city</Label>
                    <Col sm={6}>
                        <Input  id="city" name="city" required placeholder="Street, #, Locality, City, Postal Code" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="country" sm={1} >country</Label>
                    <Col sm={6}>
                        <Input  id="country" name="country" required placeholder="Continuation Street, #, Locality, City, Postal Code" type="text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="postal_code" sm={1} >postal_code</Label>
                    <Col sm={6}>
                        <Input  id="postal_code" name="postal_code" required placeholder="false" type="text" />
                    </Col>
                </FormGroup>

                <button onClick={() => console.log("Clicked")} style={{ background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
                    Register this Changes
                </button>

               



            </Form>

        </div>
    );
}
export default AddProvider;