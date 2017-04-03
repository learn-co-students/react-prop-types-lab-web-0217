let React = require('react')

class Product extends React.Component {
  render(){
    return (
        <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.color}</li>
        </ul>
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
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  hasWatermark: React.PropTypes.bool,
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
