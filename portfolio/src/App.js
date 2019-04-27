import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'

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
                <img src={profile} className="profile" />
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
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App
