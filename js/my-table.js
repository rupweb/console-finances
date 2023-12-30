import { count_months, net_pnl, average_change, greatest_increase, greatest_decrease } from './sums.js';

document.addEventListener('DOMContentLoaded', () => {
    // Results from sums
    const results = [
        { name: 'Count Months:', value: count_months() },
        { name: 'Net PnL:', value: net_pnl() },
        { name: 'Average Change:', value: average_change() },
        { name: 'Greatest Increase:', value: greatest_increase() },
        { name: 'Greatest Decrease:', value: greatest_decrease() }
    ];

    // JS function to create & style table
    createTable(results);
});

// Function to create and insert the table
function createTable(dataArray) {
    // Create table elements
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-hover');

    const thead = document.createElement('thead');
    thead.classList.add('thead-dark');

    const tbody = document.createElement('tbody');

    // Create header
    const headerRow = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Description';
    const th2 = document.createElement('th');
    th2.textContent = 'Value';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    thead.appendChild(headerRow);

    // Create row for each name-value pair
    dataArray.forEach((item, index) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const valueCell = document.createElement('td');
        valueCell.textContent = item.value;

        // Apply specific color based on index
        if (index === 1 || index === 3) {
            valueCell.classList.add('text-green');
        } 
        
        if (index === 2 || index === 4) {
            valueCell.classList.add('text-red');
        }

        row.appendChild(nameCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    });

    // Append thead and tbody to table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Insert the table into the DOM
    document.getElementById('tableContainer').appendChild(table);
}
