const React = require('react')

class Product extends React.Component {
  render () {
    return (
      <div className = "product">
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <p>Has Watermark: {this.props.hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
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
  weight: React.PropTypes.oneOf(range(80, 100)).isRequired
};

function range(start, edge, step) {
  if (arguments.length == 1) {
    edge = start;
    start = 0;
  }
 edge = edge || 0;
  step = step || 1;
   for (var ret = []; (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

module.exports = Product
