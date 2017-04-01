const React = require('react')

class Product extends React.Component {
  render () {
    <div>
      <p>Name: {this.props.name}</p>
      <p>Producer: {this.props.producer}</p>
      <p>Watermark?: {this.props.hasWatermark}</p>
      <p>Color: {this.props.color}</p>
      <p>Weight: {this.props.weight}</p>

  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.string.isRequired,
  weight: React.PropTypes.number.isRequired,

}

module.export = Product;
