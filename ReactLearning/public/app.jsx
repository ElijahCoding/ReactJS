var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>message</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onButtonClick: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;

        if (name.length > 0) {
            this.props.onNewName(name);
            this.refs.name.value = '';
        }
    },

    render: function () {
        return (
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'default message'
        }
    },

    getInitialState: function () {
        return {
            name: this.props.name
        };
    },

    handleNewName: function (name) {
        this.setState({ name: name })
    },

    render: function () {
        var name = this.state.name
        var message = this.props.message
        return (
            <div>
                <GreeterMessage name={name} />

                <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter name="elijah" message="new message" />,
    document.getElementById('app')
);
