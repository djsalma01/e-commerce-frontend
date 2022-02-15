import { Component } from 'react';
import {

    Modal,

    ModalBody

} from 'reactstrap';
class SearchModal extends Component {
    state = {
        modal: false,

    };
    toggle = () => {
        // Clear errors
        // this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }



    render() {


        return (
            <div className='flex items-center'>
                <i class="fa fa-search text-gray-400  hover:text-gray-500" onClick={this.toggle}></i>
                <p className="text-gray-800 transform dark:text-gray-200 mb-0 mx-1.5 sm:mx-6">Search</p>
                <Modal className='my-modal'
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                    <ModalBody >
                        <div class="relative">
                            <form action="/shop" method="get">
                                <input type="text"
                                    id="header-search"
                                    name="s"
                                    class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                                    placeholder="Search anything..." />
                                <div class="absolute top-4 right-3">
                                    <button type="submit">
                                        <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500" type="submit"></i>

                                    </button>
                                </div>
                            </form>
                        </div>


                    </ModalBody>
                </Modal>


            </div>
        );
    }
};

export default SearchModal;

