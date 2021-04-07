import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import UsersApartmentIndex from './pages/UsersApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.apartmentIndex()
  }

  apartmentIndex = () => {
    fetch("http://127.0.0.1:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentsArray => {
      this.setState({ apartments: apartmentsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    // console.log(current_user)

    return (
      <React.Fragment>
        <Router>
          <Header
            logged_in = { logged_in }
            sign_in_route = { sign_in_route }
            sign_out_route = { sign_out_route }
            new_user_route = { new_user_route }
          />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } />
            <Route
              path="/usersapartmentindex"
              render={ (props) => {
                  const usersApartments = this.state.apartments.filter(apartment => {
                    return apartment.user_id === current_user.id
                  })
                  return <UsersApartmentIndex usersApartments={usersApartments} />
              }}
            />
            <Route
              path="/apartmentshow/:id"
              render={ (props) => {
                const id = +props.match.params.id
                const foundApartment = this.state.apartments.find(apartment => apartment.id === id)
                return <ApartmentShow apartment={foundApartment} />
              }}
            />
          </Switch>
        </Router>

      </React.Fragment>
    )
  }
}

export default App
