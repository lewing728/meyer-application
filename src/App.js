import React, {Component} from 'react';
import './App.css';
import './css/styles.css';
import MainForm from './components/MainForm';
import { Card, CardBody, Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand href="#">Mysterious Company</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#" active>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Random</NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container>
                    <div class="pt-5 pb-5">
                        <Card>
                            <CardBody>
                                <MainForm />
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default App;