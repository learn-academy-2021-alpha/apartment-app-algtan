import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'

class UsersApartmentIndex extends Component {
    render() {
        // console.log(this.props.usersApartments)
        
        return (
            <>
                <Container>
                    <h2>This is the user's index page</h2>
                    <ul>
                        {this.props.usersApartments && this.props.usersApartments.map(apartment => {
                            return (
                                <li key={apartment.id}>
                                    <NavLink
                                        to={`/apartmentshow/${apartment.id}`}>
                                            {apartment.street}, {apartment.city}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </Container>
            </>
        )
    }
}

export default UsersApartmentIndex