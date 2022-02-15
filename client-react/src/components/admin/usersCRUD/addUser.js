import React, { useState } from "react";
import axios from 'axios';
import {Form,FormGroup, Col, Input, Label} from 'reactstrap';



function AddUser(){
    
    function create(user) {
        
        axios.post("https://e-commerce-backend-coding.herokuapp.com/api/users", {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            phone: user.phone,
            address_1: user.address_1,
            address_2: user.address_2,
            is_admin: user.is_admin,
            image_url: user.image_url

            
        }).then(res=>console.log(res.data));
    
      }
    function onSubmit(e){
        e.preventDefault();
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;
        const address_1 = e.target.address_1.value;
        const address_2 = e.target.address_2.value;
        const is_admin = e.target.is_admin.value;
        const image_url = e.target.image_url.value;
        const user={name: name, surname: surname, email: email, password: password, phone:phone, address_1: address_1, address_2:address_2, is_admin:is_admin, image_url:image_url}

        create(user);    
        console.log(user)
    }
    return(
    <div className="container">
        <h1>Create Users</h1>
        <h3>Remember to fill all inputs</h3>
        <Form onSubmit={onSubmit}>
            <FormGroup row>
                <Label for="Name" sm={1} >Name</Label>
                <Col sm={6}>
                <Input id="Name" name="name" placeholder="exampleName" type="text" required/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Surname" sm={1} >Surname</Label>
                <Col sm={6}>
                <Input id="Surname" name="surname" required placeholder="exampleSurname" type="text"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Email" sm={1} >Email</Label>
                <Col sm={6}>
                <Input id="Email" name="email" required placeholder="example@example.com" type="email"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Password" sm={1} >Password</Label>
                <Col sm={6}>
                <Input id="Password" name="password" required placeholder="******" type="password"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Phone" sm={1} >Phone</Label>
                <Col sm={6}>
                <Input id="Phone" name="phone" required placeholder="555-555-555" type="text"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Address_1" sm={1} >Address_1</Label>
                <Col sm={6}>
                <Input id="Address_1" name="address_1" required placeholder="Street, #, Locality, City, Postal Code" type="text"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Address_2" sm={1} >Address_2</Label>
                <Col sm={6}>
                <Input id="Address_2" name="address_2" required placeholder="Continuation Street, #, Locality, City, Postal Code" type="text"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="is_admin" sm={1} >is_admin</Label>
                <Col sm={6}>
                <Input id="is_admin" name="is_admin" required placeholder="false" type="text"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="image_url" sm={1} >image_url</Label>
                <Col sm={6}>
                <Input id="image_url" name="image_url" required placeholder="http://www.someurlwherephotois.com" type="text"/>
                </Col>
            </FormGroup>
           
           <button style={{background:"#5DE9CD", height:"45px",  width:"165px", borderRadius:"5px",  boxShadow: "3px 3px #0F070D" }}>
               Register a new User
            </button>
           
        </Form>
        

    </div>);

}
export default AddUser;