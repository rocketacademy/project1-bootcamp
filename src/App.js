import React from "react";
import logo from "./logo.png";
import "./App.css";
import {items} from "./items.js"
import Menu from "./Menu.js"
import Cart from "./Cart.js"
import Checkout from "./Checkout.js"
import { Typography , AppBar , Toolbar, Button } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import useStyles from './muistyles.js'
//const {name,price,description}=items;
import {ThemeProvider, createTheme} from '@mui/material/styles';

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
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    cartItems:[],
    showCart:false,
    showOverview:false,
    totalPrice:0,
     cashTotal:0,
      grabTotal:0,
      paynowTotal:0,
      paymentMethodShow:false,
  
    }}

changePaymentMethodShow = ()=>{
this.setState({
  paymentMethodShow:true
})}

 addTotalMoney = (e)=>{
if(e.target.value === "cash"){
 this.setState({cashTotal:this.state.cashTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false
}) 
} else if(e.target.value === "paynow"){
 this.setState({paynowTotal:this.state.paynowTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false
}) 
}
else if(e.target.value === "grab"){
 this.setState({grabTotal:this.state.grabTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false
}) 
}
console.log(this.state.cashTotal,this.state.grabTotal,this.state.paynowTotal)
  }

    addItemHandle=(item)=>{
      if (this.state.cartItems.includes(item)){
        this.setState({ cartItems:[...this.state.cartItems],
item:item.qty+=1,
totalPrice: this.state.totalPrice+=item.price,

        }) 
        console.log("qty+=1" , item)
      } else {
        this.setState({
           cartItems:[...this.state.cartItems,item],
item:item.qty=1,
totalPrice:this.state.totalPrice+=item.price
        }) 
        console.log("qty=1" , item)
      }
      // let {name} = e.target
      console.log("child to parent", item)
      //cannot push inside setstate
// this.setState({
//   cartItems:[...this.state.cartItems,item]
//   //[...this.state.cartItems,{ite }] // the whole object vs a single variable name {become object inside}
//   //cartItems:[...this.state.cartItems,{...e}] eveyr property become array
// })
console.log("cart items after setState:", this.state.cartItems)}
//() jsx
//{}functions
//for map 
  
  render() {
// const listItems = items.map(item=>(<div> <div key={item}>Name: {item.name}, ${item.price}</div>
// <button value={item} onClick={(e)=>this.handleSubmit(e)}>Add</button></div>))
    return (<ThemeProvider theme={theme}>
      <div className="App">

  <AppBar color="secondary" position="relative">
    <Toolbar sx={{ justifyContent: "space-between" }}>
    <div><span>
<Typography variant="h5"> POS System </Typography>
<LocalGroceryStoreIcon></LocalGroceryStoreIcon> </span>
</div>
 <div>
      <Button  edge="end" onClick={()=>{this.setState({showCart:!this.state.showCart})}} variant="outlined" startIcon={<LocalGroceryStoreIcon color="primary" />}>
 Cart
</Button>
<Button onClick={()=>{this.setState({showOverview:!this.state.showOverview})}} variant="outlined" startIcon={<LocalGroceryStoreIcon color="primary" />}>
Overview
</Button></div>
    {/* <button onClick={()=>{this.setState({showCart:!this.state.showCart})}}>Cart</button>
  <button onClick={()=>{this.setState({showOverview:!this.state.showOverview})}}>Overview</button></span> */}
    </Toolbar>
  </AppBar>

<div className="interface">

 <div className="item">
  {items.map(item=>(<Menu key={item.id} item={item} addItemHandle={this.addItemHandle}/>))};
</div>

{this.state.showCart ? <div className="cart">{this.state.cartItems.length===0 ? " Cart is empty" : this.state.cartItems.map(cartItem=>(<Cart key={cartItem.id} cartItem={cartItem}/>))  }
</div> : null}

</div>
<Typography color="primary" mt={5} variant="h5">Total Price: ${this.state.totalPrice}</Typography>

<Checkout addTotalMoney={this.addTotalMoney} paymentMethodShow={this.state.paymentMethodShow} changePaymentMethodShow={this.changePaymentMethodShow}/>
{this.state.showOverview ? <Typography>Overview<br></br>Cash: ${this.state.cashTotal}<br></br>Grab: ${this.state.grabTotal}<br></br>PayNow: ${this.state.paynowTotal}</Typography> 
: null}
</div>
 </ThemeProvider>
        );
    } 
}

export default App;
