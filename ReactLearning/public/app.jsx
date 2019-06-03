var React = require('react');
var ReactDom = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Elijah';

ReactDOM.render(
    <Greeter />,
    document.getElementById('app');
);
