import React from 'react'
import { items } from './items'

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      item:this.props.item,
      addItemHandle:this.props.addItemHandle
    }
  }

  render(){
    return(
      <div>
<h5>{this.props.item.name}, ${this.props.item.price}</h5>
<p>{this.props.item.description}</p>
<button name={this.props.item.name} value={this.props.item} onClick={(e)=>this.props.addItemHandle(e)}>Add to Cart</button>
</div>

    )
}

}