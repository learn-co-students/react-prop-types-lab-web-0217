// import React from 'react';
const React = require('react')

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <h2>Speed: {this.props.producer}</h2>
        <h2>Color: {this.props.color}</h2>
        <h2>hasRockets: {this.props.hasWatermark ? 'yes' : 'no'}</h2>
        <h2>weight: {this.props.weight}</h2>
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
  weight: (props, propName) => {
    let value = props[propName]

    if (value === undefined) {
      return new Error(
        'undefined')
    }

    if (isNaN(value)) {
      return new Error(
        'NaN')
    }

    if (value < 80 || value > 300) {
      return new Error(
        "Invalid prop"
      )
    }
  }
};

module.exports = Product
