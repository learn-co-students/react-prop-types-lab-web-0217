import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

let checkWeight = (props, propName, componentName) => {
  if(props[propName] === undefined){
    return new Error('weight is required')
  }else if(isNaN(props[propName])){
    return new Error('weight must be a number')
  }else if((props[propName] < 80) || (props[propName] > 300)){
    return new Error('weight should range between 80 and 300')
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}


module.exports = Product
