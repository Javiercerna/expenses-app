const manageExpenseData = (expenses) => {
  let monthly_expenses = {};
  expenses.forEach(expense => {
    let date = new Date(expense.date);
    let date_month = `${date.toLocaleString('en-us', { month: 'long' })} ${date.getUTCFullYear()}`;
    if (!(date_month in monthly_expenses)) {
      monthly_expenses[date_month] = 0;
    }
    monthly_expenses[date_month] += expense.money_pen;
  });

  return {monthly_expenses: monthly_expenses};
};

const formatDataForPlotly = (state, title) => {
  let data = [
    {
      x: Object.keys(state.monthly_expenses),
      y: Object.values(state.monthly_expenses),
      mode: 'markers',
      type: 'scatter'
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
