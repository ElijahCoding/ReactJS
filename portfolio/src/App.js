import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            displayBio: false
        }

    }

    toggle = () => {
        this.setState({ displayBio: !this.state.displayBio });
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
                            
                        </div>
                    )
                }
                <div>
                    <button onClick={this.toggle}>Toggle</button>
                </div>
            </div>
        )
    }
}

export default App
