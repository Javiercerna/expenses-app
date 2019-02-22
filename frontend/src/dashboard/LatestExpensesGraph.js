import React, { Component } from 'react';

import Plotly from 'plotly.js-dist';


class LatestExpensesGraph extends Component {
  constructor() {
    super();
    this.state = {
      monthly_expenses: {}
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/expenses/')
    .then(results => {
      return results.json();
    }).then(data => {
      let monthly_expenses = {};
      data.results.forEach(expense => {
        let date = new Date(expense.date);
        let date_month = `${date.toLocaleString('en-us', { month: 'long' })} ${date.getUTCFullYear()}`;
        if (!(date_month in monthly_expenses)) {
          monthly_expenses[date_month] = 0;
        }
        monthly_expenses[date_month] += expense.money_pen;
      });
      this.setState({monthly_expenses: monthly_expenses});
      this.renderDataInGraph();
    });
  }

  renderDataInGraph = () => {
    let data = [
      {
        x: Object.keys(this.state.monthly_expenses),
        y: Object.values(this.state.monthly_expenses),
        mode: 'markers',
        type: 'scatter'
      }
    ];

    let layout = {
      title: 'Gastos de los últimos meses',
      plot_bgcolor: '#FBFBFB',
      paper_bgcolor: "#FBFBFB",
      bargap: 0.02
    };

    Plotly.newPlot(this.props.graph_name, data, layout);
  };

  render() {
    return (
      <div id={this.props.graph_name}></div>
    );
  }
}

export default LatestExpensesGraph;
