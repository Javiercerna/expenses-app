import React, { Component } from 'react';

import Plotly from 'plotly.js-dist';

class ExpensesGraph extends Component {
  componentDidMount() {
    fetch('http://127.0.0.1:8000/expenses/')
    .then(results => {
      return results.json();
    }).then(data => {
      let expense_results = this.props.manageExpenseData(data.results);
      this.setState(expense_results);
      this.renderDataInGraph();
    });
  }

  renderDataInGraph = () => {
    let plotly_args = this.props.formatDataForPlotly(this.state, this.props.title);
    Plotly.newPlot(this.props.graph_name, plotly_args.data, plotly_args.layout);
  };

  render() {
    return (
      <div id={this.props.graph_name}></div>
    );
  }
}

export default ExpensesGraph;
