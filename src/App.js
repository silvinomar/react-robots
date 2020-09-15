import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import AddCard from './AddCard';
import Card from './Card';
import './bootstrap.min.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: '',
            addToggler: false,
            newRobotName: '',
            newRobotEmail:''
        }
    }

    onSearchChange = (event) => {
        this.setState( { searchField: event.target.value } )
    }

    onToggleAppearence = () => {
        console.log("button click");
        this.setState( { addToggler: !this.state.addToggler } );
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onAddClick = () => {
        console.log(robots.length);
        robots.push({id: robots.length+1 , name:this.state.newRobotName, email:this.state.newRobotEmail})
        robots.sort()

        this.setState({
            robots:robots,
            newRobotName: '',
            newRobotEmail:''
        })

        document.querySelector('input[name="newRobotName"]').value="";
        document.querySelector('input[name="newRobotEmail"]').value="";
       // this.state.robots.push({id: robots.length + 1, name:this.state.newRobotName, email:this.state.newRobotEmail})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
            <main className="text-center">
                <header className={"pt-3 position-relative " + (this.state.addToggler ? 'show' : 'hidden')}>
                    <h1 className="font-weight-light mt-2">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Card  id={robots.length+1} name={this.state.newRobotName} email={this.state.newRobotEmail}/>
                    <AddCard toggleClick={this.onToggleAppearence} toggleState={this.state.addToggler} addClick={this.onAddClick} robotName={this.handleInputChange}  robotEmail={this.handleInputChange}/>
                </header>
                <CardList robots={filteredRobots}/>
            </main>
        )

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