// Constructor Function for bank
function BankAccount(customerName, balance=0){
  
    // These are properties
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
    
    // // Method
    // this.deposit = function(amount){
    //   this.balance += amount;
    // }
    
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

  // Problem: do we need deposit and withraw method inside BankAccount?? Aren't these methods common for all objects ?

  console.log(BankAccount.prototype)
//   BankAccount.prototype.test = "this is a test";

  BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
  };

  console.log(BankAccount.prototype)

  const hardik = new BankAccount("Hardik", 1000);

  hardik.deposit(1000);
  console.log(hardik);