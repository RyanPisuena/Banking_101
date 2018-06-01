var customer_name;
var balance;


function openAccount(name, value=0) {
  balance = value;
  // Set the value for customer_name equal to name below
  customer_name = name;
  return name + ' has opened an account with balance $' + balance; //write the statment you need to return here
}

function deposit(value) {
  balance += value; //return the correct statement
  return customer_name + ' has deposited $' + value + ' and now has a balance of ' + balance;
}

function withdraw( /*argument here*/ ) {
  balance -= value;
  return customer_name + ' has withdrew $' + value + ' and now has a balance of ' + balance;
}

// Write your script below
const statementdiv = document.querySelector('#statement');
