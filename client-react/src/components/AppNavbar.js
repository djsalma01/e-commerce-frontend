import { Component, Fragment } from 'react';
import RegisterModal from './auth/registerModal';
import Logout from './auth/Logout';
import LoginModal from './auth/loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoimage from '../images/fullEnergyLogo.png';
import SearchModal from './SearchModal';
import CartModal from './CartModal';
import { Link } from 'react-router-dom'
import Profile from './Profile'

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>

                <div className=" items-center flex flex-col lg:flex-row lg:mx-6">
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                    {user ? 
                    <Link to={`/orders/ ${user.id}`} className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0">
                        <a href="#">
                            Orders
                        </a>
                    </Link> : <h1>Enjoy!</h1>}


                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#"> <Logout /></a>
                    {localStorage.getItem('is_admin') === 'true' ? <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="/admin"> Admin</a> : <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" ref="#">Enjoy!</a>}
                    <a href="#"><Profile /></a>
                </div>

            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <div className=" items-center flex flex-col lg:flex-row lg:mx-6">

                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" > <RegisterModal /></a>

                    <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" > <LoginModal /></a>
                </div>

            </Fragment>
        );

        return (
            <div>

                <nav>
                    <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                        <div className="flex items-center justify-between">
                            <div className="max-w-18" >
                                <a >
                                    <img class="object-contain  w-20" src={logoimage} />

                                </a>
                            </div>


                            <div className="flex lg:hidden">
                                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="items-center lg:flex">
                            {isAuthenticated ? authLinks : guestLinks}

                            <CartModal />
                        </div>
                    </div>
                </nav>
                <nav className="nav2 shadow dark:bg-gray-800 flex justify-between">
                    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                        <a href="/home" className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

                        <a href="/shop" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Shop</a>

                        <a href="#about" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About us</a>

                        <a href="#contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>

                    </div>

                    <SearchModal />



                </nav>


                {/*
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">E Commerce Store</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar> 
                                { isAuthenticated ? authLinks: guestLinks}                               
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);