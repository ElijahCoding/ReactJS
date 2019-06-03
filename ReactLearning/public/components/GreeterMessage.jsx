var React = require('react');

var GreeterMessage = React.createClass({
    var name = this.props.name;
    var message = this.props.message;
    
    render: function () {
        renturn (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;
