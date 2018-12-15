import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }
    
    render() {
        return (
            <div className="container">
              <div className="wrap-box">
                <h3>Mi perfil</h3>

                <p>Name: {this.state.user.username}</p>
                <p>email: {this.state.user.email}</p>
              </div>
            </div>
        )
    }
}

export default Profile;