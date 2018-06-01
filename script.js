var customer_name;
var balance;
let email = "Pisuenaryan@gmail.com";
let password = "password";

const testbutton = document.querySelector("#submit_button");

testbutton.addEventListener('click', function(){
  let userInput = document.querySelector("login-nav");

  let userEmail = document.getElementById('exampleInputEmail2').value;
  let userPassword = document.getElementById('exampleInputPassword2').value;
  console.log(userEmail);
  console.log(userPassword);

  if (userEmail == email && userPassword == password)
    {
      window.location.href = 'http://www.google.com';;
    }
});

function openAccount(name, value = 0) {
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
