import React from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,Col} from 'reactstrap';
import {NavLink } from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        };
    }
    toggleNav=()=>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    toggleModal=()=>{
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleSubmit=(event)=>{
        this.toggleModal();
        alert("name:"+this.username.value+"password:"+this.password.value+"remember:"+this.re)
        event.preventDefault();
    }
   render(){
       return(
        <>
         <Navbar dark expand="md">
           <div className="container">
               <NavbarToggler onClick={this.toggleNav} />
             <NavbarBrand className="mr-auto">
                 <img src="assets/images/logo.png" height="30" width="41"></img>
             </NavbarBrand>
             <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link ml-2" to="/home">
                            <span className="fa fa-home fa-lg mr-2"></span>Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link ml-2" to="/aboutus">
                            <span className="fa fa-info fa-lg mr-2"></span>About us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link ml-2" to="/menu">
                            <span className="fa fa-list fa-lg mr-2"></span>Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link ml-2" to="/contactus">
                            <span className="fa fa-address-card fa-lg mr-2"></span>Contact us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                    </NavItem>
                </Nav>
             </Collapse>
           </div>
         </Navbar>
         <Jumbotron>
            <div className="container">
                <div className="row row-header">
                <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
                </div>
            </div>
         </Jumbotron>
         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
             <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
             <ModalBody>
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup>
                         <div className="row">
                         <Col md={2}>
                             <Label htmlFor="username">Username:</Label>
                         </Col>
                         <Col md={{size:8,offset:1}}>
                         <Input type="text" 
                         id="username" 
                         name="username"
                         innerRef={(input)=>this.username=input}
                         ></Input>
                         </Col>
                         </div>
                     </FormGroup>
                     <FormGroup>
                         <div className="row">
                         <Col md={2}>
                             <Label htmlFor="password">Password:</Label>
                         </Col>
                         <Col md={{size:8,offset:1}}>
                         <Input type="password" 
                         id="password" 
                         name="password"
                         innerRef={(input)=>this.password=input}
                         ></Input>
                         </Col>
                         </div>
                     </FormGroup>
                     <FormGroup check>
                         <div className="row">
                         <Col md={{size:8,offset:3}}>
                         <Input type="checkbox"
                         innerRef={(input)=>this.remember=input}
                         ></Input>
                         <Label htmlFor="remember">Remember me!</Label>
                         </Col>
                         </div>
                     </FormGroup>
                         <div className="row">
                         <Button type="submit"
                          color="primary"
                           className="ml-auto mr-5"
                           toggle={this.toggleModal}
                           >Submit</Button>
                         </div>
                 </Form>
             </ModalBody>
         </Modal>
        </>
       );
   }
}

export default Header;