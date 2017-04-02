import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

var weightLimit = Array.from(new Array(300-80), (x,y) => y+80)

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(weightLimit).isRequired
}

Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product
