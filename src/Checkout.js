import React from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { Typography , Button } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#f381a7',
    },
    secondary:{
      main:'#fce4ec'
    }
  },
});

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
    
<ThemeProvider theme={theme}>
  <div>
<Button color="secondary" mt={3} variant="contained" onClick={(e)=>{this.props.changePaymentMethodShow()}}>Checkout</Button>
{ this.props.paymentMethodShow ? <div> <Typography mt={5} variant="h6" color="primary">Payment method:</Typography>
<Button color="secondary" variant="contained"  value="cash" onClick={this.props.addTotalMoney}>Cash</Button>
<Button color="secondary" variant="contained" value= "paynow" onClick={this.props.addTotalMoney}>PayNow</Button>
<Button color="secondary" variant="contained" value="grab" onClick={this.props.addTotalMoney}>Grab</Button></div> : null }



</div>

</ThemeProvider>
    )
}

}