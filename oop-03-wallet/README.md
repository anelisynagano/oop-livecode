## Wallet

0. - Create a `wallet.js` file

1. - Create a Wallet class
A wallet must have a password and credits property

2. - Create a method setPassword('new-password')
This method should let you create a password only once
(that is if the current password is '', for example)

3. - Create a method topUp()
Lets you add credits to your wallet
e.g: wallet.topUp(300)

3. - Create a method withdraw()
Lets you withdraw credits from your wallet, requires the password
If the password is wrong it should return 'wrong password'
e.g: wallet.withdraw(100, myPassword)

note: if you do `wallet.password = 'something'` are you able to change the password?
There is a simple solution for that, just by changing the constructor and creating a setPassword property. Look for the answer here: [https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes]