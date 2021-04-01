import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import vk from './vk.png'
import insta from './insta.png'
import phone from './phone.png'
import sms from './message.png'

class Header extends Component {
    render() {
        return (
            <Navbar expand="sm" bg="info" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <img
                            className="ml-4"
                            src = {phone}
                            heigth="30"
                            width="30"
                        />
                        <Navbar.Text> +7 951 396 34 70 </Navbar.Text>
                        <img
                            className="ml-4"
                            src = {sms}
                            heigth="30"
                            width="30"
                        />
                        <Navbar.Text> Ksyushartisheva@mail.ru </Navbar.Text>
                        <Nav.Link href="https://vk.com/wasilkas">
                            <img
                                className="ml-4"
                                src = {vk}
                                heigth="30"
                                width="30"
                            />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/krtisheva/">
                            <img
                                src = {insta}
                                heigth="30"
                                width="30"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;