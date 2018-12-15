import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        AuthService.login(username, password)
          .then(response => {
              this.setState({
                  username: username,
                  password: password,
                  error: false
              });
              this.props.getUser(response)
          })
          .catch(error => {
              this.setState({
                  username: username,
                  password: password,
                  error: true
              });
          })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="container">
              <div className="wrap-box">
                <h3>Acceder</h3>

                <form>
                  <div className="form-group">
                    <input className="form-control" placeholder="Nombre de usuario" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <input className="form-control" placeholder="Contraseña" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    
                    <button className="btn" onClick={this.handleFormSubmit}>Acceder</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }

}

export default Login;