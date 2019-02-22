const manageExpenseData = (expenses) => {
  let own_expenses = 0;
  let other_expenses = 0;
  expenses.forEach(expense => {
    if (expense.financing === 'Propio') {
      own_expenses += expense.money_pen;
    } else if (expense.financing === 'Prestado') {
      other_expenses += expense.money_pen;
    }
  });

  return {own_expenses: own_expenses, other_expenses: other_expenses};
};

const formatDataForPlotly = (state, title) => {
  let data = [
    {
      x: ['Personal', 'Prestado'],
      y: [state.own_expenses, state.other_expenses],
      marker: {
        color: ['rgba(0,153,102,1)', 'rgba(255,222,51,1)']
      },
      type: 'bar'
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
