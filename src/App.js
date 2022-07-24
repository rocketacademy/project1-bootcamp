import React from "react";
import logo from "./logo.png";
import "./App.css";
import {items} from "./items.js"
import Menu from "./Menu.js"
import Cart from "./Cart.js"

//const {name,price,description}=items;
class App extends React.Component {
  constructor(props){
    super(props)
    this.State={
    cartItems:[]
    }}

    addItemHandle=(e)=>{
      // let {name} = e.target
      console.log("child to parent", {...e.target.value})
this.setState({
  cartItems:[...this.state.cartItems,e.target.value]
  //[...this.state.cartItems,{name}]
  //cartItems:[...this.state.cartItems,{...e}]
})
console.log("cart items after setState:", this.state.cartItems)}

  
  render() {
// const listItems = items.map(item=>{return <div> <div key={item}>Name: {item.name}, ${item.price}</div>
// <button value={item.name} onClick={(e)=>this.handleSubmit(e)}>Add</button></div>})

    return (
      <div className="App">
<div className="Navbar">
  Navbar
</div>
<div className="interface">
 <div className="item">
  {items.map(item=>(<Menu key={item.id} item={item} addItemHandle={this.addItemHandle}/>))};
 </div>
<div className="cart">
Cart
{/* {this.state.cartItems} */}
  {/* {this.state.cartItems ? this.state.cartItems.map(cartItem=>(<Cart key={cartItem.id} cartItem={cartItem}/>)) : "empty" } */}
{/* {Object.keys(this.state.cartItems).map((keyName,i)=>(<Cart key={i} cartItem={this.state.cartItems[keyName]}/>))} */}
</div>
</div>
</div>
        );
    } 
}

export default App;
