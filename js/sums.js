import finances from './index.js';

function count_months() {
    return finances.length
  }

function net_pnl() {
    var net_pnl = 0;
    for (var i = 0; i < finances.length; i++) {
        net_pnl += finances[i][1];
    }
    return net_pnl;
}

function average_change() {
    var average_change = 0;
    for (var i = 1; i < finances.length; i++) {
        average_change += (finances[i][1] - finances[i-1][1]);
    }

    const av = average_change / (finances.length - 1);
    return Number(av.toFixed(2));
}

function greatest_increase() { 
    var greatest_increase = 0;
    var greatest_increase_month = "";
    for (var i = 1; i < finances.length; i++) {
        if (finances[i][1] - finances[i-1][1] > greatest_increase) {
            greatest_increase = finances[i][1] - finances[i-1][1];
            greatest_increase_month = finances[i][0];
        }
    }
    return greatest_increase_month + ' ($' + greatest_increase + ')';
}

function greatest_decrease() { 
    var greatest_decrease = 0;
    var greatest_decrease_month = "";
    for (var i = 1; i < finances.length; i++) {
        if (finances[i][1] - finances[i-1][1] < greatest_decrease) {
            greatest_decrease = finances[i][1] - finances[i-1][1];
            greatest_decrease_month = finances[i][0];
        }
    }
    return greatest_decrease_month + ' ($' + greatest_decrease + ')';
}

export { count_months, net_pnl, average_change, greatest_increase, greatest_decrease };