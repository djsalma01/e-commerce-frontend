import { Component } from 'react';
import {
    
    Modal,
    ModalHeader,
    ModalBody

} from 'reactstrap';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Profile.css";
import { updateUser } from '../actions/authActions';

class UpdateUser extends Component {  


  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isOpen: false,
      name : this.props.user.name,
      email : this.props.user.email,    

  };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

   // this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  


    static propTypes = {
        updateUser:PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,

    }

    toggle = () => {
        // Clear errors
        // this.props.clearErrors();
        this.setState({
            modal: !this.state.modal,
         
        });
        
        
    }
/*    handleChange(event) {
      console.log(event.target.value)
      this.setState({name: event.target.value});
      this.setState({email: event.target.value});

    }

      handleSubmit(e) {
        
        e.preventDefault();
    
      
   
    alert('A name was submitted: ' + this.state.user1);

       // this.props.updateCart(this.user._id, myForm);
      };
     

*/ 
onUpdate = async (id ,user) => {
  await this.props.updateUser(id, user);
  swal({
    title: "User Updated",
    icon: "success",
  });  }

      handleSubmit(event) {
        event.preventDefault();  
        const user1 = {
          name: this.state.name,
          email : this.state.email,
        }
        this.onUpdate(this.props.user.id,user1)
       
      }

    render() {
        
     //   const   user  = this.props.user;

     
        return (
            <div className="container">
                    
                    <h2 className="text-gray-900 title-font text-lg font-medium" onClick={this.toggle}>Edite Profile</h2>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    size="lg"
                >
                    <ModalHeader toggle={this.toggle}>
                        Profile
                    </ModalHeader>
                    <ModalBody>
                    <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form onSubmit={this.handleSubmit}>
                <div className="updateProfileName">
                
                    <label>Name : 
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={this.state.name} 
                    onChange={(e) => this.setState({name: e.target.value})}

                  />
                  </label>
                </div>
                <div className="updateProfileEmail">
                    <label>Email : 
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})}


                  /></label>
                </div>

                <input
                  type="submit" value="Submit"
                  className="updateProfileBtn"
                />
              </form>
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

export default connect(mapStateToProps,{updateUser} )(UpdateUser);