import React from 'react';
import SignupPage from './SignupPage';
import { render, fireEvent } from '@testing-library/react';

const onPageChangeHandler = jest.fn()

it('test navigation link', () => {
    const { getByText } = render(<SignupPage onPageChange={onPageChangeHandler} />)
    const link = getByText('Войти');

    expect(link).toBeTruthy();

    fireEvent.click(link);

    expect(onPageChangeHandler).toHaveBeenCalled();
})