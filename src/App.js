import React, { Component } from "react";
import pagesData from './AppData/pages';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import MapPage from './Pages/MapPage/MapPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

class App extends Component {
    state = {
        currentPage: pagesData.login.id
    };

    onPageChangeHandler = pageType => {
        this.setState({
            currentPage: pageType
        });
	};
	
	onLoginHandler = () => {
		this.onPageChangeHandler(pagesData.map.id);
	}

	onSignupHandler = () => {
		this.onPageChangeHandler(pagesData.map.id);
	}

    render() {
		const { currentPage } = this.state;
		let Component = null;

		switch (currentPage) {
			case pagesData.login.id:
				Component = <LoginPage onSubmit={this.onLoginHandler} onPageChange={this.onPageChangeHandler}/>
				break;
			case pagesData.signup.id:
				Component = <SignupPage onSubmit={this.onSignupHandler} onPageChange={this.onPageChangeHandler}/>
				break;
			case pagesData.map.id:
				Component = <MapPage onPageChange={this.onPageChangeHandler} />
				break;
			case pagesData.profile.id:
				Component = <ProfilePage onPageChange={this.onPageChangeHandler} />
				break;
			default:
				break;
		} 

        return (
            <div className="App">
				{Component}
            </div>
        );
    }
}

export default App;
