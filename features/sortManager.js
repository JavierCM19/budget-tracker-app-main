// sortManager.js
// Handles sorting transactions by category or amount.
// TODO: Implement the function to sort transactions based on the selected option (Category or Amount)
export function sortTransactions(transactions, sortOption) {
    // TODO: Sort transactions by the selected option (category or amount)
    // Hint: Use the sort() method, and consider comparing category strings alphabetically or amount numerically.
    if (sortOption === 'category') {
        return transactions.sort((a,b) => {
            const value1 = a.category.toLowerCase();
            const value2 = b.category.toLowerCase();
            if (value1 < value2) {
                return -1;
            }
            else if (value1 > value2) {
                return 1;
            }
            else{
                return 0;
            }
        });
    }
    else if (sortOption === 'amount') {
        return transactions.sort((a, b) => a.amount - b.amount);
    }
    return transactions;


}

/* The section "Sorting Tasks by Priority" in "Building Modular Apps with ES6" offers an example that can help you understand how to implement sorting. This logic can be adapted for sorting transactions by category or amount in the Budget Tracker app. */