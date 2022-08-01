import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Divider from '@mui/material/Divider';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function TransactionPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 const listItems = () => {
 props.transactionItems.map(item=>(<div key={item}> Name:{item.name} , ${item.price}, Qty :{item.qty} </div>)); 
}

const totalPrice=(a,b)=>{
  return a*b
}
  return (
    <div>

      <Button variant="outlined" onClick={()=>{handleClickOpen()}} startIcon={<MonetizationOnIcon color="primary" />} >
      Transactions
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} color="primary">
      <Typography variant="h4" color="primary" mt={4}>Transactions  </Typography>  
        </BootstrapDialogTitle>
        <DialogContent dividers>
     {/* {listItems} */}
     <Typography>
      
      {props.transactionItems.map((itemArray,index)=>{ 
        return <div><Divider/>
       
       {itemArray.map((item, index) =>(<Typography variant="body2" key={index}> {item.qty} x {item.name} = ${totalPrice(item.price, item.qty)}</Typography>))}
      </div> })
      }</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </div>
  );
}
