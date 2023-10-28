function convertTransactions(transactions, exchangeRate) {
    // Use the map() method to convert each transaction amount
    const convertedTransactions = transactions.map(transaction => {
      const convertedAmount = transaction.amount * exchangeRate;
      return {
        ...transaction,
        amount: convertedAmount,
        currency: 'USD' // Converted to USD for simplicity
      };
    });
    return convertedTransactions;
  }
  
  // Example usage:
  const transactionsArray = [
    { amount: 100, currency: 'EUR' },
    { amount: 50, currency: 'GBP' },
    { amount: 200, currency: 'EUR' }
  ];
  
  const exchangeRateEURtoUSD = 1.2; // Assume an exchange rate for EUR to USD
  
  const transactionsInUSD = convertTransactions(transactionsArray, exchangeRateEURtoUSD);
  console.log('Original transactions:', transactionsArray);
  console.log('Transactions in USD:', transactionsInUSD);
  