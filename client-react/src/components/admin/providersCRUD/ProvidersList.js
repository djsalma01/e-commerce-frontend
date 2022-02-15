import { React, useState } from 'react';
import axios from 'axios';
import { List, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader } from 'reactstrap'
import { Collapse, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Providers.css';
import trash from '../itemsCRUD/trash.png';
import pencil from '../itemsCRUD/pencil.png'

const BASE_URL = "https://e-commerce-backend-coding.herokuapp.com/api";

function ProvidersList() {
    const [providersArray, setProvidersArray] = useState([]);

    async function get_providers() {
        await axios.get(BASE_URL + '/providers')
            .then(res => {
                console.log(res.data)
                const data = res.data;
                setProvidersArray(data);
            }).catch(e => { console.log(e) })
    }
    async function delete_provider(id) {
        await axios.delete(BASE_URL + `/items/${id}`)
        console.log(BASE_URL + `/items/${id}`)
    }
    return (
        <div>
            <h1>Providers List</h1>
            <button onClick={() => get_providers()}>Get Providers</button>

            <tr>
                <th>Id </th>
                <th>Name 1</th>
                <th>Name 2</th>
                <th>City</th>
                <th>Country</th>
                <th>Email</th>
                <th>Fiscal ID</th>
                <th>Phone</th>
                <th>Postal Code</th>
                <th>Actions</th>

            </tr>
            {providersArray.map(({ _id, id, name_1, name_2, city, country, email, fiscal_id, phone, postal_code }) => {
                return (


                    <tr key={id} id="providersInfoRow">
                        <td>ID: {_id}</td>
                        <td>Name_1: {name_1}</td>
                        <td>Name_2: {name_2}</td>
                        <td>City: {city}</td>
                        <td>Country: {country}</td>
                        <td>Email: {email}</td>
                        <td>Fiscal Id: {fiscal_id}</td>
                        <td>Phone: {phone}</td>
                        <td>Postal Code: {postal_code}</td>
                        <td>

                            <button onClick={async () => { await delete_provider(_id).then(res => { console.log(res); window.location.reload(false) }) }}>
                                <img src={trash} id="trash" />
                            </button>
                            <Link to={"/updprov/" + _id}>
                                <button>
                                    <img src={pencil} id="pencil" />
                                </button>
                            </Link>

                        </td>
                    </tr>
                );
            })}
        </div>

    );
}
export default ProvidersList;