import React from "react";
import logo from "./logo.png";
import "./App.css";
import {items} from "./items.js"
import Menu from "./Menu.js"
import Cart from "./Cart.js"
import Checkout from "./Checkout.js"

//const {name,price,description}=items;
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    cartItems:[],
    showCart:false,
    totalPrice:0
    }}

    // checkoutShow = (e)=>

    addItemHandle=(item)=>{
      if (this.state.cartItems.includes(item)){
        this.setState({ cartItems:[...this.state.cartItems],
item:item.qty+=1,
totalPrice:this.state.totalPrice+=item.price
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

    return (
      <div className="App">
<div className="Navbar">
  Navbar
  <button onClick={()=>{this.setState({showCart:!this.state.showCart})}}>Cart</button>
</div>


<div className="interface">

 <div className="item">
  {items.map(item=>(<Menu key={item.id} item={item} addItemHandle={this.addItemHandle}/>))};
</div>

{this.state.showCart ? <div className="cart">

{/*  Uncaught TypeError: Cannot read properties of null (reading 'cartItems') */}
{/* {this.state.cartItems} */}
  {this.state.cartItems.length===0 ? " Cart is empty" : this.state.cartItems.map(cartItem=>(<Cart key={cartItem.id} cartItem={cartItem}/>))  }
{/* {Object.keys(this.state.cartItems).map((keyName,i)=>(<Cart key={i} cartItem={this.state.cartItems[keyName]}/>))} */}
</div> : null}

</div>
<p>Total Price: ${this.state.totalPrice}</p>
<Checkout  totalPrice={this.state.totalPrice} />
</div>
        );
    } 
}

export default App;
