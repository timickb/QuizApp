import React, { Component } from 'react';
import './css/Game.css';
import tasks from './tasks.js';

const WRONG_ANSWER_FINE = 3;
const WRONG_ANSWER_TEXT = "Неверный ответ";
const EMPTY_STRING = '';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: 0,
            time: 600,
            score: 0,
            team: this.props.items,
            answer: EMPTY_STRING,
            isRight: EMPTY_STRING
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let answer = event.target.answer.value;
        if(answer === tasks[this.state.task].answer) {
            this.setState({score: this.state.score + tasks[this.state.task].points});
            this.setState({task: this.state.task+1});
            this.setState({isRight: EMPTY_STRING});
        } else {
            this.setState({isRight: WRONG_ANSWER_TEXT});
            this.setState({score: this.state.score - WRONG_ANSWER_FINE});
        }
        this.setState({answer:  EMPTY_STRING});
    }

    handleFieldChange(event) {
        this.setState({answer: event.target.value});
    }

    render() {
        return (
            <div className="game">
                <h3>Команда: {this.state.team}<br />баллы: {this.state.score}</h3>
                <h1>Задание {this.state.task + 1}</h1>
                <p>{tasks[this.state.task].question}</p>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="answer"
                        className="field"
                        value={this.state.answer}
                        placeholder="Ваш ответ"
                        onChange={this.handleFieldChange}
                    />
                    <button className="button">Ввод</button>
                </form>
                <p className="wrong">{this.state.isRight}</p>
            </div>
        );
    }
}

export default Game;