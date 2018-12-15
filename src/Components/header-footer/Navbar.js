import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
    }

    handleLogout = (e) => {
        this.props.logout()
    }

    render() {
        if(this.state.loggedInUser) {
            return (
              <nav className="navbar">
                <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                  <ul className="nav justify-content-end">
                    <li className="nav-item"><Link className="nav-link" to='/encargos'>Ver encargos</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/perfil'>Mi perfil</Link></li>
                    <li className="nav-item"><a className="nav-link" href='/' onClick={this.handleLogout}>Salir</a></li>
                    {/*<span>Bienvenido, {this.state.loggedInUser.username}</span>*/}
                  </ul>
                </div>
              </nav>
            )
        } else {
            return(
              <nav className="navbar">
                <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                  <ul className="nav justify-content-end">
                    <li className="nav-item"><Link className="nav-link" to="/signup">Registrarse</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Acceder</Link></li>
                  </ul>
                </div>
              </nav>
           )
        }
    }
}

export default Navbar;