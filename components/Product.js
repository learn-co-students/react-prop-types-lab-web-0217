const React = require('react');

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark?: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: React.PropTypes.oneOf(['white', 'salmon', 'eggshell-white']).isRequired,
  weight: (props, name) => {
    const weight = props[name]
    if (weight == undefined) new Error ('Enter weight')
    if (isNan(weight)) new Error ('Enter weight')
    if (weight < 80 || weight > 300) new Error ('80 - 300 only')
  }

}

module.exports = Product;
