import { React, useState } from 'react'
import axios from 'axios';
import { Form, FormGroup, FormText, Col, Input, Label } from 'reactstrap'
import { withRouter, Redirect, Link } from 'react-router-dom'



function UpdateUser(props) {
    const [redirect, setRedirect] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    async function get_userInfo(){
        const id = props.match.params.id;
        await axios.get(`https://e-commerce-backend-coding.herokuapp.com/api/users/${id}`)
        .then(res=>{
            const data = res.data;
    
        const name = data.name;
        const surname = data.surname;
        const email = data.email;
        const password = data.password;
        const phone = data.phone;
        const address_1 = data.address_1;
        const address_2 = data.address_2;
        const is_admin = data.is_admin;
        const image_url = data.image_url;

        const user = { id: id, name: name, surname: surname, email: email, password: password, phone: phone, address_1: address_1, address_2: address_2, image_url: image_url, is_admin:is_admin }
        if(user){
            setUserInfo(user)
        }

            console.log("get_userInfo(): ",data)
        })
    }
    async function update_user(id, user) {
        await axios.put(`https://e-commerce-backend-coding.herokuapp.com/api/users/${id}`, {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            phone: user.phone,
            address_: user.address_1,
            address_2: user.address_2,
            is_admin: user.is_admin,
            image_url: user.image_url

        }).then(res => {
            setRedirect(true);
            console.log("response obtained in update_user(): ", res)
        })/* .catch(e => console.log(e)) */
    }
    function onSubmit(e) {
        e.preventDefault();
        const id = props.match.params.id;
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;
        const address_1 = e.target.address_1.value;
        const address_2 = e.target.address_2.value;
        const is_admin = e.target.is_admin.value;
        const image_url = e.target.image_url.value;

        const user = { id: id, name: name, surname: surname, email: email, password: password, phone: phone, address_1: address_1, address_2: address_2, image_url: image_url, is_admin: is_admin }
        //console.log("onSubmit: ", user);
        update_user(id, user);
    }
    if (redirect === false) {
        return (

            <div className="container">
                <button onClick={get_userInfo}>get User Info</button>   
                <h1>Update this User </h1>
                 <Form onSubmit={onSubmit}>
                    <FormGroup row>
                        <Label for="Name" sm={1} >Name</Label>
                        <Col sm={6}>
                            <Input value={userInfo.name} id="Name" required name="name" placeholder="exampleName" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Surname" sm={1} >Surname</Label>
                        <Col sm={6}>
                            <Input value={userInfo.surname} id="Surname" required name="surname" placeholder="exampleSurname" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Email" sm={1} >Email</Label>
                        <Col sm={6}>
                            <Input value={userInfo.email} id="Email" required name="email" placeholder="example@example.com" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={1} >Password</Label>
                        <Col sm={6}>
                            <Input value={userInfo.password} id="Password" required name="password" placeholder="******" type="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Phone" sm={1} >Phone</Label>
                        <Col sm={6}>
                            <Input value={userInfo.phone} id="Phone" required name="phone" placeholder="555-555-555" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Address_1" sm={1} >Address_1</Label>
                        <Col sm={6}>
                            <Input value={userInfo.address_1} id="Address_1" required name="address_1" placeholder="Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Address_2" sm={1} >Address_2</Label>
                        <Col sm={6}>
                            <Input value={userInfo.address_2} id="Address_2" required name="address_2" placeholder="Continuation Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="is_admin" sm={1} >is_admin</Label>
                        <Col sm={6}>
                            <Input value={userInfo.is_admin} id="is_admin" required name="is_admin" placeholder="false" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="image_url" sm={1} >image_url</Label>
                        <Col sm={6}>
                            <Input value={userInfo.image_url} id="image_url" required name="image_url" placeholder="http://www.someurlwherephotois.com" type="text" />
                        </Col>
                    </FormGroup>

                    <button onClick={()=>console.log("Clicked")} style={{ background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
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
    } else if (redirect===true) {
        return (<Redirect to={"/admin"}></Redirect>)

    }

}
export default withRouter(UpdateUser)

