import React from 'react'
import ReactDom from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App'
import Jokes from './components/Jokes'
import Header from './components/Header'
import './index.css'

const history = createBrowserHistory()

ReactDom.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={() => <Header><App /></Header>} />
            <Route exact path="/jokes" render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
)
