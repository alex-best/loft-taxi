import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));

it('renders correctly', () => {
    const { queryByTestId } = render(<App />)
    
    expect(queryByTestId('App')).toBeTruthy();
})