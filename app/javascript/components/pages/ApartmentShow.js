import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Table, Button } from 'reactstrap'

class ApartmentShow extends Component {
    render() {
        const apartment = this.props.apartment
        const current_user = this.props.current_user

        // console.log(apartment)

        return(
            <>
                <Container>
                    <h1>{apartment.street}</h1>
                    <div className="div-center">
                        <img className="img-show" src={apartment.image_url}></img>
                    </div>
                    <br />
                    <Row className="justify-content-center">
                        <Col xs={10} md={7}>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Address
                                        </td>
                                        <td>
                                            {apartment.street}
                                            <br />
                                            {apartment.city}, {apartment.state}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            {apartment.price}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Bedrooms
                                        </td>
                                        <td>
                                            {apartment.bedrooms}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Bathrooms
                                        </td>
                                        <td>
                                            {apartment.bathrooms}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pets
                                        </td>
                                        <td>
                                            {apartment.pets}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Manager
                                        </td>
                                        <td>
                                            {apartment.manager}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            {apartment.email}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <div className="div-center">
                        {
                            current_user.id === apartment.user_id &&
                            <NavLink to={ `/apartmentedit/${this.props.apartment.id}` }>
                                <Button color="secondary">
                                    Edit Apartment Listing
                                </Button>
                            </NavLink>
                        }
                        {'  '}
                        {
                            current_user.id === apartment.user_id &&
                            <NavLink to={"/usersapartmentindex"}>
                                <Button color="secondary" onClick={ () => this.props.deleteApartment(this.props.apartment.id) }>
                                    Delete Apartment Listing
                                </Button>
                            </NavLink>
                        }
                    </div>
                    <br />
                </Container>
            </>
        )
    }
}

export default ApartmentShow