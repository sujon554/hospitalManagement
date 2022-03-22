import React from 'react';
import { Container,Button, Navbar, Image } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

import logo from './logo.jpg';
import './Header.css'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        fontSize: '1.2rem',
        textAlign: 'center',
        color: 'red'

      };
    return (
        <>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    
                    <NavLink to="/home"><img src={logo} alt="" width="150px" height="60px"/></NavLink>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        
                        <NavLink className="navItem" activeStyle={ activeStyle} to='/home'>Home</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to='/doctors'>Doctors</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to='/care'>Test's</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to='/about'>About</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to='/contacts'>Contacts</NavLink>
                        
                    
                         {user?.email ?
                            <>
                              
                             <NavLink
                    className="navItem text-decoration-none me-3"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                            <Button onClick={logOut} variant="light p-2">Logout</Button>
                            </>
                             : 
                            <NavLink className="navItem" activeStyle={activeStyle} to='/login'>Login</NavLink>
                        }
                      
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                            
                        </Navbar.Text>
                        

                        </Navbar.Collapse>
                        
            </Container>
                    </Navbar>
        </>
    );
};

export default Header;