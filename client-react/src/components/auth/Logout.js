import { Component, Fragment } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import {NavLink, Button} from 'reactstrap';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Fragment>
                <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" onClick={this.props.logout} href="#">Logout</a>

                    {/*
                        <Button color="danger" className="btn btn-sm"><NavLink onClick={this.props.logout} href="#"><span className="text-light"><b>Logout</b></span></NavLink></Button>
                    */}
                        </Fragment>
            </div>
        )
    }
}

export default connect(null,{logout})(Logout);
