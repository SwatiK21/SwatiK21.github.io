var div = React.DOM.div
var h1 = React.DOM.h1
var p = React.DOM.p


var MyTitle = React.createClass({
	render(){
		return(
			div(null,
				h1({style:{color:this.props.color}},this.props.title)
			)
		)
	}
})



var MyFirstComponent = (
	div(null,
		React.createElement(MyTitle,{color:'red',title:'props are working'}),
		React.createElement(MyTitle,{color:'purple',title:'wow, nice color'})
	)
)


ReactDOM.render(MyFirstComponent,document.getElementById('app'));