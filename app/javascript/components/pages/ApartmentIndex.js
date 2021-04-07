import React, { Component } from 'react'

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
                                {apartment.street}, {apartment.city}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ApartmentIndex