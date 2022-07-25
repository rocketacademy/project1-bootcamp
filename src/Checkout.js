import React from 'react'

export default class Checkout extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sum:0,
      checkoutShow:false,
      cashTotal:0,
      grabTotal:0,
      paynowTotal:0,
     
    }
  }

  // componentDidUpdate(_,prevState){
  //   if (this.state.cartItem!==prevState.cartItem){
  //     this.setState({
  //       sum: this.state.sum+=this.props.cartItem.price
  //     })
  //   }
  // }
  addTotalMoney = (e)=>{
if(e.target.value === "cash"){
 this.setState({cashTotal:this.state.cashTotal+this.props.totalPrice,
}) 
} else if(e.target.value === "paynow"){
 this.setState({paynowTotal:this.state.paynowTotal+this.props.totalPrice,
}) 
}
else if(e.target.value === "grab"){
 this.setState({grabTotal:this.state.grabTotal+this.props.totalPrice,
}) 
}
console.log(this.state.cashTotal,this.state.grabTotal,this.state.paynowTotal)
  }
  render(){
    return(
      <div>
<button onClick={(e)=>this.setState({checkoutShow:!this.state.checkoutShow})}>Checkout</button>

{this.state.checkoutShow ?<div><h5>Payment method:</h5>
<button value="cash" onClick={this.addTotalMoney}>Cash</button>
<button value= "paynow" onClick={this.addTotalMoney}>PayNow</button>
<button value="grab" onClick={this.addTotalMoney}>Grab</button> </div> : null }
<h3>Cash: {this.state.cashTotal},Grab: {this.state.grabTotal},PayNow: {this.state.paynowTotal}</h3>
</div>

    )
}

}