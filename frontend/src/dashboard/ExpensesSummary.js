import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  card: {
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
  },
});

class ExpensesSummary extends Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/expenses/')
    .then(results => {
      return results.json();
    }).then(data => {
      data.results.forEach((expense, ind) => {
        expense.id = ind + 1;
      });
      this.setState({expenses: data.results});
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h3>Mis Gastos</h3>
        <Paper className={classes.card}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Concepto</TableCell>
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Monto en S/.</TableCell>
                <TableCell align="right">Monto en $</TableCell>
                <TableCell align="right">Tipo de gasto</TableCell>
                <TableCell align="right">Modo de financiamiento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.expenses.map(expense => (
                <TableRow key={expense.id}>
                  <TableCell component="th" scope="row">
                    {expense.name}
                  </TableCell>
                  <TableCell align="right">{expense.date}</TableCell>
                  <TableCell align="right">{expense.money_pen}</TableCell>
                  <TableCell align="right">{expense.money_usd}</TableCell>
                  <TableCell align="right">{expense.type}</TableCell>
                  <TableCell align="right">{expense.financing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ExpensesSummary);
