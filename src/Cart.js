import React from 'react'
import { items } from './items'

export default class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cartItem:this.props.cartItem,
    }
  }

  render(){
    return(
      <div>
<h5>{this.props.cartItem.name}</h5>
</div>

    )
}

}