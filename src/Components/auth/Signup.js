import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class Signup extends Component {
    constructor(props) {
        super(props);
        //this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        };
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const username = this.state.username;
        const password = this.state.password;

        AuthService.signup(firstName, lastName, email, username, password)
        .then( response => {
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password:""
            });
            this.props.getUser(response.user)
        })
        .catch( error => console.log(error) )
    }

    handleChange = (event) => {
        const{name, value} = event.target;
        this.setState({[name]: value});
    }
    
    render() {
        return(
            <div className="container">
              <div className="wrap-box">
                <h3>Registrarse</h3>

                <form>
                  <div className="form-group">
                    <input className="form-control" placeholder="Nombre" type="text" name="firstName" value={this.state.firstName} onChange={e => this.handleChange(e)} />
                    <input className="form-control" placeholder="Apellidos" type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleChange(e)} />
                    <input className="form-control" placeholder="Email" type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    <input className="form-control" placeholder="Nombre de usuario" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <input className="form-control" placeholder="Contraseña" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />    

                    <button className="btn" onClick={this.handleFormSubmit}>Registrarse</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}

export default Signup;