const React = require('react')


class Product extends React.Component {
	render() {
		return(
			<div className="product">
				<p>{this.props.name}</p>
				<p>{this.props.producer}</p>
				<p>{this.props.hasWatermark ? 'yes' : 'no'}</p>
				<p>{this.props.color}</p>
				<p>{this.props.weight}</p>
			</div>
		)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	 weight: function(props, propName) {
    if (props[propName] === undefined) {
      return new Error('Prop weight is required.')
    }
    if (isNaN(props[propName])) {
      return new Error('Weight must be a number')
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid weight, must be between 80 and 300');
		}
	}
}


module.exports = Product