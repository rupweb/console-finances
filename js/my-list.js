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

    // For table with ID 'resultsTable'
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.classList.add('results-table-style'); // Add css styling

    // Create table rows for each result
    results.forEach(result => {
        const row = document.createElement('tr');

        // Create cell for name
        const nameCell = document.createElement('td');
        nameCell.textContent = result.name;

        // Create cell for value
        const valueCell = document.createElement('td');
        valueCell.textContent = result.value;

        // Append cells to row
        row.appendChild(nameCell);
        row.appendChild(valueCell);

        // Append row to table body
        tableBody.appendChild(row);
    });
});