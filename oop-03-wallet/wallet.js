class Wallet {
    constructor(credits) {
        this.password = ""; 
        this.credits = credits;
    }
    
    setPassword(password){

        // ternary operator
        this.password === "" ? this.password = password : null

        // if else statement
        // if (this.password === "") {
        //     this.password = password; 
        // }
    }

    topUp(addCredits) {
        this.credits += addCredits; 
    }
    
    withdraw(withdrawCredits, password) {

        // ternary operator
        this.password === password ? this.credits -= withdrawCredits : console.log(`wrong password!`)

        // if else
        // if (this.password === password) {
        //     this.credits -= withdrawCredits
        // } else {
        //     console.log(`wrong password!`)
        // }
    }
    
}

const myWallet = new Wallet(30);
// console logging the new instantiated object
console.log(myWallet); 

// setting a new password to our wallet
myWallet.setPassword('thisthar');
// adding credit to our wallet
myWallet.topUp(100000000000); 
// console logging our new wallet values
console.log(myWallet); 

// adding credit to out wallet
myWallet.topUp(100000000000); 
// console logging our new wallet values
console.log(myWallet); 

// withdrawing from our current value available on wallet, and checking if password matches
myWallet.withdraw(500000000000, 'thisthar')

// console logging our new wallet values
console.log(myWallet)
