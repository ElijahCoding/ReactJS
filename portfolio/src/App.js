import React, { Component } from 'react'
import Projects from './Projects'

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
                <hr />
                <Projects />
            </div>
        )
    }
}

export default App
