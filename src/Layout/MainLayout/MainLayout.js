import React from 'react';
import Header from '../../Components/Header/';
import './MainLayout.scss';

const MainLayout = props => {
    return (
        <div className="MainLayout">
            <Header />
            <main className="main-content">
                {props.children}
            </main>
        </div>
    )
}

export default MainLayout;