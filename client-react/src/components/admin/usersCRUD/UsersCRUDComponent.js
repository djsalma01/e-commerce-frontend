import{React, useState} from 'react'
import AddUser from './addUser';

import ListOfUsers from './listOfUsers'
import { List,Card,CardBody,CardTitle, CardSubtitle, CardText, Button, Accordion, AccordionBody, AccordionItem, AccordionHeader} from 'reactstrap'
import { Collapse,CardHeader} from 'reactstrap';

function UsersCrud(){
    const [toggleQuestion2, setToggequestion2] = useState(0);//1 is the default id to be opened by default
    return(
        <div>
            <Card>
                <CardHeader onClick={() => setToggequestion2(1)}>
                    <span className="font-weight-bold">List of Users</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion2 === 1 ? true : false}>
                    <CardBody>
                        <ListOfUsers/>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion2(2)}>
                    <span className="font-weight-bold">Create a new User</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion2 === 2 ? true : false}>
                    <CardBody>
                        <div className="users-create">
                            <AddUser/>
                        </div>
                    </CardBody>
                </Collapse>
            </Card>
        </div>
    );

}
export default UsersCrud;