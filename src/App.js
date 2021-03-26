import Nav from './components/Nav/Nav';
import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import Settings from './components/Settings/Settings';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.initialized) {
      return (
        <BrowserRouter>
          <div class="page">
            <header class="main-header"><HeaderContainer /></header>
            <nav class="main-nav"><Nav /></nav>
            <div class="main-content">
              <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
              <Route path="/messages" render={() => <MessagesContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </div>
        </BrowserRouter>
      );
    }
    return <Preloader />
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
