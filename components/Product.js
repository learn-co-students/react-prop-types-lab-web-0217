import React from 'react'

class Product extends React.Component{
  render(){
    return (
      <div>
        <div className="product">
          <p>Name: {this.props.name}</p>
          {this.props.producer ? <small>{this.props.producer}</small> : null}
          <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
          <p>Weight: {this.props.weight}</p>
        </div>
      </div>
    )
  }
}

const validColors = ['white','eggshell-white','salmon']

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {

  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(validColors).isRequired,
  weight: (props, propName) => {
    const weight=props[propName]
    if (weight===undefined){
      return new Error("required")
    }
    if (isNaN(weight)){
      return new Error('The `weight` prop is not a number.')
    }
    const validWeight = 80 < weight && weight < 300
    if(!validWeight){
      return new Error("must be between 80-300")
    }
  }
}

// export default Product
module.exports = Product
