const inputErrorMsg1 ='please input numbers only';
const inputErrorMsg2 ='Input positive number only';

function getInputInNmuber(inputId){
    const Input = document.getElementById(inputId);
    const inputInText = Input.value;
    const inputAmount = parseFloat(inputInText); 
    return inputAmount;
}

function getBalanceAfterDeduction(income,expense){
    let balanceAfterDeduction = income - expense;
    return balanceAfterDeduction;
    // error 1 expense cant be bigger than income***
}

// calculation of first event of income and expenses 

document.getElementById('calculate-button').addEventListener('click',function(){
    // getting amount of income
    const totalIncomeAmount = getInputInNmuber('income');

    // getting amount of expenses 

    // foods cost
    const foodsCost = getInputInNmuber('foods-cost');    
    
    // foods cost
    const rentalCost = getInputInNmuber('rent-cost');
    
    // foods cost
    const clothsCost = getInputInNmuber('cloths-cost');

    // sum-up all expenses
    const totalExpenses = foodsCost + rentalCost + clothsCost;
    
    // sum-up all expenses in total expense field 

    const totalExpenseField = document.getElementById('total-expenses');
    totalExpenseField.innerText = totalExpenses;


    // dedcting total expenses from total income and show in balance field
    const totalBalance = getBalanceAfterDeduction(totalIncomeAmount,totalExpenses)
    const balanceField = document.getElementById('balance');
    balanceField.innerText = totalBalance;
});


// calculation of second event of savings

document.getElementById('save').addEventListener('click',function(){
    // savings fuctionality starts 
    const finalBalanceField = document.getElementById('balance');
    const finalBalance = finalBalanceField.innerText ;

    // getting amount of savings using percentage 
    const savingPercentage = getInputInNmuber('savings-percentage');
    const savingsAmount =  (finalBalance*savingPercentage) / 100;
    
    const savingFieldAmount = document.getElementById('saving-amount');
    savingFieldAmount.innerText = savingsAmount;

    // calculating remaining balance
    const remainingBalanceField =document.getElementById('remaining-balance');
    const remainingBalanceAmount = finalBalance - savingsAmount;
    remainingBalanceField.innerText = remainingBalanceAmount;
});

