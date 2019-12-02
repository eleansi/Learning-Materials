import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../../components/SearchComponent'; 
import ErrorBoundry from '../../components/ErrorBoundry'; 
import Cards from '../../components/Cards'; 

// Actions
import { setSearchField, fetchUsersData, requestFetchUsers } from '../../actions';

const mapStateToProps = state =>  {
    return { 
        searchField: state.search.searchField,
        users: state.users.users,
        isPending: state.users.isPending
    }
}

const mapDispatchToProps = dispatch => {
   return { 
       onSearchChange: event => dispatch(setSearchField(event.target.value)),
       requestFetchUsers: () => dispatch(requestFetchUsers()),
   }
}

class App extends Component {

    componentDidMount() {
        // this.props.onRequestUsers();
        this.props.requestFetchUsers();
    }


    render() {
        const { searchField, onSearchChange, users, isPending } = this.props;
        const filteredRobots = users.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ? (
            <div>
                Loading...
            </div>
        ) : (
            <div>
                <SearchComponent searchChange={onSearchChange} />
                <ErrorBoundry>
                    <Cards cards={filteredRobots} />
                </ErrorBoundry>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);