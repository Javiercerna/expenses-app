import React, { Component } from 'react';

import Plotly from 'plotly.js-dist';


class ExpensesFinancingGraph extends Component {
  constructor() {
    super();
    this.state = {
      own_expenses: 0,
      other_expenses: 0
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/expenses/')
    .then(results => {
      return results.json();
    }).then(data => {
      let own_expenses = 0;
      let other_expenses = 0;
      data.results.forEach(expense => {
        if (expense.financing === 'Propio') {
          own_expenses += expense.money_pen;
        } else if (expense.financing === 'Prestado') {
          other_expenses += expense.money_pen;
        }
      });
      this.setState({
        own_expenses: own_expenses,
        other_expenses: other_expenses
      });
      this.renderDataInGraph();
    });
  }

  renderDataInGraph = () => {
    let data = [
      {
        x: ['Personal', 'Prestado'],
        y: [this.state.own_expenses, this.state.other_expenses],
        marker: {
          color: ['rgba(0,153,102,1)', 'rgba(255,222,51,1)']
        },
        type: 'bar'
      }
    ];

    let layout = {
      title: 'Modo de financiamiento',
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

export default ExpensesFinancingGraph;
