import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                user_id: props.current_user.id,
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                image_url: ""
            },
            submitted: false
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.createNewApartment(this.state.form)
        this.setState({ submitted: true})
    }

    render() {
        // console.log(this.state.form)
        return (
            <>
                <h2>Add a New Apartment</h2>
                <Container>
                <Form>
                    <FormGroup>
                        <Label for="street">Street Address</Label>
                        <Input
                            type="text"
                            name="street"
                            value={ this.state.form.street }
                            onChange={ this.handleChange}
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    value={ this.state.form.city }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input
                                    type="text"
                                    name="state"
                                    value={ this.state.form.state }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="manager">Manager</Label>
                                <Input
                                    type="text"
                                    name="manager"
                                    value={ this.state.form.manager }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={ this.state.form.email }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    value={ this.state.form.price }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="bedrooms">Bedrooms</Label>
                                <Input
                                    type="number"
                                    name="bedrooms"
                                    value={ this.state.form.bedrooms }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="bathrooms">Bathrooms</Label>
                                <Input
                                    type="number"
                                    name="bathrooms"
                                    value={ this.state.form.bathrooms }
                                    onChange={ this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="pets">Pets</Label>
                        <Input
                            type="text"
                            name="pets"
                            value={ this.state.form.pets }
                            onChange={ this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image_url">Image URL</Label>
                        <Input
                            type="text"
                            name="image_url"
                            value={ this.state.form.image_url }
                            onChange={ this.handleChange}
                        />
                    </FormGroup>
                </Form>

                <Button
                    onClick={ this.handleSubmit }
                >
                    Add a New Apartment Listing
                </Button>

                </Container>

                { this.state.submitted && <Redirect to="/usersapartmentindex" /> }
            </>
        )
    }

}

export default ApartmentNew