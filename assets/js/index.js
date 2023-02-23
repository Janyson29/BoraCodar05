function insert(num) {
    let defaultValue = document.getElementById('calc').innerHTML;
    if (defaultValue == "0") {
      if(
        num == "x" || 
        num == "÷" || 
        num == "+" || 
        num == "-" || 
        num == ","
      ) {
        document.getElementById('calc').innerHTML = "0";
      } else {
        document.getElementById('calc').innerHTML = "";
        document.getElementById('calc').innerHTML = num;
      }
    } else {
      if (defaultValue.length >= 14) {
        document.getElementById('calc').innerHTML += "";
      } else {
        let lastCharacter = defaultValue.slice(-1);
        if(
          (
            lastCharacter == "x" || 
            lastCharacter == "÷" || 
            lastCharacter == "+" || 
            lastCharacter == "-" || 
            lastCharacter == ","
          ) && 
          (
            num == "x" || 
            num == "÷" || 
            num == "+" || 
            num == "-" || 
            num == ","
          )
        ) {
          document.getElementById('calc').innerHTML += "";
          console.log('caiu aqui')
        } else {
          document.getElementById('calc').innerHTML += num;
          console.log('agora caiu aqui')
        }
      }
    }
  }
  
  function clean() {
    document.getElementById('calc').innerHTML = "0";
    document.getElementById('result-calc').innerHTML = "0";
  }
  
  function cancelEntry() {
    let result = document.getElementById('calc').innerHTML;
    if (result != "0") {
      if (result.length == 1) {
        document.getElementById('calc').innerHTML = "0";
        document.getElementById('result-calc').innerHTML = "0";
      } else {
        document.getElementById('calc').innerHTML = result.substring(0, result.length - 1);
      }  
    }
  }
  
  function calculate() {
    try {
      let expression = document.getElementById('calc').innerHTML;
      let expressionAlt = expression.replaceAll("÷", "/").replaceAll("x", "*").replaceAll(",", ".");
  
      if (expression) {
        let result = eval(expressionAlt);
        if (result.toString().length >= 12) {
          document.getElementById('result-calc').innerHTML = "Valor gigante";
        } else {
          document.getElementById('result-calc').innerHTML = result.toString().replaceAll(".", ",");
        }
        document.getElementById('calc').innerHTML = result.toString().replaceAll(".", ",");
      }
    } catch (e) {
      console.log(e);
      document.getElementById('calc').innerHTML = "0";
      document.getElementById('result-calc').innerHTML = "0";
    }
  }