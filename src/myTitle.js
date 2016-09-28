var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var h1 = React.DOM.h1
var p = React.DOM.p
var h2 = React.DOM.h2
var h3 = React.DOM.h3
var nav = React.DOM.nav
var p = React.DOM.p
var ul = React.DOM.ul
var li = React.DOM.li
var footer = React.DOM.footer


var MyTitle = React.createClass({
	render(){
		return(
			div(null,
				h1({style:{color:this.props.color}},this.props.title)
			)
		)
	}
})


module.exports = MyTitle