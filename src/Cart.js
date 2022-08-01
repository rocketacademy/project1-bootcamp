import React from 'react'
import { items } from './items'
import { Grid } from '@mui/material'

export default class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cartItem:this.props.cartItem
    }
  }

  // componentDidUpdate(_,prevState){
  //   if (this.state.cartItem!==prevState.cartItem){
  //     this.setState({
  //       sum: this.state.sum+=this.props.cartItem.price
  //     })
  //   }
  // }
  render(){
    return(
      <div>
          

  <Grid item xs={4}>
    {this.props.cartItem.name}
  </Grid>
  
  <Grid item xs={4}>
  ${this.props.cartItem.price}
  </Grid>
  
    <Grid item xs={4}>
  {this.props.cartItem.qty}
  </Grid>



{/* <h5>  {this.props.cartItem.qty}</h5> */}
{/* <h6>TotalPrice: {this.state.sum} </h6> */}
</div>

    )
}

}