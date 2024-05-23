function checkAnswer() {

    var operation = document.querySelector('input[name="operation"]:checked').value;
    var inputCheckbox = document.getElementById('inputCheckbox').checked;
    
    var expectedOutput;
    if (operation === "AND") {
      expectedOutput = true;
    } else {
      expectedOutput = false;
    }
    
    if (inputCheckbox === expectedOutput) {
      alert("Відповідь правильна!");
    } else {
      alert("Відповідь неправильна.");
    }
  }
