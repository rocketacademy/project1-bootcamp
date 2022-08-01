import React from 'react'
import { items } from './items'
import { Typography , Button , Grid } from '@mui/material';
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
     
       <ThemeProvider theme={theme}>
         <Grid item xs={4} mb={3}>
   
    <img className="img" alt={this.props.item.name} src={this.props.item.image}/>
  <Typography variant="h6">{this.props.item.name}, ${this.props.item.price}</Typography>
<Typography variant="subtitle1"> {this.props.item.description}</Typography>
<Button color="primary" size="small" disabled={!this.props.addEnable} variant="outlined" name={this.props.item} onClick={(e)=>{this.props.addItemHandle(this.props.item)}} mb={2}>Add</Button>

</Grid>
</ThemeProvider>

// {/* <button name={this.props.item} onClick={(e)=>{this.props.addItemHandle(this.props.item)}}>Add to Cart</button> */}

    )
}

}