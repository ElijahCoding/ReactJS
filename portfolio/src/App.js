import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            displayBio: false
        }

    }

    readMore = () => {
        this.setState({ displayBio: true });
    }

    render () {
        return (
            <div>
                <p>
                    hi hi
                </p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>
                                bio
                            </p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.readMore}>Read more</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App
