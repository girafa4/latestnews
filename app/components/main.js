// Include React
var React = require('react');

var Main = React.createClass({

	render: function() {

		return(
			<div className = 'main-container'>
				<div className = 'row'>
					<div className = 'jumbotron'>
						<h1>React NYT Scrubber</h1>
					</div>
				</div>
				<div className = 'row'>
					<Search />
				</div>
				<div className = 'row'>
					<Saved />
				</div>
			</div>)

	}
})