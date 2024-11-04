// main.js (updated)
// TODO: Import the filter, sort, and search managers here
import { filterTransactionsByType } from './features/filterManager.js';
import { searchTransactions } from './features/searchManager.js';
import { sortTransactions } from './features/sortManager.js';
import { addTransaction, getTransactions } from './data/dataManager.js';
import { renderTransactions } from './ui/uiManager.js';

document.getElementById('transaction-form').addEventListener('submit', event => {
    event.preventDefault();

    const amountInput = document.getElementById('amount-input');
    const categoryInput = document.getElementById('category-input');
    const typeInput = document.querySelector('input[name="transaction-type"]:checked');

    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value.trim();
    const type = typeInput.value;

    if (amount && category && type) {
        addTransaction({ amount, category, type });
        renderTransactions();

        // Reset form fields
        amountInput.value = '';
        categoryInput.value = '';
        typeInput.checked = false;
        amountInput.focus();
    }
});

// TODO: Add event listeners for search input, filter select, and sort select here

document.getElementById('search-input').addEventListener('input', renderTransactionsWithFilters);
document.getElementById('filter-select').addEventListener('input', renderTransactionsWithFilters);
document.getElementById('sort-select').addEventListener('input', renderTransactionsWithFilters);


// Hint: The renderTransactionsWithFilters function should apply the search, filter, and sort logic together.
// TODO: Implement renderTransactionsWithFilters function here
function renderTransactionsWithFilters() {

    let filter = document.getElementById('filter-select').value;
    let searchKeyword = document.getElementById('search-input').value.trim();
    let sortOption = document.getElementById('sort-select').value;
    let filteredTransactions = filterTransactionsByType(filter);
    filteredTransactions = searchTransactions(filteredTransactions, searchKeyword);
    filteredTransactions = sortTransactions(filteredTransactions, sortOption);
    renderTransactions(filteredTransactions);
    
}

renderTransactions(); // Initial render
