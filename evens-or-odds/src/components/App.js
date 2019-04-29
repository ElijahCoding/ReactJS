import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGame, cancelGame } from '../actions/settings'

class App extends Component {
    startGame = () => {
        this.props.startGame()
    }

    render () {
        return (
            <div>
                <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <br />
                            <button>Cancle Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={this.startGame}>Start Game</button>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        settings: { gameStarted }
    } = state

    return { gameStarted }
}

const componentConnector = connect()

export default componentConnector(App)
