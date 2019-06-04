var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        }
    },

    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 23
        })
    },

    render: function () {
        var { location, temp } = this.state;

        return (
            <div>
                <p>Weather</p>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    }
});

module.exports = Weather;
