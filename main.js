function calculate (){
    let amountDue = document.getElementById('amount-due').value;
    let amountReceived = document.getElementById('amount-received').value;
    let changeDue = Math.floor(amountReceived * 100) - Math.floor(amountDue * 100);
    let dollars = changeDue;
    let cents = dollars;

    dollars = Math.floor(cents/100);
    cents -= dollars * 100;
    document.getElementById('dollars-output').innerHTML = dollars;
    
    let quarters = Math.floor(cents/25);
    cents -= quarters * 25;
    document.getElementById('quarters-output').innerHTML = quarters;

    let dimes = Math.floor(cents/10);
    cents -= dimes * 10;
    document.getElementById('dimes-output').innerHTML = dimes;

    let nickels = Math.floor(cents/5);
    cents -= nickels * 5;
    document.getElementById('nickels-output').innerHTML = nickels;

    let pennies = Math.floor(cents/1);
    document.getElementById('pennies-output').innerHTML = pennies;
}

document.getElementById('calculate-change').addEventListener('click',calculate);