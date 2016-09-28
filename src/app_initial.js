/*global React ReactDOM require */
/** @jsx React.DOM */
var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div

var MyTitle = require('./MyTitle')
//import MyTitle from './MyTitle'

var myTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
	div(null,
		myTitleFact({color:'red',title:'props are working'}),
		myTitleFact({color:'purple',title:'wow, nice color'})
	)
)


ReactDOM.render(MyFirstComponent,document.getElementById('app'));