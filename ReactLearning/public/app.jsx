var Greeter = React.createClass({
    getDefaultProps: function () {
        return {}
    },

    render: function () {
        var name = this.props.name
        return (
            <div>
                <h1>Hello {name} !</h1>
                <p>This is form a component!</p>
            </div>
        );
    }
})

ReactDOM.render(
    <Greeter name="elijah" />,
    document.getElementById('app')
);
