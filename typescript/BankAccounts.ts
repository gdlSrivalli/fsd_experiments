class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance:", this.balance);
    }
}

let account = new BankAccount(5000);

account.deposit(1000);
account.withdraw(2000);
account.displayBalance();