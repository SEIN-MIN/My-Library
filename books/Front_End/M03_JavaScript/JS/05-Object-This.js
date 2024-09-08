// TODO: What is `this` referring to here?
console.log(this);
// (This) is referring   window.


// TODO: What is `this` referring to here?
// (This) is referring object window.
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
// (This) is referring to the calling object.
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
this.child.ageTenYears();
// TODO: What is `this` referring to here? What will be logged in the console?
// (This) is referring to the calling object.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};
investor.investment.investmentGrowth();

// TODO: Call the `helloThis` function and the object methods to check results in the console
this.helloThis();