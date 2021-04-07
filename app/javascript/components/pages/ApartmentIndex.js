import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
    render() {
        console.log(this.props.apartments)
        return (
            <>
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
            </>
        )
    }
}

export default ApartmentIndex