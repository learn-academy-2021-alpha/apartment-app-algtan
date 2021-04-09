import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'

class ApartmentIndex extends Component {
    render() {
        console.log(this.props.apartments)
        return (
            <>
                <Container>
                    <h2>This is the index page</h2>
                    <ul>
                        {this.props.apartments && this.props.apartments.map(apartment => {
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

export default ApartmentIndex