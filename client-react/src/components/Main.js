import { Component } from 'react';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UpdateUser from './admin/usersCRUD/UpdateUser';
import Orders from './Order';
import Admin from './admin/Admin';
import Shop from './Shop';
import Profile from './Profile';
import AddUser from './admin/usersCRUD/addUser';
import ItemsCrud from './admin/itemsCRUD/ItemsCrudComponent';
import UpdateItem from './admin/itemsCRUD/UpdateItemComponent';
import UpdateProvider from './admin/providersCRUD/ProviderUpdate';
import OrderNew from './ORDER2'
class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/shop'>
                        <Shop/>
                    </Route>  
                    <Route path='/profile'>
                        <Profile/>
                    </Route>  
                    <Route path='/orders/:id'>
                        <Orders/>
                    </Route>
                    <Route path='/admin'>
                        <Admin/>
                    </Route> 
                    <Route path='/adduser'>
                        <AddUser/>
                    </Route> 
                    <Route path='/upduser/:id'>
                        <UpdateUser/>
                    </Route> 
                    <Route path='/upditem/:id'>
                        <UpdateItem/>
                    </Route> 
                    <Route path='/updprov/:id'>
                        <UpdateProvider/>
                    </Route> 
                    <Route path='/itemscrud'>
                        <ItemsCrud/>
                    </Route> 
                    <Route path='/ordernew'>
                        <OrderNew/>
                    </Route> 
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));

