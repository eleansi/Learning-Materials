import React, { Component } from 'react';
import SearchComponent from '../SearchComponent'; 
import Cards from '../Cards'; 
import { robots } from '../../robots'; 
// import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: robots,
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value,
        });
    };

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield);
        });
        // console.info("State ", this.state.robots);
        // console.info("State length ", this.state.robots.length);
        // console.info("Filtered ", filteredRobots);
        // console.info("Filtered length", filteredRobots.length);

        return (
            <div>
                <SearchComponent searchChange={this.onSearchChange} />
                <Cards cards={filteredRobots} />
            </div>
        );
    }
}

// App.propTypes = {

// };

export default App;