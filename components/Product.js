import React from 'react'
export default class Product extends React.Component{
  render() {
    return (
      <div className="product">

      <p>Name: {this.props.name}</p>
      <h2>Producer: {this.props.producer}</h2>
      <p>{this.props.hasWatermark}</p>
      <h3>{this.props.color} </h3>
      <p>Weight: {this.props.weight}</p>
      </div>
    );
  }


}

Product.defaultProps = {
  hasWatermark: false ,
};

Product.propTypes ={
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,

  weight: function(props, propName, Product){
    if (isNaN(props[propName])) {
      return new console.error('The `weight` prop is not a number.');
    }

    if(!(props[propName] >80 &&  props[propName]< 300)) {
      return new console.error('The `weight` prop should range between 80 and 300.');
    }
  },
}
