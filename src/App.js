import React from "react";
import logo from "./logo.png";
import "./App.css";
import {items} from "./items.js"
import OverviewPopup from "./OverviewPopup.js"
import TransactionPopup from "./TransactionPopup.js"
import Menu from "./Menu.js"
import Cart from "./Cart.js"
import Checkout from "./Checkout.js"
import { Typography , AppBar , Toolbar, Button, Alert, ButtonGroup} from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import useStyles from './muistyles.js'
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
    showCart:true,
    showOverview:false,
    totalPrice:0,
     cashTotal:0,
      grabTotal:0,
      paynowTotal:0,
      paymentMethodShow:false,
      addEnable:true,
      displayMsg:"",
      displayMsgShow:false,
      transactionItems:[],
      paymentMethod:[]
  
    }}

changePaymentMethodShow = ()=>{
  // let divider = "--------"
  // let transaction = [...this.state.cartItems]
//button checkout is here 
console.log(this.state.cartItems)
this.setState({
  addEnable:false,
  paymentMethodShow:true,
  transactionItems:[this.state.cartItems, ...this.state.transactionItems]
//an array of items , embedded array
})}


 addTotalMoney = (e)=>{
  
  
  // let data= this.state.cartItems;

if(e.target.value === "cash"){
 this.setState(
  
  {cashTotal:this.state.cashTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false,
        displayMsgShow:true,
        displayMsg:"You have successfully checked out!",
        addEnable:true,
        paymentMethod:[this.state.paymentMethod, e.target.value]
        
}) 
} else if(e.target.value === "paynow"){
 this.setState({paynowTotal:this.state.paynowTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false,
         displayMsgShow:true,
        displayMsg:"You have successfully checked out!",
         addEnable:true,
         paymentMethod:[...this.state.paymentMethod,e.target.value]
}) 
}
else if(e.target.value === "grab"){
 this.setState({grabTotal:this.state.grabTotal+this.state.totalPrice,
   cartItems:[],
        totalPrice:0,
        paymentMethodShow:false,
         displayMsgShow:true,
        displayMsg:"You have successfully checked out!",
         addEnable:true,
         paymentMethod:[...this.state.paymentMethod,e.target.value]
}) }
console.log(this.state.paymentMethod, this.state.totalPrice)
}

removeItemHandle =(item)=>{
  if (item.qty===1){
     this.setState({ cartItems:[...this.state.cartItems].filter(x=> x.id!==item.id),
item:item.qty=0,
totalPrice: this.state.totalPrice-=item.price,
        }) 
  }
  else if (this.state.cartItems.includes(item)){
        this.setState({
item:item.qty-=1,
totalPrice: this.state.totalPrice-=item.price,

        }) 
        console.log("qty+=1" , item)
      } 
console.log("cart items after remove:", this.state.cartItems)}

    addItemHandle=(item)=>{
      this.setState({
        displayMsgShow:false
      })

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

changeShowOverview = ()=>{
  this.setState({
    showOverview:!this.state.showOverview
  })
}
  
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
  <ButtonGroup disableElevation>
  <Button   onClick={()=>{this.setState({showCart:!this.state.showCart})}} variant="outlined" startIcon={<LocalGroceryStoreIcon color="primary" />}>Cart</Button> 
<OverviewPopup cashTotal={this.state.cashTotal} grabTotal={this.state.grabTotal} paynowTotal={this.state.paynowTotal} changeShowOverview={this.changeShowOverview} showOverview={this.state.showOverview} />
<TransactionPopup transactionItems={this.state.transactionItems} paymentMethod={this.state.paymentMethod} totalPrice={this.state.totalPrice}/>
</ButtonGroup></div>
    {/* <button onClick={()=>{this.setState({showCart:!this.state.showCart})}}>Cart</button>
  <button onClick={()=>{this.setState({showOverview:!this.state.showOverview})}}>Overview</button></span> */}
    </Toolbar>
  </AppBar>

<Grid container spacing={2} mt={4}>

  <Grid item xs={8} >
<Paper elevation={5}>
    <Grid container display="flex"
  direction="row"
  justifyContent="space-evenly"
  alignItems="centre" spacing ={2}>
     
  {items.map(item=>(<Menu key={item.id} item={item} addItemHandle={this.addItemHandle} addEnable={this.state.addEnable}/>))}

</Grid>
</Paper>
  </Grid>

  <Grid item xs={4}>

<Grid container spacing={2} mt={1} justifyContent="space-evenly">
  <Grid item xs={12}>
<div>
    {this.state.showCart ? <div> {this.state.cartItems.length===0 ? " Cart is empty" : 
 <TableContainer>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell color="primary" >Name</TableCell>
            <TableCell align="center" color="primary" >Price</TableCell>
            <TableCell align="center" color="primary" >Quantity</TableCell>
            <TableCell align="center" color="primary" >Add</TableCell>
            <TableCell align="center" color="primary" >Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.cartItems.map((cartItem) => (
            <TableRow
              key={cartItem.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {cartItem.name}
              </TableCell>
              <TableCell align="center">{cartItem.price}</TableCell>
              <TableCell align="center">{cartItem.qty}</TableCell>
              <TableCell align="center"><Button color="primary" size="small" variant="outlined" name={cartItem.name} onClick={(e)=>{this.addItemHandle(cartItem)}} disabled={!this.state.addEnable} >Add</Button></TableCell>
              <TableCell align="center"><Button color="primary" size="small" variant="outlined" name={cartItem.name} onClick={(e)=>{this.removeItemHandle(cartItem)}} disabled={!this.state.addEnable} >Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
     <Typography color="primary" mt={5} variant="h5">Total Price: ${this.state.totalPrice}</Typography>
     { this.state.totalPrice>0 ? <Checkout addTotalMoney={this.addTotalMoney} paymentMethodShow={this.state.paymentMethodShow} changePaymentMethodShow={this.changePaymentMethodShow} /> 
     : null } 

     { this.state.displayMsgShow ? <Alert severity="success" color="primary" mt={3}>{this.state.displayMsg}</Alert> : null}
     </div>

: null} </div>
</Grid>
</Grid>


  </Grid>

</Grid>


{/* {items.map(item=>(<Menu key={item.id} item={item} addItemHandle={this.addItemHandle}/>))} */}
{/* {this.state.showCart ? <div className="cart">{this.state.cartItems.length===0 ? " Cart is empty" : 
this.state.cartItems.map(cartItem=>(<Cart key={cartItem.id} cartItem={cartItem}/>))  }
</div> : null} */}

{/* mui styling for table */}
{/* {this.state.showCart ? <div> {this.state.cartItems.length===0 ? " Cart is empty" : 
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell color="primary" >Name</TableCell>
            <TableCell align="right" color="primary" >Price</TableCell>
            <TableCell align="right" color="primary" >Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.cartItems.map((cartItem) => (
            <TableRow
              key={cartItem.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {cartItem.name}
              </TableCell>
              <TableCell align="right">{cartItem.price}</TableCell>
              <TableCell align="right">{cartItem.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> }
    </div>
: null}  */}



<div>
<Typography color="primary" mt={5} variant="h5">Total Price: ${this.state.totalPrice}</Typography>


</div>

</div>
 </ThemeProvider>
        );
    } 
}

export default App;
