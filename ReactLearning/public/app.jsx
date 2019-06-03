var Greeter = React.createClass({
    getDefaultProps: function () {
        return {}
    },

    onButtonClick: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;
        alert(name);
    },

    render: function () {
        var name = this.props.name
        return (
            <div>
                <h1>Hello {name} !</h1>
                <p>This is form a component!</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter name="elijah" />,
    document.getElementById('app')
);
