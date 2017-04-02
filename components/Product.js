const React = require('react');

class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<p>{this.props.name}</p>
				<p>{this.props.producer}</p>
				<p>{this.props.hasWatermark}</p>
				<p>{this.props.weight}</p>
			</div>
		);
	}
};

Product.defaultProps = {
	hasWatermark: false,
};

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName) {
		if (props[propName] === undefined) {
			return new Error('Weight is required');
		} else if (isNaN(props[propName])) {
			return new Error('Weight needs to be a number');
		} else if (!(props[propName] > 80 && props[propName] < 300)) {
	      	return new Error('Weight needs to be greater than 80 and less than 300');
	    }
  	},
};

module.exports = Product;