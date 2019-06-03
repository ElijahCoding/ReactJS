var React = require('react');
var ReactDom = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Elijah';

ReactDOM.render(
    <Greeter />,
    document.getElementById('app');
);
