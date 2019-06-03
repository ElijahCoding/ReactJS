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

        var name = this.refs.name.value;
        this.setState({ name: this.refs.name.value })
    },

    render: function () {
        var name = this.state.name
        var message = this.props.message
        return (
            <div>
                <h1>Hello {name} !</h1>
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter name="elijah" message="new message" />,
    document.getElementById('app')
);
