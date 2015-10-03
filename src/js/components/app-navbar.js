var React = require('react');

var AppNavBar = React.createClass({

	render: function() {
		return (
			<nav >
				<div >

					<div >
						<a href="#">
							<img src="../../assets/logo.png" style={{maxWidth:'50px', marginTop:'-9px'}} alt='MOPT' />
						</a>
					</div>
					<div >
						<ul >
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