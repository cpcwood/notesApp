function expect(methodValue){
  this.toEq = function(comparisonValue){
    if(comparisonValue === methodValue){
      return {message: "Passed", passed: true, expected: comparisonValue, got: methodValue}
    } else {
      return {message: `Failed. Expected ${comparisonValue}, got ${methodValue}`, passed: false, expected: comparisonValue, got: methodValue}
    }
  };
  this.contains = function(comparisonValue){
    if(methodValue.includes(comparisonValue)) {
      return {message: "Passed", passed: true, expected: comparisonValue, got: methodValue}
    }
    else {
      return {message: `Failed. Expected ${comparisonValue} to be contained within ${methodValue}`, passed: false, expected: comparisonValue, got: methodValue}
    }
  }
 this.toBeA = function(comparisonValue){
    if(typeof methodValue == typeof comparisonValue ) {
      return {message: "Passed", passed: true, expected: comparisonValue, got: methodValue}
    } else{
      return {message: `Failed. Expected ${comparisonValue} to be the same type as ${methodValue}`, passed: false, expected: comparisonValue, got: methodValue}
    }
  }
  return this
}

// console.log(expect("hello").toEq("hello"))
// console.log(expect("hello").toEq("hi"))
// console.log(expect(["hello", "hi", "bye"]).contains("hello"))
// console.log(expect(["hi", "bye"]).contains("hello"))
// console.log(expect(2).toBeA("hello"))
// console.log(expect("hi").toBeA("hello"))