import React from 'react';
import SignupForm from './SignupForm';
import { render, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../../Contexts/AuthContext';

const onPageChangeHandler = jest.fn();

describe('test submit: ', () => {
    it('form', ()  => {
        const { getByPlaceholderText, getByTestId } = render(<AuthProvider><SignupForm onPageChange={onPageChangeHandler}/></AuthProvider>);
        const form = getByTestId('signup-form');
        const firstNameInput = getByPlaceholderText('Имя');
        const lastNameInput = getByPlaceholderText('Фамилия');
        const emailInput = getByPlaceholderText('Адрес электронной почты');
        const passwordInput = getByPlaceholderText('Пароль');
        
        fireEvent.change(firstNameInput, {target: {value: 'FirstName'}});
        fireEvent.change(lastNameInput, {target: {value: 'LastName'}});
        fireEvent.change(emailInput, {target: {value: 'Email'}});
        fireEvent.change(passwordInput, {target: {value: 'Password'}});

        fireEvent.submit(form);

        expect(onPageChangeHandler).toHaveBeenCalled();
    })

    it('btn', ()  => {
        const { getByPlaceholderText,getByTestId } = render(<AuthProvider><SignupForm onPageChange={onPageChangeHandler}/></AuthProvider>);
        const submitBtn = getByTestId('submit-btn');
        const firstNameInput = getByPlaceholderText('Имя');
        const lastNameInput = getByPlaceholderText('Фамилия');
        const emailInput = getByPlaceholderText('Адрес электронной почты');
        const passwordInput = getByPlaceholderText('Пароль');

        fireEvent.change(firstNameInput, {target: {value: 'FirstName'}});
        fireEvent.change(lastNameInput, {target: {value: 'LastName'}});
        fireEvent.change(emailInput, {target: {value: 'Email'}});
        fireEvent.change(passwordInput, {target: {value: 'Password'}});
        
        fireEvent.click(submitBtn);

        expect(onPageChangeHandler).toHaveBeenCalled();
    })
})