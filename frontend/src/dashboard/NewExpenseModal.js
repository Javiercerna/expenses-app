import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import NewExpense from './NewExpense';

class NewExpenseModal extends Component {
  constructor(props) {
    super(props);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.state = {
      name: '',
      date: '',
      money_pen: 0,
      money_usd: 0,
      type: '',
      type_options: [],
      financing: '',
      financing_options: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/expense_types/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({type_options: data.results.map(option => option.name)});
    });

    fetch('http://127.0.0.1:8000/expense_financings/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({financing_options: data.results.map(option => option.name)});
    });
  }

  handleTextFieldChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
    this.resetState();
  };

  handleRegister = () => {
    fetch('http://127.0.0.1:8000/expenses/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    this.props.onClose(this.props.selectedValue);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      date: '',
      money_pen: 0,
      money_usd: 0,
      type: '',
      type_options: [],
      financing: '',
      financing_options: []
    });
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle style={{display: 'flex', justifyContent: 'center'}}>Nuevo Pago</DialogTitle>
        <DialogContent>
          <NewExpense
            name={this.state.name}
            date={this.state.date}
            money_pen={this.state.money_pen}
            money_usd={this.state.money_usd}
            type={this.state.type}
            type_options={this.state.type_options}
            financing={this.state.financing}
            financing_options={this.state.financing_options}
            onTextFieldChange={this.handleTextFieldChange} />
        </DialogContent>
        <DialogActions>
           <Button onClick={this.handleClose} color="primary">
             Cancelar
           </Button>
           <Button onClick={this.handleRegister} color="primary" autoFocus>
             Registrar
           </Button>
         </DialogActions>
      </Dialog>
    );
  }
}

export default NewExpenseModal;
