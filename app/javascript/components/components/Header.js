import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_user_route
  } = props

  // console.log(logged_in)
  // console.log(sign_in_route)
  // console.log(sign_out_route)
  // console.log(new_user_route)

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand href="/">Apartment App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  to="/apartmentindex"
                  className="nav-link">
                    All Listings
                </NavLink>
              </NavItem>
                { logged_in &&
                    <NavItem>
                        <NavLink
                        to="/apartmentnew"
                        className="nav-link">
                            Create New Listing
                        </NavLink>
                    </NavItem>
                }
                { logged_in &&
                    <NavItem>
                        <NavLink
                        to="/apartmentindex"
                        className="nav-link">
                            Your Listings
                        </NavLink>
                    </NavItem>
                }
            </Nav>
                <Nav className="ml-auto" navbar>
                { logged_in &&
                    <NavItem>
                        <a href={ sign_out_route } className="nav-link">Sign Out</a>
                    </NavItem>
                }
                { !logged_in &&
                    <NavItem>
                        <a href={ new_user_route } className="nav-link">Create Account</a>
                    </NavItem>
                }
                { !logged_in &&
                    <NavItem>
                        <a href={ sign_in_route } className="nav-link">Sign In</a>
                    </NavItem>
                }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;