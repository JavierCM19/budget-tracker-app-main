// filterManager.js
// Handles filtering transactions based on the selected type (Income or Expense).
// TODO: Import dataManager.js
import { getTransactions } from "../data/dataManager.js";

// TODO: Implement the function to filter transactions based on the selected type
export function filterTransactionsByType(type) {
    // TODO: Return transactions filtered by type (Income or Expense)
    // Hint: Use the filter() method filter transactions based on the selected type
    if (type === 'all') {
        return getTransactions(); 
    }
    
    return getTransactions().filter(transaction => transaction.type.toLowerCase() === type);
}

/* Check the section "Filtering by Transaction Type" in the article "Building Modular Apps with ES6" for detailed guidance on setting up filtering functionality using a modular approach. */