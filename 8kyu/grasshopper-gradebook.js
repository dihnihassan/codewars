// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let result = (s1 + s2 + s3) / 3

  if (result >= 90) {
    return 'A';
  };
  if (result >= 80 && result <= 90) {
    return 'B';
  };
  if (result >= 70 && result <= 80) {
    return 'C';
  };
  if (result >= 60 && result <= 70) {
    return 'D';
  };
  if (result <= 60) {
    return 'F';
  };
};