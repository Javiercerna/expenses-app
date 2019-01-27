import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import NewExpense from './NewExpense';

class NewExpenseModal extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle style={{display: 'flex', justifyContent: 'center'}}>Nuevo Pago</DialogTitle>
        <DialogContent>
          <NewExpense />
        </DialogContent>
        <DialogActions>
           <Button onClick={this.handleClose} color="primary">
             Cancelar
           </Button>
           <Button onClick={this.handleClose} color="primary" autoFocus>
             Registrar
           </Button>
         </DialogActions>
      </Dialog>
    );
  }
}

export default NewExpenseModal;
