const errorField = document.getElementById('error-message');

function getInputInNmuber(inputId) {
    const input = document.getElementById(inputId);
    const inputInText = input.value;
    const inputAmount = parseFloat(inputInText);
    return inputAmount;
}

function getBalanceAfterDeduction(income, expense) {
    let balanceAfterDeduction = income - expense;
    return balanceAfterDeduction;
}

// calculation of first event of income and expenses 

document.getElementById('calculate-button').addEventListener('click', function () {
    // getting amount of income
    const totalIncomeAmount = getInputInNmuber('income');
    // getting sum of foods,rental and cloth costs
    const foodsCost = getInputInNmuber('foods-cost')
    const rentalCost = getInputInNmuber('rent-cost');
    const clothsCost = getInputInNmuber('cloths-cost');

    if (totalIncomeAmount < 0 || foodsCost < 0 || rentalCost < 0 || clothsCost < 0) {
        errorField.style.visibility = 'visible';
        errorField.innerText = "***Cannot input negative number***";
        return;
    } else if (isNaN(totalIncomeAmount) || isNaN(foodsCost) || isNaN(rentalCost) || isNaN(clothsCost)) {
        errorField.style.visibility = 'visible';
        errorField.innerText = "***Text are not allowed***";
        return;
    }

    // sum-up all expenses
    const totalExpenses = foodsCost + rentalCost + clothsCost;

    // dedcting total expenses from total income using function

    if (totalIncomeAmount < totalExpenses) {
        errorField.style.visibility = 'visible';
        errorField.innerText = "***Expense is more than your income***";
        return;
    } else {
        const totalBalance = getBalanceAfterDeduction(totalIncomeAmount, totalExpenses)
        const balanceField = document.getElementById('balance');
        balanceField.innerText = totalBalance;
        const totalExpenseField = document.getElementById('total-expenses');
        totalExpenseField.innerText = totalExpenses;
    }
});

// calculation of second event of savings

document.getElementById('save').addEventListener('click', function () {

    const totalIncomeAmount = getInputInNmuber('income');

    // getting amount of savings using percentage 
    const savingPercentage = getInputInNmuber('savings-percentage');
    const savingsAmount = (totalIncomeAmount * savingPercentage) / 100;

    const savingFieldAmount = document.getElementById('saving-amount');
    savingFieldAmount.innerText = savingsAmount;
    const balanceField = document.getElementById('balance');
    const totalBalanceAmount = balanceField.innerText;

    // calculating remaining balance
    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalanceAmount = totalBalanceAmount - savingsAmount;
    
    if (totalBalanceAmount < savingsAmount) {
        const remainingBalanceAmount = totalBalanceAmount - savingsAmount;
        remainingBalanceField.innerText = remainingBalanceAmount;

        errorField.style.visibility = 'visible';
        errorField.innerText = "***you have not enough balance For Savings***";
        return;
    } 
    else {
        remainingBalanceField.innerText = remainingBalanceAmount;
    }
});