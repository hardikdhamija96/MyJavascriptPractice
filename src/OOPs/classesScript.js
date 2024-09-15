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
