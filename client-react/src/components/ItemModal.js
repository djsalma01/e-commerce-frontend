import { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody

} from 'reactstrap';
import swal from 'sweetalert';

import { addToCart } from '../actions/cartActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';

class ItemModal extends Component {
    state = {
        modal: false,

    };


    static propTypes = {

        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
        swal({
            title: "Item added to Cart!",
            icon: "success",
          });
    }

    toggle = () => {
        // Clear errors
        // this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }



    render() {
        const item = this.props.item;
        const user = this.props.user;

        return (
            <div className="container">
                {/*
        <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" onClick={this.toggle}><CardTitle tag="h5">{item.title}</CardTitle></a>
       */}
                <h2 className="text-gray-900 title-font text-lg font-medium" onClick={this.toggle}>{item.title}</h2>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        {item.title}
                    </ModalHeader>
                    <ModalBody>
                        <div className="">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img className="w-full h-full lg:max-w-2xl" src={item.image_1} alt="Catalogue-pana.svg" />
                            </a>
                            <div className="mt-4 items-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category_name}</h3>

                                <span className="fa fa-star checked mb-6"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <div className="flex items-center justify-between  ">
                                    <div>
                                        <p className="mt-1">{item.sell_price}€</p>

                                    </div>

                                    {this.props.isAuthenticated ?
                                        <Button
                                            color="success"
                                            size="sm"
                                            onClick={this.onAddToCart.bind(this, user.id, item._id)}
                                        >Add To Cart</Button> :
                                        null}
                                </div>

                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({

    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, { addToCart })(ItemModal);