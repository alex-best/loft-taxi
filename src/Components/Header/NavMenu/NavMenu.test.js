import React from 'react';
import NavMenu from './NavMenu';
import { render, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../../../Contexts/AuthContext';

const onPageChangeHandler = jest.fn();

it('renders correctly', () => {
    const { queryByText } = render(<NavMenu onPageChange={onPageChangeHandler} />)
    const mapBtn = queryByText('Карта');
    const profileBtn = queryByText('Профиль');
    const logoutBtn = queryByText('Выйти');
    
    expect(mapBtn).toBeTruthy();
    expect(profileBtn).toBeTruthy();
    expect(logoutBtn).toBeTruthy();
})

describe('test links', () => {
    describe('click on link: ', () => {
        it('map', () => {
            const { queryByText } = render(<NavMenu onPageChange={onPageChangeHandler} />)
            const mapLink = queryByText('Карта');
    
            fireEvent.click(mapLink);
            expect(onPageChangeHandler.mock.calls[0][0]).toEqual('map');
        })
    
        it('profile', () => {
            const { queryByText } = render(<NavMenu onPageChange={onPageChangeHandler} />)
            const profileLink = queryByText('Профиль');
    
            fireEvent.click(profileLink);
            expect(onPageChangeHandler.mock.calls[1][0]).toEqual('profile');
        })
    
        it('logout', () => {
            const { queryByText } = render(<AuthProvider><NavMenu onPageChange={onPageChangeHandler} /></AuthProvider>)
            const logoutLink = queryByText('Выйти');
    
            fireEvent.click(logoutLink);
            expect(onPageChangeHandler.mock.calls[2][0]).toEqual('login');
        })
    })
})