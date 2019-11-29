import React, { Component } from 'react';
import SearchComponent from '../../components/SearchComponent'; 
import ErrorBoundry from '../../components/ErrorBoundry'; 
import Cards from '../../components/Cards'; 

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
       fetch('https://my-json-server.typicode.com/eleansi/Insta-clone/users')
       .then(res =>  res.json())
       .then(users => { this.setState({ robots: users })});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div>
                <SearchComponent searchChange={this.onSearchChange} />
                <ErrorBoundry>
                    <Cards cards={filteredRobots} />
                </ErrorBoundry>
            </div>
        );
    }
}

export default App;