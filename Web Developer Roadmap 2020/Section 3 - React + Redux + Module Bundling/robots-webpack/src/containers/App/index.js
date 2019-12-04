import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from "react-hot-loader";
import './app.scss';
// Components
import SearchComponent from '../../components/SearchComponent';
// import ErrorBoundry from '../../components/ErrorBoundry';
import Cards from '../../components/Cards';
import Loader from '../../components/Loader';

// Actions
import { requestFetchUsers } from '../../store/actions/usersFetchActions';
import { setSearchField } from '../../store/actions/searchUsersActions';

const mapStateToProps = (state) => ({
  searchField: state.search.searchField,
  users: state.users.users,
  isPending: state.users.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  requestFetchUsers: () => dispatch(requestFetchUsers()),
});

class App extends Component {
  componentDidMount() {
    this.props.requestFetchUsers();
  }

  render() {
    const { searchField, onSearchChange, users, isPending } = this.props;
    const filteredRobots = users.filter((robot) => robot.name
      .toLowerCase()
      .includes(searchField.toLowerCase()));

    return (<div>
                <SearchComponent searchChange={onSearchChange} /> 
                { isPending ? (<Loader />) : (<Cards cards={filteredRobots} />) }
            </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
