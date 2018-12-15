import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

// Servicios
import AuthService from './Components/services/AuthService';

// Componentes auth
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';

// Components perfil
import Profile from './Components/profile/Profile';
// Componentes encargos
import Order from './Components/order/Order';

// Componentes navegacion y footer
import Navbar from './Components/header-footer/Navbar';
import Footer from './Components/header-footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

    getTheUser = (userObj) => {
      this.setState({
        loggedInUser: userObj
      })
    }

    logout = () => {
      AuthService.logout()
        .then(() => {
          this.setState({
            loggedInUser: null
          });
        })
    }

    fetchUser() {
      if(this.state.loggedInUser === null) {
        AuthService.loggedin()
          .then(response => {
            this.setState({
              loggedInUser: response
            })
          })
          .catch(err => {
            this.setState({
              loggedInUser: false
            })
          })
      }
    }


  render() {
    this.fetchUser();

    if(this.state.loggedInUser) { // si usuario esta logueado
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/encargos'/>}/>
            <Route exact path='/signup' render={() => <Redirect to='/' getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={() => <Redirect to="/encargos" getUser={this.getTheUser}/>}/>
            <Route exact path='/perfil' render={() => <Profile user={this.state.loggedInUser}></Profile>}/>
            <Route exact path='/encargos' render={() => <Order user={this.state.loggedInUser}></Order>}/>
          </Switch>
          <Footer />
        </div>
      );
    } else { // si usuario no esta logueado
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          <Switch>
            <Route exact path='/' render={() => 
              <div className="home-box">
              <h1>¿Eres desarrollador JavaScript?</h1>
              <p>Suscribete para poder acceder a los encargos y contactar con los clientes</p>
              <button className="btn">Suscrirme</button>
              </div>
            }/>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />}/>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />}/>
          </Switch>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
