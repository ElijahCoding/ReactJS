import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from '../assets/profile.png'
import Title from './Title'
import Jokes from './Jokes'
import Header from './Header'

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
                <Header />
                <img src={profile} alt="" className="profile" />
                <p>
                    hi hi
                </p>
                <Title />
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
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App
