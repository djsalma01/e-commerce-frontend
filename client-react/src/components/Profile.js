import { Component } from 'react';
import {

    Modal,
    ModalHeader,
    ModalBody

} from 'reactstrap';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Profile.css";
import UpdateUser from './UpdateUser';

class Profile extends Component {
    state = {
        modal: false,
        isOpen: false

    };

    static propTypes = {

        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired

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
        return (
            <div className="container">
                <div className="w-10">
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile" onClick={this.toggle} />

                </div>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    size="lg"
                >
                    <ModalHeader toggle={this.toggle}>
                        Profile
                    </ModalHeader>
                    <ModalBody>
                        <div class="page-content page-container" id="page-content">
                            <div class="padding">
                                <div class="row container d-flex justify-content-center">
                                    <div class="col-md-12">
                                        <div class="card user-card-hidden">
                                            <div class="row m-l-0 m-r-0">
                                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                                    <div class="card-block text-center text-white">
                                                        <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile" /> </div>
                                                        <h6 class="f-w-600"> {user.name}</h6>

                                                        <UpdateUser />
                                                        <p> {user.surname}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
                                                    <div class="card-block">
                                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">Email</p>
                                                                <h6 class="text-muted f-w-400">{user.email}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">Phone</p>
                                                                <h6 class="text-muted f-w-400">{user.phone}</h6>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600">Address</p>
                                                                <h6 class="text-muted f-w-400">{user.address_1}</h6>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <p class="m-b-10 f-w-600"></p>
                                                                <h6 class="text-muted f-w-400">{user.address_2}</h6>
                                                            </div>
                                                        </div>
                                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                            <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    user: state.auth.user,
    auth: state.auth

})

export default connect(mapStateToProps, null)(Profile);