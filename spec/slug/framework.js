function describe(str, funck) {
  var resultHash = funck()
  var result = resultHash["passed"]
  var color = (result == true ? "green" : "red")
  var resultHtml = `
  <div class = 'result' style = 'color:${color};'> 
  ${str}
  <ul>
    <li>result : ${result}</li>
    <li>message : ${resultHash['message']}</li>
    <li>expected : ${resultHash['expected']}</li>
    <li>got : ${resultHash['got']}</li>
    </ul>
  </div> `

  document.getElementById('results').innerHTML += resultHtml
}

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
