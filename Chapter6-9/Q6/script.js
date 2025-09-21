
  var sub1 = prompt("Enter first subject name:");
  var sub2 = prompt("Enter second subject name:");
  var sub3 = prompt("Enter third subject name:");
  var totalMarksEach = 100;

  var sub1Marks = +prompt("Enter obtained marks for " + sub1 + ":");
  var sub2Marks = +prompt("Enter obtained marks for " + sub2 + ":");
  var sub3Marks = +prompt("Enter obtained marks for " + sub3 + ":");

  var totalObtained = sub1Marks + sub2Marks + sub3Marks;
  var grandTotal = totalMarksEach * 3;
  var percentage = (totalObtained / grandTotal) * 100;

  document.write("<h3>Q6: Marks Sheet</h3>");
  document.write(sub1 + " → Obtained: " + sub1Marks + "/" + totalMarksEach + 
                 " (" + (sub1Marks / totalMarksEach * 100) + "%)<br>");
  document.write(sub2 + " → Obtained: " + sub2Marks + "/" + totalMarksEach + 
                 " (" + (sub2Marks / totalMarksEach * 100) + "%)<br>");
  document.write(sub3 + " → Obtained: " + sub3Marks + "/" + totalMarksEach + 
                 " (" + (sub3Marks / totalMarksEach * 100) + "%)<br><br>");
  document.write("Total Marks: " + grandTotal + "<br>");
  document.write("Marks Obtained: " + totalObtained + "<br>");
  document.write("Overall Percentage: " + percentage + "%");

