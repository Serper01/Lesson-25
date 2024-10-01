//10 EASY TASKS
//1
function divide(a, b) {
    if (b === 0) {
      return "Ошибка: деление на ноль"; 
    }
    return a / b;
  }
  console.log(divide(10, 2));
  console.log(divide(5, 0));

  //2
  function square(a) {
    return a * a
  }
  console.log(square(2));

  //3
  function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));

  //4
  function getStringLength(str) {
    return str.length;
  }
  
  console.log(getStringLength("Hello, World!"));

  //5
  function getAbsoluteValue(num) {
    return num < 0 ? -num : num;
  }
  console.log(getAbsoluteValue(-5));
  console.log(getAbsoluteValue(3));

  //6
  function getStringLengths(strings) {
    let lengths = [];
    for (let i = 0; i < strings.length; i++) {
      lengths.push(strings[i].length); 
    }
    return lengths; 
  }
  console.log(getStringLengths(["apple", "banana", "cherry"]));

  //7
  function getMax(a, b) {
    return a > b ? a : b;
  }
  console.log(getMax(10, 5)); 
  console.log(getMax(3, 7));

  //8
  function repeatString(str, num) {
    let result = ""; 
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result; 
  }
  console.log(repeatString("Hello", 3));

  //9
  function doubleArray(numbers) {
    let doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled; 
  }
  console.log(doubleArray([1, 2, 3, 4, 5]));

  //10
  function isEven(num) {
    return num % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(7));

  // 6 MEDIUM TASKS
  //1
  function filterPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) { 
        positiveNumbers.push(numbers[i]);
      }
    }
    return positiveNumbers;
  }
  console.log(filterPositiveNumbers([-2, 3, 0, 5, -1, 7]));

  //2
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { 
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString("Hello, World!"));

  //3
  function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  console.log(calculateAverage([1, 2, 3, 4, 5]));

  //4
  function sortDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
  }
  console.log(sortDescending([5, 3, 8, 1, 4]));

  //5
  function factorial(num) {
    if (num < 0) {
      return "Ошибка: факториал отрицательного числа не определен";
    }
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  console.log(factorial(5)); 
  console.log(factorial(0)); 
  console.log(factorial(-3));

  //6
  function getStudentsWithHighGrades(students) {
    let highGradeStudents = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].averageGrade > 70) { 
        highGradeStudents.push(students[i].name);
      }
    }
    return highGradeStudents; 
  }
  const students = [
    { name: "Alice", age: 20, averageGrade: 85 },
    { name: "Bob", age: 22, averageGrade: 65 },
    { name: "Charlie", age: 21, averageGrade: 75 },
    { name: "David", age: 19, averageGrade: 50 }
  ];
  console.log(getStudentsWithHighGrades(students)); 
  
  
  
  
  

  
  
  
  
  
  
  
  
  