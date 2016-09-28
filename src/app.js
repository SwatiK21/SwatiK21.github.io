/*global React ReactDOM require */
/** @jsx React.DOM */
var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var h2 = React.DOM.h2
var h3 = React.DOM.h3
var nav = React.DOM.nav
var p = React.DOM.p
var ul = React.DOM.ul
var li = React.DOM.li
var footer = React.DOM.footer



var MyTitle = require('./MyTitle')
var MyFooter = require('./MyFooter')
//import MyTitle from './MyTitle'

var myTitleFact = React.createFactory(MyTitle)
var myFooterFact = React.createFactory(MyFooter)

var MyFirstComponent = (
	div(null,
		div(null,
			myTitleFact({color:'red',title:'props are working'}),
			myTitleFact({color:'purple',title:'wow, nice color'})
		),
		div(null,
			myFooterFact({color:'green',gitLink:'https://github.com/SwatiK21/'})
		)
	)
)	


ReactDOM.render(MyFirstComponent,document.getElementById('app'));