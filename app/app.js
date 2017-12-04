// Include Main React dependencies

var React = require('react');
var ReactDOM = require('react-dom');


// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');


// Include React components

var Main = require('./Components/main.js');


ReactDOM.render(

	<div className ='main-container'>

		<Main />

	</div>,
	document.getElementByID('app')
)