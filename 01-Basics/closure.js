function bankBalance() {
    let balance = 1000;

    return function () {
        balance = balance + 500;
        console.log("Balance:", balance);
    };
}

const myAccount = bankBalance();

myAccount();
myAccount();
myAccount();


function bankAccount() {
    let balance = 10000;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log("deposite:", amount);
        },

        checkBalance: function () {
            console.log("Current Balance:", balance);
        },

        withrow: function (amount) {
            if (amount > balance) {
                console.log("Insufficent Balance")
            } else {
                balance -= amount
                console.log("withrow:", amount)
            }
        }
    };
}

const account = bankAccount();

account.checkBalance();
account.deposit(2000);
account.checkBalance();
account.withrow(15000);
account.checkBalance();
account.withrow(3000);
account.checkBalance();

