import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsList from "./components/FriendsList/FriendsList";
import CorrespondenseContainer from "./components/Correspondense/CorrespondenseContainer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import appRD, {setInitializedThunkCreator} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";





class App extends React.Component {

    componentDidMount() {
        this.props.setInitializedThunkCreator()
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader />
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer
                    store={this.props.store}
                />
                <Navigation
                    store={this.props.store}
                />
                <div className="app-wrapper-content">
                    <Route path='/correspondense'
                           render={ () =>
                               <CorrespondenseContainer
                                   store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/profile/:userID?'
                           render={ () =>
                               <ProfileContainer
                                   // store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/users'
                           render={ () =>
                               <UsersContainer
                                   store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/login'
                           render={ () => <LoginContainer
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/news'
                           render={ () => <News
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/music'
                           render={ () => <Music
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/settings'
                           render={ () => <Settings
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/friendsList'
                           render={ () => <FriendsList
                               store={ this.props.store }
                           />
                           }
                    />
                </div>
            </div>
        );
    }


}

let mapStateToProps = ( state ) => {
    return {
        isInitialized: state.appRD.isInitialized
    }
};

export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {setInitializedThunkCreator})
)(App);

let SocialNetworkApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};

export default SocialNetworkApp;
