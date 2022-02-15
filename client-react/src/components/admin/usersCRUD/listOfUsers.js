import { React, useState } from 'react';
import axios from 'axios';
import { List, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader } from 'reactstrap'
import { Collapse, CardHeader } from 'reactstrap';
import profileImage from '../profileImage.png';
import UpdateUser from "./UpdateUser";
import { Link } from 'react-router-dom';

function ListOfUsers() {
    const [see, setSee]= useState(false);
    const [users, setUsers] = useState([]);
   

    async function delete_user(id){
        await axios.delete(`https://e-commerce-backend-coding.herokuapp.com/api/users/${id}`)
        alert("User Deleted from DB");

    }

    async function get_users() {
        await axios.get('https://e-commerce-backend-coding.herokuapp.com/api/users')
            .then(res => {
                const data = res.data;
                if (data) {
                    console.log(data)
                    setUsers(data)
                } else {
                    console.log("No Data")
                }


            }




            ).catch(e => { throw new Error })



    }

    return (

        <div className="users-receive">
            <button onClick={get_users}>getusers</button>


            {users.map(({ _id, is_admin ,surname, phone, address_1, address_2, email, name, id }) => {
                return (
                    <div >
                        {see? <UpdateUser/> :
                        <ul key={id}>
                            <Card>
                                <CardBody>
                                    <img alt="Card image cap" src={profileImage} width="4%" />
                                    <CardTitle>
                                        id:{_id}
                                    </CardTitle>
                                    <CardTitle tag="h5">
                                        Name: {name} 
                                    </CardTitle>
                                      
                                    <CardSubtitle
                                        tag="h6"
                                    >
                                       Surname: {surname}
                                    </CardSubtitle>
                                    <CardText tag="h6">
                                        Email: {email}                                          
                                    </CardText>
                                    <CardText tag="h6">
                                        Phone: {phone}
                                    </CardText >
                                    <CardText tag="h6">
                                        Admin: {is_admin}
                                    </CardText >
                                    <CardText tag="h6">
                                        Address 1: {address_1}
                                    </CardText >
                                    <CardText tag="h6">
                                        Address 2: {address_2}
                                    </CardText >
                                    
                                   <Link to={"/upduser/"+_id}>
                                        <button type="button" style={{background:"#5DE9CD", height:"45px",marginRight:"10px",  width:"165px", borderRadius:"5px",  boxShadow: "3px 3px #0F070D" }}>
                                            Button To edit
                                        </button>
                                   </Link>
                                    
                                  
                                   <button onClick={async ()=>{ await delete_user(_id).then(res=>window.location.reload(false))}}type="button"style={{background:"#5DE9CD", height:"45px",  width:"165px", borderRadius:"5px",  boxShadow: "3px 3px #0F070D" }}>
                                        Button To delete
                                    </button>
                                  
                                    
                                </CardBody>
                            </Card>

                        </ul>
            }


                    </div>
        )
            })}

        </div>
    );
}
export default ListOfUsers








