var React = require('react');
var NavBar = require('./app-navbar');
var Carousel = require('./app-carousel');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<div> 
					<NavBar />
				</div>
				<div>
					<Carousel />
				</div>
			</div>
			
		);
	}
});

module.exports = App;