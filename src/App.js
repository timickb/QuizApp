import React, { Component } from 'react';
import './css/App.css';
import Game from './Game';

class App extends Component {
    constructor() {
        super();
        this.state = {activity: 0, teamName: ''};
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({activity: 1});
    }

    handleFieldChange(event) {
        console.log('team name was changed', this);
        this.setState({teamName: event.target.value});
    }

    render() {
        if(this.state.activity == 0) {
            return (
                <div className="login">
                    <h1 className="header">Регистрация команды</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="teamName"
                            className="field"
                            placeholder="Введите название команды"
                            value={this.state.teamName}
                            onChange={this.handleFieldChange}
                        />
                        <button className="button">Старт</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="game">
                    <Game items={this.state.teamName}/>
                </div>
            );
        }
    }
}

export default App;