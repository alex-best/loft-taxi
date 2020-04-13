import React from 'react';
import LoginPage from './LoginPage';
import { render, fireEvent } from '@testing-library/react';

const onPageChangeHandler = jest.fn()

it('test navigation link', () => {
    const { getByText } = render(<LoginPage onPageChange={onPageChangeHandler} />)
    const link = getByText('Зарегистрируйтесь');

    expect(link).toBeTruthy();

    fireEvent.click(link);

    expect(onPageChangeHandler).toHaveBeenCalled();
})


