import {useState } from 'react';

import AppNavbar from '../AppNavbar';

import UsersCrud from './usersCRUD/UsersCRUDComponent';
import ItemsCrud from './itemsCRUD/ItemsCrudComponent';
import ProvidersCrud from './providersCRUD/ProvidersCRUDComponent';
import Microservices from './microservices';



import {Card,CardBody } from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';


import './Admin.css'



function Admin() {
    
    const [toggleQuestion, setToggequestion] = useState(3);//1 is the default id to be opened by default
    
    if(localStorage.getItem('is_admin') === 'true'){
      
        return (
            <div>
                <AppNavbar/>
                <button onClick={()=> setToggequestion(0)}>Toggle</button>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <span className="font-weight-bold">Users Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                            <UsersCrud/>
                        </CardBody>
                    </Collapse>
                </Card>
    
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <span className="font-weight-bold">Items Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                               <ItemsCrud/>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(5)}>
                        <span className="font-weight-bold">Providers Crud</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 5 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                              <ProvidersCrud/>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <span className="font-weight-bold">Microservices</span>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <div className="users-create">
                               <Microservices/> 
                              
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
               
    
    
                
                
                
            
                </div>
        );
    } else {
        return (
            <div>

                <h1 style={{color:"red"}}>ERROR 403: Unauthorized, sorry Admin Only!</h1>
            </div>
        );
    }
    
    
    }
export default Admin;
       

   