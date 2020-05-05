import React from 'react';
import LoginForm from './LoginForm';
import { render, fireEvent } from '@testing-library/react';

const onSubmit = jest.fn();

describe('LoginForm: ', () => {
    it('renders correctly', () => {
        const { getByText } = render(<LoginForm onSubmit={onSubmit} />);
        
        expect(getByText('Почта')).toBeTruthy();
        expect(getByText('Пароль')).toBeTruthy();
    })

    it('validator work', () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<LoginForm onSubmit={onSubmit} />);
        const usernameInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        
        fireEvent.change(usernameInput, {target: {value: 'Invalid text'}});
        fireEvent.change(passwordInput, {target: {value: 'Invalid text'}});

        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('test submit', ()  => {
        const { getByTestId } = render(<LoginForm onSubmit={onSubmit}/>);
        const form = getByTestId('login-form');
        const usernameInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        
        fireEvent.change(usernameInput, {target: {value: 'test@test.com'}});
        fireEvent.change(passwordInput, {target: {value: '123123'}});

        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit.mock.calls[0][0]).toEqual('test@test.com');
        expect(onSubmit.mock.calls[0][1]).toEqual('123123');
    })
})

