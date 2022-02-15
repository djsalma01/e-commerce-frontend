import { Component, Fragment } from 'react';
import {
    Card, CardText, CardBody, Alert, Container, Modal, 
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, deleteFromCart,updateCart } from '../actions/cartActions';

import { checkout } from '../actions/orderActions';
import OrderNew from './ORDER2';


class CartModal extends Component {

    state = {
        modal: false,
        loaded: false,
    }
    static propTypes = {
        updateCart: PropTypes.func.isRequired,
        getCart: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        deleteFromCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        cart: PropTypes.object.isRequired,
        checkout: PropTypes.func.isRequired
    }

    getCartItems = async (id) => {
        await this.props.getCart(id);
        this.state.loaded = true;
    }

    onDeleteFromCart = (id, itemId) => {
        this.props.deleteFromCart(id, itemId);
    } 
    onUpdateQuantity = async (userId, productId, qty) => {
      await this.props.updateCart(userId, productId, qty);

    }
    

    toggle = () => {
        // Clear errors
       // this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {

        const user = this.props.user;
        if (this.props.isAuthenticated && !this.props.cart.loading && !this.state.loaded) {
            this.getCartItems(user.id);
        }
        return (
            <div className="container">
                <div className="flex justify-center lg:block" onClick={this.toggle}>
                    <button className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" onClick={this.toggle} href="#" >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokewidt="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </button>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    size="lg"
                >
                    <ModalHeader toggle={this.toggle}>
                        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    </ModalHeader>
                    <ModalBody>
                        {this.props.isAuthenticated ?
                            <Fragment>
                                {this.props.cart.cart ? null :
                                    <Alert color="info" className="text-center">Your cart is empty!</Alert>
                                }
                            </Fragment>
                            : <Alert color="danger" className="text-center">Login to View!</Alert>
                        }


                        {this.props.isAuthenticated && !this.props.cart.loading && this.state.loaded && this.props.cart.cart ?
                            <Container>
                                <div className="row">
                                    <Card>
                                        <CardBody class="bg-gray-100">
                                            <div class="container w-full">
                                                <div class="w-full">
                                                    <div class="bg-white">
                                                        <div class="flex mt-10 mb-5">
                                                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                                                        </div>
                                                        {this.props.cart.cart.items.map((item) => (
                                                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                                                <div class="flex w-2/5">
                                                                    <div class="w-20">
                                                                        <a>
                                                                            <img src={item.image_1} alt="product" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                                                        <span class="font-bold text-sm">{item.title}</span>
                                                                        <span class="text-red-500 text-xs">{item.category_name}</span>
                                                                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={this.onDeleteFromCart.bind(this, user.id, item._id)}>Remove</a>
                                                                    </div>
                                                                </div>
                                                                <div class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                                                    <CardText style={{...qtyBox}}>
                                                                    <p style={{...qtyBtn, border:"1px solid red", color: "Red"}} onClick={() => {if (item.quantity>1){this.onUpdateQuantity(user.id, item.item_id, item.quantity - 1)} }}>
                                                                                             -1
                                                                                           </p>
                                                                        {item.quantity}
                                                                        <p style={{...qtyBtn, border:"1px solid green", color: "green"}} onClick={() => this.onUpdateQuantity(user.id, item.item_id, item.quantity + 1)}>
                                                                                        +1
                                                                                    </p>
                                                                        </CardText>
                                                                </div>

                                                                <div class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                                                    <CardText>{item.sell_price}€</CardText>
                                                                </div>
                                                                <div class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                                                    <CardText>{item.sell_price * item.quantity}€</CardText>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div class="flex justify-between border-b pb-8">
                                                    <h1 class="font-semibold text-2xl">Cart Resume</h1>
                                                </div>
                                                <div class="flex justify-between border-b pb-8">
                                                    <h2 class="font-semibold text-2xl">Total Products</h2>
                                                    <h2 class="font-semibold text-2xl">{this.props.cart.cart.items.length}</h2>
                                                </div>
                                                <div class="flex justify-between border-b pb-8">
                                                    <h2 class="font-semibold text-2xl">SubTotal Price</h2>
                                                    <h2 class="font-semibold text-2xl">{this.props.cart.cart.subtotal.toFixed(2)} €</h2>
                                                </div>
                                                <div class="col-md-12">
                        
                                                  {/*  <Checkout
                                                       user={user._id}
                                                       amount={this.props.cart.cart.bill}
                                                       checkout={this.props.checkout}
                                                   />      */}      
                                                   <OrderNew
                                                   user={user}
                                                   cart={this.props.cart}/>        
                                              </div>
                                            </div>
                                        </CardBody>
                                    </Card>


                                    <div class="col-md-12">
                                        <p>Thanks for your purchase!</p>
                                    </div>
                                </div>
                            </Container>
                            : null}
                    </ModalBody>
                </Modal>
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

const qtyBox = {display: "flex", justifyContent: "space-evenly", border: "1px solid #aaa", borderRadius: "5px", paddingTop: "5px", paddingBottom: "5px", marginBottom: "5px"};
const qtyBtn = {paddingLeft: "5px", paddingRight: "5px", borderRadius: "5px", marginBottom: "0px"};

export default connect(mapStateToProps, {getCart, updateCart, deleteFromCart, checkout})(CartModal);

