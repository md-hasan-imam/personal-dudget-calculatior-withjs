const inputErrorMsg1 = 'please input numbers only';
const inputErrorMsg2 = 'Input positive number only';

function getInputInNmuber(inputId) {
    const input = document.getElementById(inputId);
    const inputInText = input.value;
    const inputAmount = parseFloat(inputInText);


    return inputAmount;
}

function getBalanceAfterDeduction(income, expense) {
    let balanceAfterDeduction = income - expense;
    return balanceAfterDeduction;
    // error 1 expense cant be bigger than income***
}

// calculation of first event of income and expenses 

document.getElementById('calculate-button').addEventListener('click', function () {
    // getting amount of income
    const totalIncomeAmount = getInputInNmuber('income');

    // getting amount of expenses 

    // foods cost
    const foodsCost = getInputInNmuber('foods-cost');

    // foods cost
    const rentalCost = getInputInNmuber('rent-cost');

    // foods cost
    const clothsCost = getInputInNmuber('cloths-cost');

    if (totalIncomeAmount < 0 || foodsCost < 0 || rentalCost < 0 || clothsCost < 0) {
        alert("cannot input negative number");
        return;
    } 
    else if (isNaN(totalIncomeAmount) || isNaN(foodsCost) || isNaN(rentalCost) || isNaN(clothsCost )) {
        alert("cannot input a string");
        return;
    }



    // sum-up all expenses
    const totalExpenses = foodsCost + rentalCost + clothsCost;

    // sum-up all expenses in total expense field 

    const totalExpenseField = document.getElementById('total-expenses');
    totalExpenseField.innerText = totalExpenses;


    // dedcting total expenses from total income and show in balance field
    const totalBalance = getBalanceAfterDeduction(totalIncomeAmount, totalExpenses)
    const balanceField = document.getElementById('balance');
    balanceField.innerText = totalBalance;
    
    if (totalBalance < totalExpenses ) {
        alert("you have not enough balance");
        return;
    } 
});


// calculation of second event of savings

document.getElementById('save').addEventListener('click', function () {
    // savings fuctionality starts 

    const totalIncomeAmount = getInputInNmuber('income');

    const balanceField = document.getElementById('balance');
    const totalBalanceAmount = balanceField.innerText;


    // getting amount of savings using percentage 
    const savingPercentage = getInputInNmuber('savings-percentage');
    const savingsAmount = (totalIncomeAmount * savingPercentage) / 100;

    const savingFieldAmount = document.getElementById('saving-amount');
    savingFieldAmount.innerText = savingsAmount;

    // calculating remaining balance
    const remainingBalanceField = document.getElementById('remaining-balance');

    const remainingBalanceAmount = totalBalanceAmount - savingsAmount;
    remainingBalanceField.innerText = remainingBalanceAmount;

    if (remainingBalanceAmount < savingsAmount ) {
        alert("you have not enough balance");
        return;
    } 
});