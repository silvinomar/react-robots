import React, { Component } from 'react';
import './bootstrap.min.css';
import './Estilos.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
        console.log("constructor");
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        console.log("componentDidMount");
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        // destructuring
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        console.log("render");

        if (!robots.length) {
            return <h1>loading...</h1>
        } else {
            return (
                <main className="text-center">
                    <header className="pt-3 pb-4 position-relative ">
                        <h1 className="font-weight-light mt-2">Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </header>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </main>
            )
        }
    }
}
/*
const App = () => {
    return (
        <main className="text-center">
            <header className="py-3">
                <h1 className="font-weight-light mt-2">Robofriends</h1>
                <SearchBox />
            </header>
            <CardList robots={robots}/>
        </main>
    );
}
*/

export default App;