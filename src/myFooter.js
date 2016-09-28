var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var footer = React.DOM.footer
var h3 = React.DOM.h3
var a = React.DOM.a

var MyFooter = React.createClass({
	render(){
		return(
			div(null,
				//h3({style:{color:this.props.color}},this.props.text))
				a({style:{color:this.props.color}},this.props.gitLink)
			)
		)
	}
})
    
module.exports = MyFooter