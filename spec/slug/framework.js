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
