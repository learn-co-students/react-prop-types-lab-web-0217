const React = require('react')
class Product extends React.Component{
  render(){
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>Made by: {this.props.producer}</p>
        <p>Includes watermark?: {this.props.hasWatermark}</p>
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
    weight: (props,propName)=>{
      const weight = props[propName]

      if (props[propName]===undefined){
        return new Error(`invalid weight`)
      }

      if (typeof(weight)!="number") {
        return new Error('bad weight')
    }

     if (weight<80 || weight>300) {
      return new Error(`ungood weight`)//but here, ('bad weight') fails! why??????
    }

  },

  name:React.PropTypes.string.isRequired,
  producer:React.PropTypes.string,
  hasWatermark:React.PropTypes.bool,
  color:React.PropTypes.oneOf(["eggshell-white","white","salmon"]).isRequired,
}

module.exports = Product
