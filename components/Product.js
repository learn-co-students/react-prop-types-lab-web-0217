import React from 'react'
// const React = require('react')
// which to use?
class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        {this.props.producer ? <p>{this.props.producer}</p> : null}
        <p>Watermarked: {this.props.hasWatermark}</p>
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
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (props[propName] === undefined) {
      return new Error(`Weight can't be undefined`)
    } else if (props[propName] === undefined || typeof props[propName] !== "number") {
      return new Error('Weight is not a number. Validation failed.')
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error ("Weight is not in correct range.")
    }
  },
}

module.exports = Product
