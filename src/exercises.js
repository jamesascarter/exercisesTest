var name = james carter
var dateCompleted = 18/01/2015


function camelCase(string) {

  var stringArray = string.split(" ");
  for ( var i = 0; i < stringArray.length; i++ ){
    var element = stringArray[i]
    var elementOne = stringArray[0]

    if (i == 0){
      stringArray[0] = element.charAt(0).toLowerCase() + element.slice(1)
    } else {
      stringArray[i] = element.charAt(0).toUpperCase() + element.slice(1)
    }
  };
  return stringArray.join("");
};


String.prototype.camelCase = function() {

  var stringArray = this.split(" ");
  for ( var i = 0; i < stringArray.length; i++ ){
    var element = stringArray[i]
    var elementOne = stringArray[0]

    if (i == 0){
      stringArray[0] = element.charAt(0).toLowerCase() + element.slice(1)
    } else {
      stringArray[i] = element.charAt(0).toUpperCase() + element.slice(1)
    }
};
  return stringArray.join("");
  
};


function masterSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};


function sum() {
  return masterSum.apply(null, arguments);
};

//  Rewrite the 'masterSum' function so it uses Array.prototype.reduce()

function masterSumR() {
  return [].reduce.call(arguments, function(a, b) {
    return a+b;
  });

};

var Hero = {
  hitPoints: 100,
  getLife: function(){
    return this.hitPoints;
  }
};
var getLife = Hero.getLife;
var LinksLife = getLife.bind(Hero);


//console.log(Hero.getLife()); // -> 100
//console.log(LinksLife()); // undefined