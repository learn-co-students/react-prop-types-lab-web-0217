import React from 'react';

export default class Product extends React.Component {
	render(){
		return (
	        <ul>
	          <li>{this.props.name}</li>
	          <li>{this.props.producer}</li>
	          <li>{this.props.color}</li>
	          <li>{this.props.weight}.</li>
	        </ul>

		);
	}
}

Product.defaultProps= {
	hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool, 
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};
