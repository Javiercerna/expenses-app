import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class NewExpense extends Component {
  state = {
    name: '',
    date: '',
    money_pen: 0,
    money_usd: 0,
    type: '',
    financing: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Concepto"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="date"
          label="Fecha"
          className={classes.textField}
          value={this.state.date}
          onChange={this.handleChange('date')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="money_pen"
          label="Monto en soles"
          className={classes.textField}
          value={this.state.money_pen}
          onChange={this.handleChange('money_pen')}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          id="money_usd"
          label="Monto en dólares"
          className={classes.textField}
          value={this.state.money_usd}
          onChange={this.handleChange('money_usd')}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          id="type"
          label="Tipo de gasto"
          className={classes.textField}
          value={this.state.type}
          onChange={this.handleChange('type')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="financing"
          label="Modo de financiamiento"
          className={classes.textField}
          value={this.state.financing}
          onChange={this.handleChange('financing')}
          fullWidth
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(NewExpense);
