import React from 'react';
import {AuthConsumer} from '../Contexts/AuthContext';

export function withAuth(WrappedComponent) {
    return class AuthHOC extends React.Component {
        render() {
            const {...rest} = this.props;
            return (
                <AuthConsumer>
                    {contextProps => (
                        <WrappedComponent {...contextProps} {...rest}/>
                    )}
                </AuthConsumer>
            )
        }
    }
}