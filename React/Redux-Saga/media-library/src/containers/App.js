import React from 'react';
import Header from '../common/Header';
import PropTypes from "prop-types";

import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import MediaGalleryPage from './MediaGalleryPage';

import { Provider } from 'react-redux';  
import configureStore from '../store/configureStore';


let history = createBrowserHistory();

const store = configureStore();
// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends React.Component {
  render() {
    return (
        <Provider store={store}> 
          <Router history={history}>
              <div className="container-fluid text-center">
                  <Header />
                  <Route path="/" exact component={HomePage} /> 
                  <Route path="/library" component={MediaGalleryPage} />
              </div>
          </Router>
        </Provider>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;