import React, { Component } from 'react'

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
            </>
        )
    }
}

export default ApartmentShow