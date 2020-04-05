import React from 'react';
import Header from '../../Components/Header/Header';

import './MainLayout.scss';

const MainLayout = props => {
    return (
        <React.Fragment>
            <Header onPageChange={props.onPageChange} />
            <main className="main-content">
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default MainLayout;