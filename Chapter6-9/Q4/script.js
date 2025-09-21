
  var num = prompt("Enter a number for multiplication table:", "5") || 5;

  document.write("<h3>Multiplication Table of " + num + "</h3>");
  for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
  }

