const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
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
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error("You can't weigh nothing!!!")
    }

    if (typeof weight !== 'number') {
      return new Error("THAT'S NOT A FUCKING NUMBER")
    }

    else if (weight > 300) {
      return new Error("That's some heavy-ass paper.")
    }

    else if (weight < 80) {
      return new Error("We don't sell tissue paper.")
    }
  }
}

module.exports = Product;
