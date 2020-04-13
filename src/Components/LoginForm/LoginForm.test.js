import React from 'react';
import LoginForm from './LoginForm';
import { render, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../../Contexts/AuthContext';

const onPageChangeHandler = jest.fn();

it('renders correctly', () => {
    const { getByLabelText } = render(<LoginForm onPageChange={onPageChangeHandler} />);
    const usernameInput = getByLabelText('Имя пользователя*');
    const passwordInput = getByLabelText('Пароль*');
    
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
})

describe('test inputs', () => {
    it('updates on change', () => {
        const { getByLabelText } = render(<LoginForm onPageChange={onPageChangeHandler} />);
        const usernameInput = getByLabelText('Имя пользователя*');
        const passwordInput = getByLabelText('Пароль*');
        
        fireEvent.change(usernameInput, {target: {value: 'Username'}});
        fireEvent.change(passwordInput, {target: {value: 'Password'}});

        expect(usernameInput.value).toBe('Username');
        expect(passwordInput.value).toBe('Password');
    });
})

describe('test submit: ', () => {
    it('form', ()  => {
        const { getByLabelText, getByTestId } = render(<AuthProvider><LoginForm onPageChange={onPageChangeHandler}/></AuthProvider>);
        const form = getByTestId('login-form');
        const usernameInput = getByLabelText('Имя пользователя*');
        const passwordInput = getByLabelText('Пароль*');
        
        fireEvent.change(usernameInput, {target: {value: 'Username'}});
        fireEvent.change(passwordInput, {target: {value: 'Password'}});

        fireEvent.submit(form);

        expect(onPageChangeHandler).toHaveBeenCalled();
    })

    it('btn', ()  => {
        const { getByLabelText, getByTestId } = render(<AuthProvider><LoginForm onPageChange={onPageChangeHandler}/></AuthProvider>);
        const submitBtn = getByTestId('submit-btn');
        const usernameInput = getByLabelText('Имя пользователя*');
        const passwordInput = getByLabelText('Пароль*');

        fireEvent.change(usernameInput, {target: {value: 'Username'}});
        fireEvent.change(passwordInput, {target: {value: 'Password'}});
        
        fireEvent.click(submitBtn);

        expect(onPageChangeHandler).toHaveBeenCalled();
    })
})

