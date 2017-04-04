import React from 'react'

class Product extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (prop, propType) => {
    const weight = prop[propType]
    if(weight === undefined) return new Error('el stupido')//spanish
    if(typeof (weight) != 'number') return new Error('bete')//french
    if(weight < 80 || weight > 300) return new Error('stupid')//english
   }
}

export default Product
