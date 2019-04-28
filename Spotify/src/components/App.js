import React, { Component } from 'react'

class App extends Component {
    state = { artistQuery: '' }

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value })
    }

    searchArtist = () => {
        console.log(this.state.artistQuery);
    }

    render () {
        return (
            <div>
                <h2>Music Master</h2>
                <input
                        onChange={this.updateArtistQuery}
                        placeholder='Search for an Artist'
                        />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default App
