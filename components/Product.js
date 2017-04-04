const React = require('react');

class Product extends React.Component {
  render() {
    return (
        <div className="product">
        <p>Name: {this.props.name}</p>
        <ul>
          <p>Details:</p>
            <li>{this.props.producer}</li>
            <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
            <li>{this.props.color}</li>
            <li>{this.props.weight}</li>
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
  weight: React.PropTypes.oneOf(['80...300']).isRequired
};

module.exports = Product;
