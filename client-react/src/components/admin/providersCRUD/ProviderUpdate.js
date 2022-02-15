import { React, useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormText, Col, Input, Label } from 'reactstrap'
import { withRouter, Redirect, Link } from 'react-router-dom'

const BASE_URL = 'https://e-commerce-backend-coding.herokuapp.com/api';
function UpdateProvider(props) {
    const [redirect, setRedirect] = useState(false);
    const [providerInfo, setProviderInfo] = useState({});
    async function get_providerInfo() {
        const id = props.match.params.id;
        await axios.get(BASE_URL + `/providers/${id}`)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                const _id = data._id
                const city = data.city
                const country = data.country
                const email = data.email
                const fiscal_id = data.fiscal_id
                const name_1 = data.name_1
                const name_2 = data.name_2
                const phone = data.phone
                const postal_code = data.postal_code
                const provider = {
                    _id: _id,
                    city: city,
                    country: country,
                    email: email,
                    fiscal_id: fiscal_id,
                    name_1: name_1,
                    name_2: name_2,
                    phone: phone,
                    postal_code: postal_code,
                }
                if (provider) {
                    setProviderInfo(provider)
                }
            }).catch(e => console.log(e))
    }
    async function update_provider(provider){
        const id = props.match.params.id;
       await axios.put(BASE_URL+`/providers/${id}`, {
        provider

       }).then(res => {
        console.log(res.data)
    })
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
        update_provider(provider)

    }

    if (redirect === false) {
        return (
            <div>
                <button onClick={() => get_providerInfo()}><h4 style={{ color: "green" }}>Click Here to Get Info Of Provider!</h4></button>
                <h1>Update this Provider </h1>
                <Form onSubmit={onSubmit}>
                    <FormGroup row>
                        <Label for="name_1" sm={1} >name_1</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.name_1 } required id="name_1" name="name_1" placeholder="examplename_1" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name_2" sm={1} >name_2</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.name_2} required id="name_2" name="name_2" placeholder="examplename_2" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="fiscal_id" sm={1} >fiscal_id</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.fiscal_id} required id="fiscal_id" name="fiscal_id" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={1} >email</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.email} required id="email" name="email" placeholder="******" type="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phone" sm={1} >phone</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.phone} required id="phone" name="phone" placeholder="555-555-555" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="city" sm={1} >city</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.city} required id="city" name="city" placeholder="Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="country" sm={1} >country</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.country} required id="country" name="country" placeholder="Continuation Street, #, Locality, City, Postal Code" type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="postal_code" sm={1} >postal_code</Label>
                        <Col sm={6}>
                            <Input value={providerInfo.postal_code} required id="postal_code" name="postal_code" placeholder="false" type="text" />
                        </Col>
                    </FormGroup>

                    <button onClick={() => console.log("Clicked")} style={{ background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
                        Register this Changes
                    </button>

                    <Link to={"/admin"}>
                        <button onClick={() => console.log("Clicked")} style={{ marginLeft: "5px", background: "#5DE9CD", height: "45px", width: "165px", borderRadius: "5px", boxShadow: "3px 3px #0F070D" }}>
                            Cancel this Changes
                        </button>
                    </Link>



                </Form>
            </div>
        );
    }
    else if (redirect === true) {
        return (<Redirect to={"/admin"}></Redirect>)

    }


}
export default withRouter(UpdateProvider);
