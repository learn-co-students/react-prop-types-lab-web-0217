const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        {this.props.producer}
        <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, name) => {
  const weight = props[name];

  if (weight == undefined) {
    return new Error('Must enter weight');
  }

  if (isNaN(weight)) {
    return new Error('must be a number.');
  }

  const isValidWeight = weight > 80 && weight < 300;

  if (!isValidWeight) {
    return new Error('must be between 80 && 300');
  }
},
};

module.exports = Product;
