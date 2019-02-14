import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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
  handleChange = ({ target: {name, value} }) =>
    this.props.onTextFieldChange(name, value);

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          name="name"
          label="Concepto"
          className={classes.textField}
          value={this.props.name}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="date"
          label="Fecha"
          className={classes.textField}
          value={this.props.date}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="money_pen"
          label="Monto en soles"
          className={classes.textField}
          value={this.props.money_pen}
          onChange={this.handleChange}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          name="money_usd"
          label="Monto en dólares"
          className={classes.textField}
          value={this.props.money_usd}
          onChange={this.handleChange}
          fullWidth
          type="number"
          margin="normal"
        />
        <TextField
          name="type"
          select
          label="Tipo de gasto"
          className={classes.textField}
          value={this.props.type}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          fullWidth
          margin="normal"
        >
          {this.props.type_options.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="financing"
          select
          label="Modo de financiamiento"
          className={classes.textField}
          value={this.props.financing}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          fullWidth
          margin="normal"
        >
          {this.props.financing_options.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

export default withStyles(styles)(NewExpense);
