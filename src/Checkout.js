import React from 'react'

export default class Checkout extends React.Component{
  constructor(props){
    super(props)
    this.state={
      checkoutShow:false,
      paymentMethodShow:this.props.paymentMethodShow
     
     
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

<button onClick={(e)=>{
  this.props.changePaymentMethodShow()
  
}}>Checkout</button>

{ this.props.paymentMethodShow ? <div><h5>Payment method:</h5>
<button value="cash" onClick={this.props.addTotalMoney}>Cash</button>
<button value= "paynow" onClick={this.props.addTotalMoney}>PayNow</button>
<button value="grab" onClick={this.props.addTotalMoney}>Grab</button> </div> : null }
 <div>
</div> 
</div>

    )
}

}