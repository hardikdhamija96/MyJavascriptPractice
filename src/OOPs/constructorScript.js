const accounts = []
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const account = new BankAccount(customerName.value, Number(balance.value));
  accounts.push(account);
  console.log(accounts);
})

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const depositAmount = document.querySelector("#depositAmount");

depositForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const account = accounts.find((account) => account.accountNumber === (+accountNumber.value))

    account.deposit(+depositAmount.value);
    console.log(accounts);
})





// Constructor Function
function BankAccount(customerName, balance=0){
  
  // These are properties
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
  
  // Method
  this.deposit = function(amount){
    this.balance += amount;
  }
  
  this.withdraw = function(amount){
    if(amount > this.balance)
      {
        console.log("Not Enough Balance to Withdraw: Please enter low amount");
      }
    else{
       this.balance -= amount;
    }
    
  }
}

// const RakeshAccount = new BankAccount("Rakesh",10000);
// console.log(RakeshAccount);

// const HardikAccount = new BankAccount("Hardik");
// HardikAccount.deposit(1000);
// console.log(HardikAccount);

// HardikAccount.withdraw(2000);