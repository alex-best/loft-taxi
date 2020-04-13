import React, { Component } from 'react';

export const AuthContext = React.createContext({});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    state = {
        isLoggedIn: false
    }

    login (username, password) {
        if (username && password) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    logout() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {

        const { children } = this.props;

        return (
            <AuthContext.Provider
                value={{
                    isLoggedIn: this.state.isLoggedIn,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {children}
            </AuthContext.Provider>
        )
    }

}