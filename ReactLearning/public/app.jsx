var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Some h1</h1>
                <p>message</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form>
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

    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;

        this.setState({ name: this.refs.name.value });

        this.refs.name.value = ''
    },

    render: function () {
        var name = this.state.name
        var message = this.props.message
        return (
            <div>
                <GreeterMessage />

                <GreeterForm />
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter name="elijah" message="new message" />,
    document.getElementById('app')
);
