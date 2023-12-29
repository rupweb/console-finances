import { count_months, net_pnl, average_change, greatest_increase, greatest_decrease } from './sums.js';

document.addEventListener('DOMContentLoaded', () => {
    const resultsList = document.getElementById('resultsList'); // Get the list element

    // Results from your functions
    const results = [
        { name: 'Count Months:', value: count_months() },
        { name: 'Net PnL:', value: net_pnl() },
        { name: 'Average Change:', value: average_change() },
        { name: 'Greatest Increase:', value: greatest_increase() },
        { name: 'Greatest Decrease:', value: greatest_decrease() }
    ];

    // Creating list items for each result
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = `${result.name} ${result.value}`;
        resultsList.appendChild(listItem);
    });
});