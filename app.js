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

var myTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
	div(null,
		myTitleFact({color:'red',title:'props are working'}),
		myTitleFact({color:'purple',title:'wow, nice color'})
	)
)


ReactDOM.render(MyFirstComponent,document.getElementById('app'));