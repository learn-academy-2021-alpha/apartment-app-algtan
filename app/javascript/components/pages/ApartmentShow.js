import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentShow extends Component {
    render() {
        const apartment = this.props.apartment

        console.log(apartment)

        return(
            <>
                <h1>{apartment.street}</h1>
                <img src={apartment.image_url}></img>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {apartment.street}
                                <br />
                                {apartment.city}, {apartment.state}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <NavLink
                    to={"/usersapartmentindex"}
                >
                    <Button color="secondary" onClick={ () => this.props.deleteApartment(this.props.apartment.id) }>
                        Delete Apartment Listing
                    </Button>
                </NavLink>
            </>
        )
    }
}

export default ApartmentShow