describe("camelCase methods", function(){

  it("will provide camelCased string without spaces", function(){
    expect(camelCase("your soul is mine")).toEqual('yourSoulIsMine');
  });

  it("will provide camelCased string even when 1st word 1st letter is capital", function(){
    expect(camelCase("Get over  here!")).toEqual("getOverHere!");
  });

  it("will provide camelCases string without spaces(on the object)", function(){
    expect("your soul is mine".camelCase()).toEqual('yourSoulIsMine');
  });

  it("will provide camelCases string without spaces even when more than one space(on the object)", function(){
    expect("Get over  here!".camelCase()).toEqual("getOverHere!");
  });

});

describe("masterSum method", function(){

 it("will sum all arguments", function(){
    expect(masterSum(1,2,3)).toEqual(6);
  });

  it("wrapped in sum will sum all arguments", function(){
    expect(sum(1,2,3,4,5,6)).toEqual(21);
  });

  it("can work using reduce", function(){
    expect(masterSumR(1,2,3,4,5,6)).toEqual(21);
  });

});

describe("Hero", function(){

  it(".getLife() will return 100", function(){
    expect(Hero.getLife()).toEqual(100);
  });

  it("LinksLife will return 100", function(){
    expect(LinksLife()).toEqual(100);
  });
});