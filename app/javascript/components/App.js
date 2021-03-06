import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import UsersApartmentIndex from './pages/UsersApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'

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

  createNewApartment = (newApartment) => {
    // console.log('createNewApartment', newApartment)
    // let json = JSON.stringify(newApartment)
    // console.log('json', json)

    fetch("http://127.0.0.1:3000/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      console.log('response', response)
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateApartment = (editedApartment, id) => {
    fetch(`http://127.0.0.1:3000/apartments/${id}`, {
      body: JSON.stringify(editedApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteApartment = (id) => {
    // console.log(id)
    fetch(`http://127.0.0.1:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("delete errors:", errors)
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

            {/* Home page */}
            <Route exact path="/" component={ Home } />

            {/* Browse page */}
            <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } />
            
            {/* User Listings Index */}
            <Route
              path="/usersapartmentindex"
              render={ (props) => {
                  const usersApartments = this.state.apartments.filter(apartment => {
                    return apartment.user_id === current_user.id
                  })
                  return <UsersApartmentIndex usersApartments={usersApartments} />
              }}
            />

            {/* Show page */}
            <Route
              path="/apartmentshow/:id"
              render={ (props) => {
                const id = +props.match.params.id
                const foundApartment = this.state.apartments.find(apartment => apartment.id === id)
                return <ApartmentShow apartment={foundApartment} deleteApartment={ this.deleteApartment } current_user={ current_user }/>
              }}
            />

            {/* New form page */}
            <Route
              path="/apartmentnew"
              render={ (props) => <ApartmentNew createNewApartment={ this.createNewApartment } current_user={ current_user }/> }
            />

            {/* Edit form page */}
            <Route
              exact path={"/apartmentedit/:id"}
              render={ (props) => {
                const id = +props.match.params.id
                const apartment = this.state.apartments.find(apartment => apartment.id === id)
                return(
                  <ApartmentEdit
                    updateApartment={ this.updateApartment }
                    apartment={ apartment }
                    current_user={ current_user }
                  />
                )
              }}
            />

            {/* Not Found */}
            <Route component={ NotFound } />
            
          </Switch>
          {/* <Footer /> */}
        </Router>

      </React.Fragment>
    )
  }
}

export default App
