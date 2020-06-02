## Student

Create a `Student.js` file with a class `Student`

Suppose you have students (defined by the class `Student`) who each have an amount of money (in bills of five, ten and twenty euros). We want to be able to compare them based on their wealth.

- When initializing a `Student`, you should pass 4 arguments representing the student name and the number of bills they own (fives, tens and twenties)
- Implement a `wealth` method that returns the a number
- Create a function (outside of the class) that takes two arguments (two students) and returns the wealthiest student -> you should use the `wealth()`

## OrangeTree

Create an `OrangeTree.js` file

Implement an `OrangeTree` class that models the life of an orange tree (its birth, life cycle and death).

To simulate time passing, you will need to implement the following **instance** method:

```
oneYearPasses() {

  # TODO: age the tree by one year
  # TODO: check if the tree has survived
  # TODO: if so, make the tree height grow
  # TODO: if so, make the tree grow fruits
}
```

- You should be able to measure the height of the tree.
- You should be able to find out if the tree is dead.
- Each year, the tree should age by 1 year (it becomes older and taller, and eventually dies).
- A tree grows 1 meter per year until it is 10 years old. Then it stops growing.
- The orange tree **cannot** die until it reaches 50 years old.
- After 50 years, the probability of dying increases each year.
- No tree can live more than 100 years.
- A tree will produce 100 fruits a year once it is more than 5 years old.
- A tree will produce 200 fruits a year when it reaches 10 years old.
- A tree will not produce fruits once it reaches 15 years old.
- You should be able to pick **a single fruit** from the tree by calling the `pick_a_fruit!` method on your tree (but only if there are some left).
- At the end of each year, the fruits which have not been picked **will fall off**.
- You should be able to find out how many fruits are left hanging on the tree.

