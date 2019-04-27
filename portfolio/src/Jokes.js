import React, { Component } from 'react'

class Jokes extends Component {
    state = { joke: {}, jokes: [] }

    componentDidMount () {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message))
    }

    render () {
        const { setup, punchline } = this.state.joke
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
                <hr />
            </div>
        )
    }
}

export default Jokes
