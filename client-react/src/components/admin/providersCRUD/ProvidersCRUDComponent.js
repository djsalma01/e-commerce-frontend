import {React, useState} from 'react';
import axios from 'axios';
import { List,Card,CardBody,CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader} from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';
import ProvidersList from './ProvidersList';
import AddProvider from './ProviderCreate';
const BASE_URL = "https://e-commerce-backend-coding.herokuapp.com/api";
function ProvidersCrud(){
    const [toggleQuestion3, setTogggleQuestion3] = useState(0);
    return(
        <div>
            <Card>
                <button onClick={()=> setTogggleQuestion3(0)}>Toggle</button>
                <CardHeader onClick={()=> setTogggleQuestion3(1)}> Providers List
                    <Collapse isOpen={toggleQuestion3 === 1 ? true : false}>
                        <CardBody>
                            <ProvidersList/>
                        </CardBody>
                    </Collapse>
                </CardHeader>
            </Card>
            <Card>
                <button onClick={()=> setTogggleQuestion3(0)}>Toggle</button>
                <CardHeader onClick={()=> setTogggleQuestion3(2)}> Create a Provider
                    <Collapse isOpen={toggleQuestion3 === 2 ? true : false}>
                        <CardBody>
                            <AddProvider/>
                        </CardBody>
                    </Collapse>
                </CardHeader>
            </Card>
        </div>
    );

}
export default ProvidersCrud;
