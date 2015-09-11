var React = require('react');
var NavBar = require('./app-navbar');

var App = React.createClass({

	render: function() {
		return (
			<div> 
				<NavBar />
			</div>
		);
	}
});

module.exports = App;