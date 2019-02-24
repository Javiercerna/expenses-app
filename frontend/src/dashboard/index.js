import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import NewExpenseModal from './NewExpenseModal';
import ExpensesGraph from './ExpensesGraph';
import * as ExpensesFinancingGraph from './ExpensesFinancingGraph';
import * as ExpensesDistributionGraph from './ExpensesDistributionGraph';
import * as LatestExpensesGraph from './LatestExpensesGraph';
import ExpensesSummary from './ExpensesSummary';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 15
  },
});

class Dashboard extends Component {
  state = {
    modal_open: false
  };

  handleClickOpen = () => {
    this.setState({
      modal_open: true,
    });
  };

  handleClose = value => {
    this.setState({ modal_open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navbar />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
              Registrar nuevo pago
            </Button>
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <ExpensesGraph
                manageExpenseData={LatestExpensesGraph.manageExpenseData}
                formatDataForPlotly={LatestExpensesGraph.formatDataForPlotly}
                title="Gastos de los últimos meses"
                graph_name="latest_expenses"/>
              </Grid>
              <Grid item xs={4}>
                <ExpensesGraph
                manageExpenseData={ExpensesDistributionGraph.manageExpenseData}
                formatDataForPlotly={ExpensesDistributionGraph.formatDataForPlotly}
                title="Distribución de gastos"
                graph_name="expenses_distribution"/>
              </Grid>
              <Grid item xs={4}>
                <ExpensesGraph
                manageExpenseData={ExpensesFinancingGraph.manageExpenseData}
                formatDataForPlotly={ExpensesFinancingGraph.formatDataForPlotly}
                title="Modo de financiamiento"
                graph_name="expenses_financing"/>
              </Grid>
            </Grid>

            <NewExpenseModal open={this.state.modal_open} onClose={this.handleClose} />
            <ExpensesSummary />
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(Dashboard);
