const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <h2>Producer: {this.props.producer}</h2>
        <h3>{this.props.hasWatermark}</h3>
        <h4>Color: {this.props.color}</h4>
        <h5>Weight: {this.props.weight}</h5>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const allowedColors = ['white', 'eggshell-white', 'salmon']

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(allowedColors).isRequired,
  weight: (props, propName) => {
    let weight = props[propName]
    if (weight === undefined)
      return new Error('Weight prop missing')
    if (isNaN(weight))
      return new Error('Why didnt this work while combined?')
    if (!(weight >= 80 && weight <= 300))
      return new Error('weight prop out of range [80, 300]')
  }
}

module.exports = Product
