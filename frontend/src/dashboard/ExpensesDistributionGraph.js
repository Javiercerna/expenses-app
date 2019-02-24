const manageExpenseData = (expenses) => {
  let expenses_distribution = {};
  expenses.forEach(expense => {
    if (!(expense.type in expenses_distribution)) {
      expenses_distribution[expense.type] = 0;
    }
    expenses_distribution[expense.type] += expense.money_pen;
  });

  return {expenses_distribution: expenses_distribution}
};

const formatDataForPlotly = (state, title) => {
  let data = [
    {
      labels: Object.keys(state.expenses_distribution),
      values: Object.values(state.expenses_distribution),
      type: 'pie'
    }
  ];

  let layout = {
    title: title,
    plot_bgcolor: '#FBFBFB',
    paper_bgcolor: "#FBFBFB",
    bargap: 0.02
  };

  return {data: data, layout: layout};
};

export {manageExpenseData, formatDataForPlotly};
