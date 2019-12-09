import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import SearchComponent from '../../components/SearchComponent';
// import ErrorBoundry from '../../components/ErrorBoundry';
import Cards from '../../components/Cards';
import Loader from '../../components/Loader';

// Actions
import { requestFetchUsers } from '../../store/actions/usersFetchActions';
import { setSearchField } from '../../store/actions/searchUsersActions';
// Util Functions
import { filterUsers } from '../../utils/utilFunctions';

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
    const filteredUsers = filterUsers(users, searchField);
    
    return (
            <div>
                <SearchComponent searchChange={onSearchChange} />
                {/* <ErrorBoundry> */}
                    {isPending ? <Loader /> : <Cards cards={filteredUsers} /> }
                {/* </ErrorBoundry> */}
            </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
