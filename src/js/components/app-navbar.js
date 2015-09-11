var React = require('react');

var AppNavBar = React.createClass({

	render: function() {
		return (
			<nav className="navbar-inverse navbar-default navbar-fixed-top">
				<div className="container">

					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							<img src="../../assets/logo.png" style={{maxWidth:'100px', marginTop:'-9px'}} alt='MOPT' />
						</a>
					</div>
				

					<div className="collapse navbar-collapse flex-list">
						<ul className="nav navbar-nav">
							<li><a href="#">About Us</a></li>
							<li><a href="#">AlterG</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Staff</a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Locations</a></li>
						</ul>
					</div>

				</div>
			</nav>
		);
	}

});

module.exports = AppNavBar;