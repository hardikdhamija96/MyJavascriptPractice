// function BankAccount(customerName, balance=0){
  
//     // These are properties
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
    
//   }

// BankAccount.prototype.deposit = function(amount){
//     console.log(amount + " amount is deposited successfully!")
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function(amount){
//     if (amount > this.balance) {
//         console.log("Not Enough Balance to Withdraw: Please enter low amount");
//       } else {
//         this.balance -= amount;
//         console.log(amount + " amount withdrawn successfully!")
//       }
// }


// const hardikAccount = new BankAccount("Hardik D", 1000);
// console.log(hardikAccount)

// // Inheritance in constructor
// // to follow principle DRY

// function currentAccount(currentAccount,balance=0){

//     //To inherit properties from it's parent, call constructor of parent and provide it's necessary arguments

//     //Constructor Linking 
//     BankAccount.call(this, currentAccount,balance);
//     this.transactionLimit = 50000;
// };

// currentAccount.prototype.personalLoan = function(){
//     console.log("Personal loan permited")
// }

// currentAccount.prototype = Object.create(BankAccount.prototype);

// currentAccount.prototype.personalLoan = function(){
//     console.log("Personal loan permited")
// }

// function savingAccount(customerName,balance=0){
//     BankAccount.call(this, customerName,balance)
//     this.transactionLimit = 10000;
// }

// const harryCurrentAccount = new currentAccount("Harry", 10000);
// console.log(harryCurrentAccount);

class BankAccount {
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.balance = balance;
      this.accountNumber = Date.now();
    }
  
    deposit(amount) {
      console.log(amount + " amount is deposited successfully!")
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Not Enough Balance to Withdraw: Please enter low amount");
      } else {
        this.balance -= amount;
        console.log(amount + " amount withdrawn successfully!")
      }
    }
  
  }
  
  const hardikAccount = new BankAccount("Hardik", 1000);
  console.log(hardikAccount);
  
  hardikAccount.deposit(1000);
  console.log("Account balance of hardik: ",hardikAccount.balance);
  
  hardikAccount.withdraw(100);
  console.log("Account balance of hardik: ",hardikAccount.balance);

  //create current account using inheritance

  class currentAccount extends BankAccount{
    transactionLimit = 50000;

    // make constructor and use super for constructor linking
    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBusinessLoan(){
        console.log("Business loan taken! ")
    }

  }

  const harryCurrentAccount = new currentAccount("Harry",1000);
  console.log(harryCurrentAccount);
  