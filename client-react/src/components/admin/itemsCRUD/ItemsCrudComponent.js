import{React, useState} from 'react'
import ItemList from './ItemListComponent';
import { List,Card,CardBody,CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader} from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';
import AddItem from './AddItemComponent';

function ItemsCrud(){
    const [toggleQuestion2, setToggequestion2] = useState(0);//1 is the default id to be opened by default
    return(
        <div>
            <Card>
                <button onClick={()=> setToggequestion2(0)}>Toggle</button>
                <CardHeader onClick={() => setToggequestion2(1)}>
                    <span className="font-weight-bold">List of Items</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion2 === 1 ? true : false}>
                    <CardBody>
                        <ItemList/>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion2(2)}>
                    <span className="font-weight-bold">Create a new Item</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion2 === 2 ? true : false}>
                    <CardBody>
                        <div className="users-create">
                            <AddItem height="50%"/>
                         </div>
                    </CardBody>
                </Collapse>
            </Card>
        </div>
    );

}
export default ItemsCrud;