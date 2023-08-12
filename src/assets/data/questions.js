const questionsAnswers = {
  javascript: [
    {
      "question": "Create a for loop that prints the numbers from 1 to 10.",
      "answer": [
        "for (let i = 1; i <= 10; i++)"
      ]
    },
    {
      "question": 'Declare a variable called "message" and assign it the value "Hello, World!".\nExtra: Split the string in to an array with two strings, "Hello" and "World!"',
      "answer": [
        'let message = "Hello, World!";'
      ]
    },
    {
      "question": 'Write a function called "double" that takes a number as input and returns its double.',
      "answer": [
        `function double(num) {
            return num * 2;
          }`
      ]
    },
    {
      "question": 'Create a variable "string" and assign it the value "Hello". Use the addition operator to concatenate the strings value and "World", and then console.log your result.',
      "answer": [
        "let string = Hello",
        "console.log(string + ' World')"
      ]
    },
    {
      "question": "Create a function named 'multiply' that takes two parameters 'num1' and 'num2' and returns their product.",
      "answer": [
        "function multiply(num1, num2) {",
        " return num1 * num2;",
        "}"
      ]
    },
    {
      "question": "Write a JavaScript function named 'isEven' that takes a number as a parameter and returns true if the number is even, and false otherwise.",
      "answer": [
        "function isEven(number) {",
        " return number % 2 === 0;",
      "}"
      ]
    },
    {
      "question": "Create an array named 'fruits' and initialize it with the values 'apple', 'banana', and 'orange'.\nExtra: add 'strawberry' to the fruits array and console.log fruits",
      "answer": [
        "let fruits = ['apple', 'banana', 'orange'];"
      ]
    },
    {
      "question": "Write a JavaScript function named 'getLength' that takes an array as a parameter and returns its length.",
      "answer": [
        "function getLength(array) {",
        " return array.length;",
        "}"
      ]
    },
    {
      "question": "Create a conditional statement that checks if a variable 'age' is greater than or equal to 18, and if so, prints 'You are an adult.'",
      "answer": [
        "if (age >= 18) {\n console.log('You are an adult.');\n}"
      ]
    },
    {
      "question": "Write a JavaScript function named 'reverseString' that takes a string as a parameter and returns the reversed version of the string.",
      "answer": [
        "function reverseString(string) {\n return string.split('').reverse().join('');\n}"
      ]
    },
    {
      "question": "Create an object named 'person' with properties 'name' and 'age' and assign appropriate values.",
      "answer": [
        "let person = {\n name: 'John Doe',\n age: 25\n};"
      ]
    },
    {
      "question": "Write a JavaScript function named 'sumArray' that takes an array of numbers as a parameter and returns the sum of all the numbers.",
      "answer": [
        "function sumArray(array) {\n return array.reduce((sum, num) => sum + num, 0);\n}"
      ]
    },
    {
      "question": "Create a while loop that prints the numbers from 1 to 5.",
      "answer": [
        "let i = 1;\nwhile (i <= 5) {\n console.log(i);\n i++;\n}"
      ]
    },
    {
      "question": "Write a JavaScript function named 'capitalizeString' that takes a string as a parameter and returns the string with the first letter capitalized.",
      "answer": [
        "function capitalizeString(string) {\n return string.charAt(0).toUpperCase() + string.slice(1);\n}"
      ]
    },
    {
      "question": "Write a function named 'sumArray' that takes an array of numbers as an argument and returns the sum of all the numbers.",
      "answer": [
        "function sumArray(numbers) { \n let sum = 0; \n for (let i = 0; i < numbers.length; i++) { \n sum += numbers[i]; \n } \n return sum; \n}"
      ]
    },
    {
      "question": "Create an object named 'car' with properties 'brand', 'model', and 'year', and assign the values 'Toyota', 'Camry', and 2022 to them.",
      "answer": [
        "let car = { \n brand: 'Toyota', \n model: 'Camry', \n year: 2022 \n};"
      ]
    },
    {
      "question": "Write a function named 'capitalize' that takes a string as an argument and returns the same string with the first letter capitalized.",
      "answer": [
        "function capitalize(str) { \n return str.charAt(0).toUpperCase() + str.slice(1); \n}"
      ]
    },
    {
      "question": "Create an array named 'numbers' with five elements: 1, 2, 3, 4, and 5.",
      "answer": [
        "let numbers = [1, 2, 3, 4, 5];"
      ]
    },
    {
      "question": "Round the number 3.14159 to the nearest integer using the Math object.",
      "answer": [
        "Math.round(3.14159);"
      ]
    },
    {
      "question": "Calculate the square root of 25 using the Math object.",
      "answer": [
        "Math.sqrt(25);"
      ]
    },
    {
      "question": "Create an array named 'positiveNumbers' that contains only the positive numbers from the 'numbers' array using the filter method.",
      "answer": [
        "let positiveNumbers = numbers.filter(num => num > 0);"
      ]
    },
    {
      "question": "Create an array named 'evenNumbers' that contains only the even numbers from the 'numbers' array using the filter method.",
      "answer": [
        "let evenNumbers = numbers.filter(num => num % 2 === 0);"
      ]
    },
    {
      "question": "Create an array named 'squaredNumbers' that contains the square of each number from the 'numbers' array using the map method.",
      "answer": [
        "let squaredNumbers = numbers.map(num => num * num);"
      ]
    },
    {
      "question": "Create an array named 'doubleNumbers' that contains double the value of each number from the 'numbers' array using the map method.",
      "answer": [
        "let doubleNumbers = numbers.map(num => num * 2);"
      ]
    },
    {
      "question": "Calculate the sum of all numbers in the 'numbers' array using the reduce method.",
      "answer": [
        "let sum = numbers.reduce((acc, num) => acc + num, 0);"
      ]
    },
    {
      "question": "Calculate the average of all numbers in the 'numbers' array using the reduce method.",
      "answer": [
        "let average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;"
      ]
    },
    {
      "question": "Create an array named 'sortedNumbers' that contains the numbers from the 'numbers' array in ascending order using the sort method.",
      "answer": [
        "let sortedNumbers = numbers.sort((a, b) => a - b);"
      ]
    },
    {
      "question": "Find the maximum number from the 'numbers' array using the Math.max method.",
      "answer": [
        "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]",
        "let maxNumber = Math.max(...numbers);"
      ]
    },
    {
      "question": "Find the minimum number from the 'numbers' array using the Math.min method.",
      "answer": [
        "let minNumber = Math.min(...numbers);"
      ]
    },
    {
      "question": "Create an array named 'names' that contains 'Hillary', 'Jason', 'Johnathan', 'Jacob', 'Leon'. Now create a new array, 'filteredNames' that only contains the names starting with the letter 'J' from the 'names' array using the filter method.",
      "answer": [
        "const names = ['Hillary', 'Jason', 'Johnathan', 'Jacob', 'Leon']",
        "let filteredNames = names.filter(name => name.charAt(0) === 'J');"
      ]
    },
    {
      "question": "Create an array named 'nameLengths' that contains the length of each name from the 'names' array using the map method.",
      "answer": [
        "let nameLengths = names.map(name => name.length);"
      ]
    },
    {
      "question": "How do you access the properties of an object in JavaScript?",
      "answer": [
        "You can access the properties of an object using dot notation or bracket notation."
      ]
    },
    {
      "question": "What is the difference between == and === operators in JavaScript?",
      "answer": [
        "The == Abstract equality operator compares the values of two operands, while the === Strict equality operator compares the values and types of two operands.",
        "Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different"
      ]
    },
    {
      "question": "How do you declare a variable in JavaScript?",
      "answer": [
        "You can declare a variable in JavaScript using the 'var', 'let', or 'const' keyword."
      ]
    },
    {
      "question": "What is the difference between let, const, and var in JavaScript?",
      "answer": [
        "'var' has function scope, 'let' and 'const' have block scope. 'const' is used for variables that won't be reassigned, while 'let' and 'const' can be reassigned."
      ]
    },
    {
      "question": "What are the different data types in JavaScript?",
      "answer": [
        "JavaScript has several data types, including number, string, boolean, object, null, symbol, and undefined."
      ]
    },
    {
      "question": "How do you define a function in JavaScript?",
      "answer": [
        "You can define a function using the 'function' keyword followed by the function name and parentheses, optionally followed by parameters and a function body."
      ]
    },
    {
      "question": "What is the difference between function declarations and function expressions in JavaScript?",
      "answer": [
        "Function declarations are hoisted, meaning they can be called before they are defined. Function expressions are not hoisted and must be defined before they are called."
      ]
    },
    {
      "question": "What is the purpose of the 'this' keyword in JavaScript?",
      "answer": [
        "The 'this' keyword refers to the object that is executing the current function or method."
      ]
    },
    {
      "question": "How do you handle errors in JavaScript?",
      "answer": [
        "You can use try-catch statements to handle errors in JavaScript. The 'try' block contains the code that might throw an error, and the 'catch' block handles the error if it occurs."
      ]
    },
    {
      "question": "How do you write comments in JavaScript?",
      "answer": [
        "In JavaScript, you can write single-line comments using '//' and multi-line comments using '/' at the beginning and '/' at the end."
      ]
    },
    {
      "question": "What is an if statement in JavaScript?",
      "answer": [
        "An if statement is used to perform a certain action if a condition is true. It allows you to control the flow of your program based on different conditions."
      ]
    },
    {
      "question": "How do you loop through an array in JavaScript?",
      "answer": [
        "You can loop through an array in JavaScript using a 'for' loop, 'forEach' method, or other loop constructs like 'while' or 'do-while' loop."
      ]
    },
    {
      "question": "What is a function in JavaScript?",
      "answer": [
        "A function in JavaScript is a reusable block of code that performs a specific task. It can be called multiple times with different arguments."
      ]
    },
    {
      "question": "What is an array in JavaScript?",
      "answer": [
        "An array is a data structure in JavaScript that allows you to store multiple values in a single variable. It is represented by square brackets [] and the values are separated by commas."
      ]
    },
    {
      "question": "What is JavaScript?",
      "answer": [
        "JavaScript is a programming language that enables interactivity on websites. It runs on the client-side, meaning it is executed on the user's web browser."
      ]
    },
    {
      "question": "What are the advantages of using dot notation to access object properties in JavaScript?",
      "answer": [
        "Dot notation provides a more concise and readable way to access object properties. It is also easier to use when the property name is known beforehand."
      ]
    },
    {
      "question": "When should you use bracket notation to access object properties in JavaScript?",
      "answer": [
        "Bracket notation should be used when the property name is dynamically determined or when it contains special characters that are not valid for dot notation."
      ]
    },
    {
      "question": "Can you give an example of accessing an object property using dot notation in JavaScript?",
      "answer": [
        "Sure! Here's an example: 'const person = { name: 'John', age: 25 }; console.log(person.name); // Output: John'"
      ]
    },
    {
      "question": "Can you give an example of accessing an object property using bracket notation in JavaScript?",
      "answer": [
        "Certainly! Here's an example: 'const person = { name: 'John', age: 25 }; console.log(person['name']); // Output: John'"
      ]
    },
    {
      "question": "Is it possible to access nested object properties using dot notation in JavaScript?",
      "answer": [
        "Yes, dot notation can be used to access nested object properties by chaining the property names together. For example: 'const myObj = { prop1: { prop2: 'value' } }; console.log(myObj.prop1.prop2); // Output: value'"
      ]
    },
    {
      "question": "Is it possible to access nested object properties using bracket notation in JavaScript?",
      "answer": [
        "Yes, bracket notation can also be used to access nested object properties. Here's an example: 'const myObj = { prop1: { prop2: 'value' } }; console.log(myObj['prop1']['prop2']); // Output: value'"
      ]
    },
    {
      "question": "What happens if you try to access a non-existent property using dot notation in JavaScript?",
      "answer": [
        "If you try to access a non-existent property using dot notation, you will get 'undefined' as the result."
      ]
    },
    {
      "question": "What happens if you try to access a non-existent property using bracket notation in JavaScript?",
      "answer": [
        "If you try to access a non-existent property using bracket notation, you will also get 'undefined' as the result."
      ]
    },
    {
      "question": "How can you determine if a property exists in an object in JavaScript?",
      "answer": [
        "You can use the 'in' operator or the 'hasOwnProperty()' method to check if a property exists in an object."
      ]
    },
    {
      "question": "What is object destructuring in JavaScript?",
      "answer": [
        "Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables in a concise way."
      ]
    },
    {
      "question": "How can you merge two or more objects in JavaScript?",
      "answer": [
        "You can use the 'Object.assign()' method or the spread syntax (...) to merge two or more objects in JavaScript."
      ]
    },
    {
      "question": "What is the difference between 'call()', 'apply()', and 'bind()' methods in JavaScript?",
      "answer": [
        "Both call() and apply() are used to invoke functions the difference is in how they take arguments. .call() takes them as comma-separated values and .apply() takes them as an array.",
        "'call()', 'apply()', and 'bind()' are methods used to set the value of 'this' in a function. 'call()' and 'apply()' invoke the function immediately, while 'bind()' returns a new function with the bound 'this' value."
      ]
    },
    {
      "question": "What is prototypal inheritance in JavaScript?",
      "answer": [
        "Prototypal inheritance is a way of creating objects where objects inherit properties and methods from other objects. It is based on the concept of prototypes."
      ]
    },
    {
      "question": "How can you create a private variable in JavaScript?",
      "answer": [
        "JavaScript doesn't have built-in support for private variables, but you can use closures to achieve privacy by creating a function with a variable that is only accessible within the function."
      ]
    },
    {
      "question": "What is the event loop in JavaScript?",
      "answer": [
        "The event loop is a mechanism in JavaScript that allows for asynchronous execution of code. It handles the execution of tasks in a non-blocking manner, allowing other code to run while waiting for asynchronous operations to complete."
      ]
    },
    {
      "question": "What is type coercion?",
      "answer": [
        "Type coercion is the process of converting a value from one data type to another.",
        "In JavaScript, type coercion happens implicitly when operators or functions are applied to values of different types.",
        "Any type of primitive or object is valid for type coercion."
      ]
    },
    {
      "question": "What are the primitive data types in JavaScript?\nExtra: describe the data types format and purpose.",
      "answer": [
        "String: a sequence of characters used to represent text",
        "Number: a numeric data type in the double-precision 64-bit floating point format (IEE 754)",
        "BigInt: BigInt is a numeric data type that can represent integers in the arbitrary precision format, and represents numbers too large for the number primitive",
        "Boolean: a logical data type that has only two values, true or false",
        "Undefined: a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.",
        "Symbol: a built in object whose constructor returns a symbol that is used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding",
        "Null: a value that represents a reference that points, generally intentionally, to a nonexistent or invalid object or address."
      ]
    },
    {
      "question": "What is arbitrary precision format?",
      "answer": [
        "Arbitrary precision format, also known as arbitrary precision arithmetic or bignum arithmetic, is a method of representing and performing calculations on numbers with an unlimited number of digits. Unlike fixed-width data types, which have a predetermined number of bits or digits, arbitrary precision format uses dynamic data structures to store individual digits, allowing for precise calculations with numbers of any size. It enables accurate computations in applications where precision and range are essential, albeit with increased computational overhead compared to fixed-width types.",
        "Arbitrary precision format overcomes these limitations by using dynamic data structures, such as arrays or linked lists, to store digits of a number. Each digit is typically represented using an integer or a similar data type. This approach allows for numbers with an arbitrarily large number of digits."
      ]
    },
    {
      "question": "What is the hasOwnProperty(), or Object.hasOwn() method used for?",
      "answer": "Both methods return a boolean indicating whether the object has the specified property as its own property, as opposed to inheriting it"
    },
    {
      "question": "What are closures in JavaScript?",
      "answer": [
        "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
      ]
    },
    {
      "question": "What are the benefits of creating closures?",
      "answer": [
        "Encapsulation: Closures allow you to create private variables and methods by encapsulating data within a function, preventing external access and unintended modifications.",
        "Preserving state: Closures enable functions to retain access to their surrounding variables and values, even after the enclosing function has finished executing, allowing them to maintain and reference that state.",
        "Data privacy: Closures help enforce data privacy by exposing only necessary functions and variables to the outside world while keeping the rest hidden, enabling controlled access to internal components.",
        "Function factories: Closures are utilized to create function factories that generate specialized functions based on arguments provided, allowing the generated functions to retain access to the closure's variables and configurations.",
        "Callbacks and asynchronous operations: Closures play a crucial role in handling callbacks and asynchronous operations by storing references to required data within the closure, ensuring accessibility when the asynchronous operation completes, even if the original function has finished execution."
      ]
    },
    {
      "question": "What is prototypal inheritance?",
      "answer": [
        "Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It is a way to create new objects based on existing objects, known as prototypes."
      ]
    },
    {
      "question": "How does prototypal inheritance work?",
      "answer": [
        "Explanation: All JavaScript objects have a __proto__ property that is a reference to another object, which is called the object's \"prototype\". If a property is accessed on an object, but not found, the JavaScript engine check's that object prototype. If again it's not found, it checks that prototype's prototype on up the chain until it reaches the top of the chain.",
        "Use: It can help reduce redundant code."
      ],
      "example": [
        "/images/prototypal.jpg", 
        "For more information, check out the documentation:",
        "Source: https://www.frontendinterviewhandbook.com/javascript-questions"
      ]
    },
    {
      "question": "Create a function 'Digital root,' which is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.\n 16  -->  1 + 6 = 7\n942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6",
      "answer": [
        "function digitalRoot(n) {",
        " if (n < 10)",
        "   return n;",
        " const digits = n.toString();",
        " const sumDigits = digits.split('').reduce(",
        "   (acc, digit) => acc + parseInt(digit, 10), 0);",
        " return digitalRoot(sumDigits);"
      ]
    },
    {
      "question": "The examples below show you how to write function accum:\naccum('abcd') -> 'A-Bb-Ccc-Dddd'\naccum('RqaEzty') -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'\naccum('cwAt') -> 'C-Ww-Aaa-Tttt'",
      "answer": [
        "function accum(s) {",
        "  const result = [];",
        "  const chars = s.split('');",
        "  for (let i = 0; i < chars.length; i++) {",
        "    let char = chars[i].toUpperCase();",
        "    const repetition = i + 1;",
        "    result.push(char + chars[i].toLowerCase().repeat(repetition - 1));",
        "  }",
        "  return result.join('-');",
        "}"
      ]
    },
    {
      "question": "Given an array of integers, find the one that appears an odd number of times.\nExample:\n[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).",
      "answer": [
        "function findOdd(arr) {",
        "  const count = arr.reduce((acc, currentNum) => {",
        "    acc[currentNum] = (acc[currentNum] || 0) + 1;",
        "    return acc",
        "  }, {}) <-- Initial value for acc, empty object",
        "",
        "  const oddNum = Object.keys(count).filter((num) => count[num] % 2 === 1);",
        "  return Number(oddNum);",
        "}"
      ]
    },
    {
      "question": "Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.",
      "answer": [
        "function spinWords(string) {",
        " const words = string.split(' ')",
        " const newString = words.map(word => {",
        "   if (word.length >= 5){",
        "     return word.split('').reverse().join('');",
        "   }",
        "   return word;",
        "   });",
        "   return newString.join(' ');",
        "}"
      ]
    },
    {
      "question": "Write a function that determines if characters are duplicated in a string, if the char is has more than one occurence, replace with ')', otherwise with '('. It must be case-insensitive.",
      "answer": [
        "function duplicateEncode(string) {",
        "  const charArray = Array.from(string.toLowerCase());",
        "  const charMap = charArray.reduce((acc, char) => {",
        "    acc.set(char, (acc.get(char) || 0) + 1);",
        "    return acc;",
        "  }, new Map());",
        "  return charArray.map(e => (charMap.get(e) > 1 ? ')' : '(')).join('');"
      ]
    }
  ],
  git: [
    {
      "question": "How do you initialize a new Git repository?",
      "answer": ["git init"]
    },
    {
      "question": "How do you check the status of your Git repository?",
      "answer": ["git status"]
    },
    {
      "question": "What command is used to stage changes for a commit?",
      "answer": ["git add"]
    },
    {
      "question": "How do you commit changes in Git?",
      "answer": ["git commit -m 'Commit message'"]
    },
    {
      "question": "What command is used to create a new branch in Git?",
      "answer": ["git branch <branch_name>"]
    },
    {
      "question": "How do you switch to a different branch in Git?",
      "answer": ["git checkout <branch_name>"]
    },
    {
      "question": "How do you merge a branch into the current branch in Git?",
      "answer": ["git merge <branch_name>"]
    },
    {
      "question": "What command is used to view the commit history in Git?",
      "answer": ["git log"]
    },
    {
      "question": "How do you push changes to a remote Git repository?",
      "answer": ["git push origin <branch_name>"]
    },
    {
      "question": "How do you pull changes from a remote Git repository?",
      "answer": ["git pull origin <branch_name>"]
    },
    {
      "question": "What command is used to discard changes in the working directory?",
      "answer": ["git checkout -- <file_name>"]
    },
    {
      "question": "How do you rename a file in Git?",
      "answer": ["git mv <old_file_name> <new_file_name>"]
    },
    {
      "question": "What command is used to create a new remote Git repository?",
      "answer": ["git remote add origin <remote_repository_url>"]
    },
    {
      "question": "How do you remove a file from Git without deleting it?",
      "answer": ["git rm --cached <file_name>"]
    },
    {
      "question": "How do you undo the last commit in Git?",
      "answer": ["git revert HEAD"]
    },
    {
      "question": "What command is used to create a new tag in Git?",
      "answer": ["git tag <tag_name>"]
    },
    {
      "question": "How do you create a new branch and switch to it in a single command?",
      "answer": ["git checkout -b <branch_name>"]
    },
    {
      "question": "What command is used to view the changes between two commits in Git?",
      "answer": ["git diff <commit_hash_1> <commit_hash_2>"]
    },
    {
      "question": "How do you discard all local changes and switch to the latest commit?",
      "answer": ["git reset --hard HEAD"]
    }
  ],
  python: [
    {
      "question": "Write a function in Python to check if a number is prime.",
      "answer": [
      "def is_prime(num):\n if num <= 1:\n return False\n for i in range(2, int(num**0.5) + 1):\n if num % i == 0:\n return False\n return True"
      ]
    },
    {
      "question": "How can you find the maximum element in a list using Python?",
      "answer": [
      "max_element = max(your_list)"
      ]
    },
    {
      "question": "How can you remove all occurrences of a specific value from a list in Python?",
      "answer": [
      "your_list = [x for x in your_list if x != value]"
      ]
    },
    {
      "question": "Write a Python function to reverse a string.",
      "answer": [
      "def reverse_string(string):\n return string[::-1]"
      ]
    },
    {
      "question": "How can you convert a string to an integer in Python?",
      "answer": [
      "integer_value = int(string)"
      ]
    },
    {
      "question": "Write a Python function to calculate the factorial of a number.",
      "answer": [
      "def factorial(num):\n if num == 0:\n return 1\n else:\n return num * factorial(num-1)"
      ]
    },
    {
      "question": "Write a Python function to calculate the Fibonacci sequence up to a specified number of terms.",
      "answer": [
      "def fibonacci(n):\n sequence = [0, 1]\n while len(sequence) < n:\n next_num = sequence[-1] + sequence[-2]\n sequence.append(next_num)\n return sequence"
      ]
    },
    {
      "question": "How can you check if a key exists in a dictionary in Python?",
      "answer": [
      "if key in dictionary:"
      ]
    },
    {
      "question": "Write a Python program to find the sum of all even numbers in a list.",
      "answer": [
      "even_sum = sum(num for num in your_list if num % 2 == 0)"
      ]
    },
    {
      "question": "How can you convert a list to a tuple in Python?",
      "answer": [
      "tuple_list = tuple(your_list)"
      ]
    },
    {
      "question": "Write a Python function to calculate the sum of digits in a number.",
      "answer": [
      "def sum_of_digits(num):\n total = 0\n for digit in str(num):\n total += int(digit)\n return total"
      ]
    },
    {
      "question": "How can you count the frequency of elements in a list in Python?",
      "answer": [
      "element_count = your_list.count(element)"
      ]
    },
    {
      "question": "Write a Python function to check if a number is a palindrome.",
      "answer": [
      "def is_palindrome(num):\n num_str = str(num)\n reversed_str = num_str[::-1]\n return num_str == reversed_str"
      ]
    },
    {
      "question": "Write a Python function to find the largest element in a list.",
      "answer": [
      "def find_largest_element(lst):\n if len(lst) == 0:\n return None\n largest = lst[0]\n for num in lst:\n if num > largest:\n largest = num\n return largest"
      ]
    },
    {
      "question": "Write a Python function to count the number of vowels in a string.",
      "answer": [
      "def count_vowels(string):\n count = 0\n vowels = ['a', 'e', 'i', 'o', 'u']\n for char in string:\n if char.lower() in vowels:\n count += 1\n return count"
      ]
    },
    {
      "question": "Write a Python function to check if a string is a palindrome.",
      "answer": [
      "def is_palindrome(string):\n string = string.lower()\n reversed_str = string[::-1]\n return string == reversed_str"
      ]
    },
    {
      "question": "Write a Python function to check if two strings are anagrams.",
      "answer": [
      "def is_anagram(str1, str2):\n str1 = str1.lower().replace(' ', '')\n str2 = str2.lower().replace(' ', '')\n return sorted(str1) == sorted(str2)"
      ]
    },
    {
      "question": "Write a Python function to find the factorial of a number.",
      "answer": [
      "def factorial(num):\n if num == 0:\n return 1\n else:\n return num * factorial(num - 1)"
      ]
    },
    {
      "question": "Write a Python function to check if a number is prime.",
      "answer": [
      "def is_prime(num):\n if num < 2:\n return False\n for i in range(2, int(num**0.5) + 1):\n if num % i == 0:\n return False\n return True"
      ]
    },
    {
      "question": "Write a Python function to count the occurrences of a specific element in a list.",
      "answer": [
      "def count_occurrences(lst, element):\n count = 0\n for item in lst:\n if item == element:\n count += 1\n return count"
      ]
    },
    {
      "question": "Write a Python function to find the common elements between two lists.",
      "answer": [
      "def find_common_elements(lst1, lst2):\n return list(set(lst1) & set(lst2))"
      ]
    },
    {
      "question": "Write a Python function to remove duplicates from a list.",
      "answer": [
      "def remove_duplicates(lst):\n return list(set(lst))"
      ]
    },
    {
      "question": "Write a Python function to sort a list of dictionaries based on a specific key.",
      "answer": [
      "def sort_list_of_dictionaries(lst, key):\n return sorted(lst, key=lambda x: x[key])"
      ]
    },
    {
      "question": "What is a decorator in Python?",
      "answer": [
        "A decorator in Python is a design pattern that allows a user to add new functionality to an existing object or function without modifying its structure. It uses the `@decorator_name` syntax to modify the behavior of the decorated object or function."
      ]
    },
    {
      "question": "What is the purpose of the `if __name__ == '__main__'` condition in Python?",
      "answer": [
        "The `if __name__ == '__main__'` condition is used to ensure that a specific block of code only runs when the script is executed directly and not when it is imported as a module. This condition allows the script to be used as both a standalone program and a reusable module."
      ]
    },
    {
      "question": "What is the difference between a list and a tuple in Python?",
      "answer": [
      "In Python, both lists and tuples are used to store multiple items, but they have some differences. Lists are mutable, meaning you can add, remove, or modify elements after creation. Tuples, on the other hand, are immutable and cannot be changed once created. Lists are represented with square brackets [ ], while tuples use parentheses ( )."
      ]
    },
    {
      "question": "How do you handle exceptions in Python?",
      "answer": [
      "In Python, exceptions are handled using try-except blocks. The code that might raise an exception is placed inside the try block, and the handling of the exception is defined in the except block. If an exception occurs, the code inside the except block is executed. You can also include an optional else block that is executed if no exception occurs, and a finally block that is executed regardless of whether an exception occurred or not."
      ]
    },
    {
      "question": "What is a lambda function in Python?",
      "answer": [
      "A lambda function in Python is an anonymous function that can be defined without a name. It is created using the lambda keyword, followed by a list of arguments, a colon, and the expression to be evaluated. Lambda functions are often used as one-liners for simple operations or as arguments to higher-order functions."
      ]
    },
    {
      "question": "How do you open and read a file in Python?",
      "answer": [
      "To open and read a file in Python, you can use the open() function. It takes the file path as the argument and returns a file object. You can then use various methods on the file object, such as read(), readline(), or readlines(), to read the contents of the file."
      ]
    },
    {
      "question": "What is the difference between == and is operators in Python?",
      "answer": [
      "In Python, the == operator is used to compare the values of two objects for equality. It checks if the values are the same. On the other hand, the is operator is used to compare the identity of two objects. It checks if the objects refer to the same memory location. While == compares values, is compares identities."
      ]
    },
    {
      "question": "What are generators in Python?",
      "answer": [
      "Generators in Python are a type of iterable, similar to lists or tuples. However, unlike lists, which store all the values in memory, generators generate the values on-the-fly as they are requested. They use the yield keyword instead of return to create iterable functions. Generators are memory-efficient and can be used to iterate over large datasets or infinite sequences."
      ]
    },
    {
      "question": "How do you sort a list in Python?",
      "answer": [
      "To sort a list in Python, you can use the sort() method or the sorted() function. The sort() method modifies the original list in-place and arranges the elements in ascending order. The sorted() function returns a new sorted list without modifying the original list. Both methods allow you to specify additional parameters for custom sorting criteria."
      ]
    },
    {
      "question": "What is a virtual environment in Python?",
      "answer": [
      "A virtual environment in Python is a self-contained directory that contains a Python interpreter and a set of installed packages. It allows you to create isolated environments for different projects, with their own dependencies and versions. Virtual environments are used to avoid conflicts between packages and provide a clean and reproducible development environment."
      ]
    },
    {
      "question": "What are docstrings in Python?",
      "answer": [
      "Docstrings in Python are used to document functions, classes, and modules. They are enclosed in triple quotes (''' or \"\"\") and provide a way to describe the purpose, usage, and parameters of the code. Docstrings can be accessed using the __doc__ attribute and are commonly used for generating documentation automatically."
      ]
    },
    {
      "question": "What is the purpose of the yield keyword in Python?",
      "answer": [
      "The yield keyword in Python is used in the context of generators. It is used to define a generator function, which is a special kind of iterator. When a generator function is called, it returns an iterator object that can be iterated over using a for loop or other iteration constructs. The yield keyword is used to yield values one at a time from the generator function, allowing lazy evaluation of elements in a sequence."
      ]
    },
    {
      "question": "How do you define a class in Python?",
      "answer": [
      "To define a class in Python, you use the class keyword followed by the class name and a colon. The class body is indented, and within the class, you can define attributes (variables) and methods (functions) that define the behavior of the class."
      ]
    },
    {
      "question": "What is the difference between instance variables and class variables in Python?",
      "answer": [
      "In Python, instance variables are specific to each instance (object) of a class. They are defined within methods or the constructor using the self keyword. Each instance has its own copy of instance variables. On the other hand, class variables are shared among all instances of a class. They are defined outside any method and are accessible using the class name. All instances of the class share the same class variables."
      ]
    },
    {
      "question": "What is the purpose of the __init__ method in Python classes?",
      "answer": [
      "The __init__ method in Python classes is a special method that gets called automatically when an object is created from a class. It is used to initialize the attributes of the object. The self parameter refers to the instance of the object being created, and you can use it to set initial values for the object's attributes."
      ]
    },
    {
      "question": "What is the purpose of the pass statement in Python?",
      "answer": [
      "The pass statement in Python is a placeholder statement that does nothing. It is used when a statement is syntactically required but you don't want to perform any action. It is commonly used as a placeholder in empty function or class definitions, or in conditional statements or loops where no action is needed in a particular branch or iteration."
      ]
    },
    {
      "question": "What is the purpose of the with statement in Python?",
      "answer": [
      "The with statement in Python is used for context management. It provides a convenient way to handle resources such as files or network connections that need to be properly managed and cleaned up after use. The with statement automatically takes care of opening and closing the resource, even if an exception occurs. It ensures that resources are released in a timely manner and helps prevent resource leaks."
      ]
    },
    {
      "question": "What is the difference between shallow copy and deep copy in Python?",
      "answer": [
      "In Python, a shallow copy of an object creates a new object that references the same memory as the original object. If the original object contains mutable elements, changes made to those elements will be reflected in both the original and copied objects. In contrast, a deep copy creates a new object and recursively copies all the objects it contains. The copied object is completely independent of the original object, and changes made to the original or copied object do not affect each other."
      ]
    },
    {
      "question": "How does exception handling work in Python?",
      "answer": [
      "Exception handling in Python is a mechanism that allows you to handle errors and exceptional situations in your code. It involves the use of try-except blocks, where you place the code that might raise an exception inside the try block and provide the handling code in the except block to handle the exception if it occurs."
      ]
    },
    {
      "question": "What is the Global Interpreter Lock (GIL) in Python?",
      "answer": [
      "The Global Interpreter Lock (GIL) is a mechanism used in the CPython implementation of Python. It is a lock that ensures only one thread executes Python bytecode at a time. This means that even on multi-core systems, Python threads cannot fully utilize multiple cores for CPU-bound tasks. However, the GIL does not affect the performance of I/O-bound tasks."
      ]
    },
    {
      "question": "What is metaprogramming in Python?",
      "answer": [
      "Metaprogramming in Python is a technique where a program can modify or generate code dynamically at runtime. It allows you to write code that can inspect and manipulate other code, such as creating classes and functions programmatically or modifying their behavior. Python provides several features like decorators, metaclasses, and the 'exec' function to support metaprogramming."
      ]
    },
    {
      "question": "What are context managers in Python?",
      "answer": [
      "Context managers in Python are objects that define the methods 'enter' and 'exit', which allow them to be used with the 'with' statement. They provide a convenient way to manage resources, such as files or network connections, by automatically acquiring and releasing them. The 'enter' method is called when entering the 'with' block, and the 'exit' method is called when exiting the block, even if an exception occurs."
      ]
    },
    {
      "question": "What are Python closures?",
      "answer": [
      "Python closures are functions that remember and access variables from the enclosing lexical scope, even when they are called outside that scope. In other words, a closure is a function object that has access to variables in its own scope, the scope of the enclosing function, and global variables. Closures are created when a nested function references a variable from its containing function."
      ]
    },
    {
      "question": "What is monkey patching in Python?",
      "answer": [
      "Monkey patching in Python refers to the practice of modifying or extending code at runtime, typically by adding, modifying, or replacing methods or attributes of existing classes or objects. It allows you to change the behavior of code without modifying its original source code. Monkey patching can be a powerful technique but should be used with caution as it can make code harder to understand and maintain."
      ]
    },
    {
      "question": "What is the Global Namespace and Local Namespace in Python?",
      "answer": [
      "In Python, the global namespace refers to the namespace that contains names defined at the top level of a module or script. It is accessible throughout the module or script. On the other hand, the local namespace refers to the namespace created when a function is called. It contains names defined within the function's scope and is destroyed when the function returns."
      ]
    },
    {
      "question": "What is the purpose of the 'name' variable in Python?",
      "answer": [
      "The 'name' variable in Python is a special variable that holds the name of the current module or script. When a module is imported, 'name' is set to the module's name. However, if the module is executed as the main script, 'name' is set to 'main'. This allows you to write code that will only be executed when the module is run directly and not when it is imported by another module."
      ]
    },
    {
      "question": "What are the differences between list comprehension and generator expression in Python?",
      "answer": [
      "List comprehension and generator expression are both constructs in Python used to create new sequences based on existing sequences. List comprehension returns a new list by iterating over an existing sequence and applying an expression to each element. Generator expression, on the other hand, returns an iterator that generates the elements on-the-fly as they are needed, without creating a new list in memory. Generator expressions are more memory-efficient for large sequences."
      ]
    },
    {
      "question": "What is the purpose of the 'else' clause in a 'for' loop in Python?",
      "answer": [
      "In Python, the 'else' clause in a 'for' loop is optional and is executed when the loop completes all its iterations without encountering a 'break' statement. It allows you to specify code that should be executed if the loop completes normally. The 'else' clause is not executed if the loop is terminated by a 'break' statement."
      ]
    },
    {
      "question": "What are some differences between sets and frozensets in Python?",
      "answer": [
      "Sets and frozensets are both unordered collections of unique elements in Python. The main difference is that sets are mutable, while frozensets are immutable. This means that you can add, remove, or modify elements in a set, but you cannot do so in a frozenset. Sets are useful for storing and manipulating data, while frozensets are useful when you need an immutable set that can be used as a dictionary key or an element in another set."
      ]
    },
    {
      "question": "The examples below show you how to write function accum:\naccum('abcd') -> 'A-Bb-Ccc-Dddd'\naccum('RqaEzty') -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'\naccum('cwAt') -> 'C-Ww-Aaa-Tttt'",
      "answer": [
        "def accum(s):",
        "  newString = \"\"",
        "  for i, char in enumerate(s):",
        "    newString += char.upper() + char.lower() * i + \"-\"",
        "  return newString[:-1]"
      ]
    }
  ],
  c: [
    {
      "question": "Write a function to calculate the factorial of a number.",
      "answer": [
        "#include <stdio.h>",
        "int factorial(int n) {",
        "    if (n <= 1)",
        "        return 1;",
        "    else",
        "        return n * factorial(n - 1);",
        "}",
      ]
    },
    {
      "question": "Write a program to check if a number is prime or not.",
      "answer": [
      "#include <stdio.h>",
      "int isPrime(int n) {",
      " if (n <= 1)",
      "   return 0;",
      " for (int i = 2; i * i <= n; i++) {",
      "     if (n % i == 0)",
      "        return 0;",
      "   }",
      " return 1;",
      "}"
      ]
    },
    {
      "question": "Write a function to reverse a string.",
      "answer": [
      "#include <stdio.h>",
      "#include <string.h>",
      "void reverseString(char* str) {",
      " int left = 0;",
      " int right = strlen(str) - 1;",
      " while (left < right) {",
      "     char temp = str[left];",
      "     str[left] = str[right];",
      "     str[right] = temp;",
      "     left++;",
      "     right--;",
      "   }",
      "}"
      ]
    },
    {
      "question": "Write a program to find the sum of all elements in an array.",
      "answer": [
      "#include <stdio.h>",
      "int arraySum(int arr[], int size) {",
      " int sum = 0;",
      " for (int i = 0; i < size; i++) {",
      "     sum += arr[i];",
      "   }",
      " return sum;",
      "}"
      ]
    },
    {
      "question": "Write a program to find the largest element in an array.",
      "answer": [
      "#include <stdio.h>",
      "int findLargest(int arr[], int size) {",
      " int largest = arr[0];",
      " for (int i = 1; i < size; i++) {",
      "     if (arr[i] > largest) {",
      "         largest = arr[i];",
      "   }",
      " }",
      " return largest;",
      "}"
      ]
    },
    {
      "question": "Write a program to count the number of vowels in a string.",
      "answer": [
      "#include <stdio.h>",
      "#include <string.h>",
      "int countVowels(char* str) {",
      " int count = 0;",
      " int length = strlen(str);",
      " for (int i = 0; i < length; i++) {",
      "   char ch = tolower(str[i]);",
      "   if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {",
      "       count++;",
      "   }",
      " }",
      " return count;",
      "}"
      ]
    },
    {
      "question": "Write a program to find the Fibonacci series up to a given number.",
      "answer": [
      "#include <stdio.h>",
      "void fibonacciSeries(int n) {",
      " int first = 0, second = 1;",
      " printf(\"Fibonacci series up to %d:\", n);",
      " printf(\"%d, %d, \", first, second);",
      " int next;",
      " while (1) {",
      "     next = first + second;",
      "     if (next > n) break;",
      "         first = second;",
      "         second = next;",
      "     }",
      "     printf(\"\\n\");",
      "}"
      ]
    },
    {
      "question": "Write a program to check if a string is a palindrome.",
      "answer": [
      "#include <stdio.h>",
      "#include <string.h>",
      "#include <stdbool.h>",
      "bool isPalindrome(char* str) {",
      " int left = 0;",
      " int right = strlen(str) - 1;",
      " while (left < right) {",
      "     if (str[left] != str[right]) {",
      "         return false;",
      "      }",
      "      left++;",
      "     right--;",
      "  }",
      " return true;",
      "}"
      ]
    },
    {
      "question": "Write a program to find the factorial of a number using recursion.",
      "answer": [
      "#include <stdio.h>",
      "int factorial(int n) {",
      " if (n <= 1)",
      "     return 1;",
      " else",
      " return n * factorial(n - 1);",
      "}"
      ]
    },
    {
      "question": "Write a program to find the sum of all even numbers between 1 and n.",
      "answer": [
      "#include <stdio.h>",
      "int sumOfEvenNumbers(int n) {",
      " int sum = 0;",
      " for (int i = 2; i <= n; i += 2) {",
      "     sum += i;",
      " }",
      " return sum;",
      "}"
      ]
    },
    {
      "question": "Write a program to find the GCD (Greatest Common Divisor) of two numbers.",
      "answer": [
      "#include <stdio.h>",
      "int gcd(int a, int b) {",
      " if (b == 0)",
      "     return a;",
      " return gcd(b, a % b);",
      "}"
      ]
    },
    {
      "question": "What is the syntax for declaring a variable in C?",
      "answer": [
      "In C, variables are declared using the following syntax: data_type variable_name;",
      "For example, to declare an integer variable named 'num', you would write: int num;",
      "You can also initialize a variable at the time of declaration, like this: data_type variable_name = initial_value;",
      "For example, to declare and initialize an integer variable named 'count' with a value of 0, you would write: int count = 0;"
      ]
    },
    {
      "question": "How do you define a function in C?",
      "answer": [
      "return_type function_name(parameter_list) {",
      " // function body",
      " // statements",
      "}",
      "",
      "The return_type is the data type of the value that the function returns. If the function doesn't return a value, you can use the 'void' keyword as the return_type.",
      "The function_name is the name of the function, which you can choose as per your preference.",
      "The parameter_list contains the data types and names of the parameters the function accepts, separated by commas.",
      "Inside the function body, you write the statements that define the functionality of the function."
      ]
    },
    {
      "question": "What is the syntax for a for loop in C, and what is its purpose?",
      "answer": [
      "for (initialization; condition; increment/decrement) {",
      " // loop body",
      " // statements",
      "}",
      "The initialization is an expression that sets the loop control variable to an initial value.",
      "The condition is a boolean expression that is evaluated before each iteration. If the condition is true, the loop body is executed; otherwise, the loop is terminated.",
      "The increment/decrement is an expression that updates the loop control variable after each iteration.",
      "Inside the loop body, you write the statements that are executed repeatedly until the condition becomes false."
      ]
    },
    {
      "question": "What is the syntax for a while loop in C, and what is its purpose?",
      "answer": [
      "The syntax for a while loop in C is as follows:",
      "while (condition) {",
      " // loop body",
      " // statements",
      "}",
      "The condition is a boolean expression that is evaluated before each iteration. If the condition is true, the loop body is executed; otherwise, the loop is terminated.",
      "Inside the loop body, you write the statements that are executed repeatedly until the condition becomes false."
      ]
    },
    {
      "question": "What is the syntax for a do-while loop in C, and what is its purpose?",
      "answer": [
      "The syntax for a do-while loop in C is as follows:",
      "do {",
      " // loop body",
      " // statements",
      "} while (condition);",
      "The loop body is executed at least once before the condition is checked.",
      "If the condition is true, the loop body is executed repeatedly; otherwise, the loop is terminated.",
      "Inside the loop body, you write the statements that are executed repeatedly until the condition becomes false."
      ]
    },
    {
      "question": "What is the syntax for a switch statement in C, and what is its purpose?",
      "answer": [
      "The syntax for a switch statement in C is as follows:",
      "switch (expression) {",
      " case constant1:",
      " // statements",
      " break;",
      " case constant2:",
      " // statements",
      " break;",
      " // more cases",
      " default:",
      " // statements",
      "}",
      "The switch statement evaluates the expression and compares it to the constants specified in each case.",
      "If a case matches the expression, the statements inside that case are executed until a break statement is encountered.",
      "If no case matches the expression, the statements inside the default case are executed.",
      "The break statement is used to exit the switch statement and prevent execution of the subsequent cases."
      ]
    },
    {
      "question": "What is the syntax for a structure in C, and what is its purpose?",
      "answer": [
      "In C, a structure is defined using the following syntax:",
      "struct struct_name {",
      " data_type1 member1;",
      " data_type2 member2;",
      " // more members",
      "};",
      "The struct_name is the name you give to the structure.",
      "Inside the structure, you define member variables with their respective data types.",
      "To declare a variable of the structure type, you can use 'struct struct_name variable_name;'",
      "You can access the members of a structure using the dot (.) operator, like 'variable_name.member_name;'"
      ]
    },
    {
      "question": "What is the syntax for an if-else statement in C, and what is its purpose?",
      "answer": [
      "The syntax for an if-else statement in C is as follows:",
      "if (condition) {",
      " // statements executed if condition is true",
      "} else {",
      " // statements executed if condition is false",
      "}",
      "The condition is a boolean expression that is evaluated.",
      "If the condition is true, the statements inside the if block are executed.",
      "If the condition is false, the statements inside the else block (if present) are executed."
      ]
    },
    {
      "question": "What is the syntax for a break statement in C, and what is its purpose?",
      "answer": [
      "The syntax for a break statement in C is as follows:",
      "break;",
      "The break statement is used to exit from a loop or switch statement.",
      "When a break statement is encountered, the control jumps to the end of the loop or switch statement.",
      "It is commonly used to terminate a loop prematurely or to exit a switch statement after a case is matched."
      ]
    },
    {
      "question": "What is the syntax for a continue statement in C, and what is its purpose?",
      "answer": [
      "The syntax for a continue statement in C is as follows:",
      "continue;",
      "The continue statement is used to skip the remaining statements in the current iteration of a loop.",
      "When a continue statement is encountered, the control jumps to the beginning of the next iteration.",
      "It is commonly used to skip specific iterations based on certain conditions."
      ]
    },
    {
      "question": "What is the syntax for a function pointer in C, and what is its purpose?",
      "answer": [
      "In C, a function pointer is declared using the following syntax:",
      "return_type (pointer_name)(parameter_list);",
      "The pointer_name is the name you give to the function pointer.",
      "The return_type is the data type of the value that the function returns.",
      "The parameter_list contains the data types and names of the parameters the function accepts, separated by commas.",
      "To assign a function to a function pointer, you can use the address-of operator (&) before the function name.",
      "For example: pointer_name = &function_name;",
      "To call a function through a function pointer, you can use the dereference operator () before the function pointer name.",
      "For example: (*pointer_name)(arguments);"
      ]
    },
    {
      "question": "How do you define a constant in C, and what is its purpose?",
      "answer": [
      "In C, you can define a constant using the 'const' keyword.",
      "The syntax for declaring a constant is: const data_type constant_name = value;",
      "For example, to define a constant integer named 'MAX_SIZE' with a value of 100, you would write: const int MAX_SIZE = 100;"
      ]
    },
    {
      "question": "What are the basic data types in C, and what are there purposes?",
      "answer": [
      "C provides several basic data types, including:",
      "int: used for integers, such as 10 or -5.",
      "float: used for single-precision floating-point numbers, such as 3.14 or -0.5.",
      "double: used for double-precision floating-point numbers, providing higher precision than float.",
      "char: used for individual characters, such as 'a' or '7'.",
      "void: used to indicate an empty or unknown type.",
      "These are some of the common data types in C, and there are additional data types as well."
      ]
    },
    {
      "question": "What is the syntax for a function declaration in C?",
      "answer": [
      "To declare a function in C, you use the following syntax:",
      "return_type function_name(parameter1_type parameter1, parameter2_type parameter2, ...);",
      "For example, to declare a function named 'add' that takes two integers as parameters and returns an integer, you would write: int add(int num1, int num2);",
      "Note that the function declaration ends with a semicolon."
      ]
    },
    {
      "question": "How do you define a function in C?",
      "answer": [
      "To define a function in C, you use the following syntax:",
      "return_type function_name(parameter1_type parameter1, parameter2_type parameter2, ...)",
      "{",
      " // Function body",
      " // Statements to be executed",
      " // Return statement",
      "}",
      "For example, to define the 'add' function mentioned earlier, you would write:",
      "int add(int num1, int num2)",
      "{",
      " int sum = num1 + num2;",
      " return sum;",
      "}"
      ]
    },
    {
      "question": "How do you take input from the user in C?",
      "answer": [
      "To take input from the user in C, you can use the 'scanf' function.",
      "The syntax for reading input using 'scanf' is:",
      "scanf('format_string', &variable1, &variable2, ...);",
      "The 'format_string' specifies the type of input to be read, and the '&' symbol is used to get the address of the variables.",
      "For example, to read an integer from the user and store it in a variable 'num', you can write:",
      "int num;",
      "scanf('%d', &num);",
      "Note that you need to include the 'stdio.h' header file at the beginning of your program to use 'scanf'."
      ]
    },
    {
      "question": "How do you define and access an array in C, and what is its purpose?",
      "answer": [
      "In C, an array is a collection of elements of the same type stored in contiguous memory locations.",
      "To define an array, you use the following syntax:",
      "data_type array_name[size];",
      "For example, to define an array of integers named 'numbers' with a size of 5, you can write:",
      "int numbers[5];",
      "To access elements of an array, you use the index inside square brackets, starting from 0.",
      "For example, to access the third element of the 'numbers' array, you can write:",
      "int x = numbers[2];",
      "Note that arrays in C are zero-indexed."
      ]
    },
    {
      "question": "What is the syntax for a 'continue' statement in C, and what is its purpose?",
      "answer": [
      "The 'continue' statement in C is used to skip the remaining code inside a loop and move to the next iteration.",
      "The syntax for the 'continue' statement is simply:",
      "continue;",
      "When 'continue' is encountered inside a loop, the control flow jumps to the next iteration, skipping any code below it in the loop.",
      "For example, in a 'for' loop, you can use 'continue' to skip printing even numbers:",
      "for (int i = 1; i <= 10; i++)",
      "{",
      " if (i % 2 == 0)",
      " {",
      " continue;",
      " }",
      " printf('%d\n', i);",
      "}"
      ]
    },
    {
      "question": "What is malloc, and what is its purpose?",
      "answer": [
      "In the C programming language, malloc is a library function used to dynamically allocate memory during runtime. Its purpose is to allocate a specified number of bytes in the heap memory and return a pointer to the beginning of the allocated memory block. This memory can be accessed and utilized by the program until it is explicitly freed using the free function. malloc is commonly used when the exact memory requirements of a program are not known at compile-time or when memory needs to be allocated and deallocated dynamically during program execution."
      ]
    },
    {
      "question": "What is the difference between malloc and calloc in C?",
      "answer": [
      "In C, malloc and calloc are both library functions used for dynamic memory allocation, but they have some differences. malloc is used to allocate a specified number of bytes in the heap memory and returns a pointer to the beginning of the allocated memory block. It does not initialize the allocated memory, so the contents of the memory block are undefined until explicitly set by the program.",
      "On the other hand, calloc is also used for dynamic memory allocation, but it initializes the allocated memory to zero. It takes two arguments: the number of elements to allocate and the size of each element. The total amount of memory allocated by calloc is the product of these two values. The memory returned by calloc is guaranteed to be initialized to zero, which can be useful in certain scenarios.",
      "In summary, malloc allocates memory without initializing it, while calloc allocates and initializes memory to zero."
      ]
    },
    {
      "question": "What is the purpose of the realloc function in C?",
      "answer": [
      "In C, the realloc function is used to change the size of a previously allocated memory block. It takes two arguments: a pointer to the previously allocated memory block and the new size in bytes. The realloc function performs the following actions:",
      "If the pointer is NULL, realloc behaves like malloc and allocates a new memory block of the specified size.",
      "If the new size is smaller than the original size, realloc truncates the memory block to the new size, discarding the excess bytes.",
      "If the new size is larger than the original size, realloc attempts to extend the memory block. If there is sufficient adjacent free memory, it may be able to accomplish this without moving the data. Otherwise, realloc allocates a new memory block, copies the contents of the old block to the new block, and frees the old block.",
      "If realloc fails to allocate the requested memory, it returns NULL, and the original memory block remains unchanged.",
      "The realloc function is useful when the size of a dynamically allocated memory block needs to be adjusted during program execution."
      ]
    },
    {
      "question": "What is the difference between stack and heap memory in C?",
      "answer": [
      "In C, stack and heap are two distinct regions of memory used for different purposes:",
      "Stack memory is used for storing local variables, function call information, and other data related to function execution. It is organized in a Last-In-First-Out (LIFO) structure, meaning the most recently allocated memory is the first to be deallocated. The size of the stack is typically fixed and limited, determined by the operating system or compiler settings.",
      "Heap memory, on the other hand, is used for dynamic memory allocation. It allows for the allocation and deallocation of memory blocks during runtime using functions like malloc, calloc, and realloc. The size of the heap is typically much larger than the stack and can grow or shrink as needed during program execution.",
      "In summary, stack memory is used for local variables and has a fixed size, while heap memory is used for dynamic memory allocation and has a larger size that can change during program execution."
      ]
    },
    {
      "question": "What is a pointer in C?",
      "answer": [
      "In C, a pointer is a variable that holds the memory address of another variable. It allows indirect access to the memory location and the value stored at that location. Pointers are often used for dynamic memory allocation, accessing arrays, implementing data structures, and interacting with hardware.",
      "To declare a pointer in C, the asterisk (*) symbol is used. For example, int ptr; declares a pointer variable named ptr that can store the memory address of an integer variable.",
      "Pointers can be manipulated using various operators, such as the dereference operator () to access the value at the memory address pointed to by the pointer, and the address-of operator (&) to get the memory address of a variable.",
      "Using pointers requires careful management to avoid errors like accessing invalid memory locations or causing memory leaks."
      ]
    },
    {
      "question": "What is the purpose of the sizeof operator in C?",
      "answer": [
      "In C, the sizeof operator is used to determine the size in bytes of a type or a variable. It is a compile-time unary operator that returns the size as a constant of type size_t.",
      "The sizeof operator can be used with various operands:",
      "sizeof(type): Returns the size of the specified type.",
      "sizeof(expression): Returns the size of the evaluated expression.",
      "sizeof(variable): Returns the size of the variable's type.",
      "The size calculated by sizeof depends on the implementation and the target architecture. It allows programs to work with types and variables in a more flexible and portable manner, ensuring that the correct amount of memory is allocated or accessed."
      ]
    },
    {
      "question": "Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.\nExample: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns '(123) 456-7890'",
      "answer": [
        "function createPhoneNumber(phnum, nums) {",
        " let numCount = 0;",
        " for (let i = 0; i < 15; i++) {",
        "   switch (i) {",
        "     case 0:",
        "       phnum[i] = '(';",
        "       break;",
        "     case 4:",
        "       phnum[i] = ')';",
        "       break;",
        "     case 5:",
        "       phnum[i] = ' ';",
        "       break;",
        "     case 9:",
        "       phnum[i] = '-';",
        "       break;",
        "     case 14:",
        "       phnum[i] = '\\0';",
        "       break;",
        "       break;",
        "     default:",
        "       phnum[i] = String.fromCharCode(nums[numCount] + 48);",
        "       numCount++;",
        "   }",
        " }",
        "}"
      ]
    },
    {
      "question": "The examples below show you how to write function accum:\naccum('abcd') -> 'A-Bb-Ccc-Dddd'\naccum('RqaEzty') -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'\naccum('cwAt') -> 'C-Ww-Aaa-Tttt'",
      "answer": [
        "#include <stdio.h>",
        "#include <ctype.h>",
        "#include <string.h>",
        "#include <stdlib.h>",
        "char *accum(const char *source){",
        "  int length = strlen(source);",
        "  char* result = (char*)malloc(length * (length + 1) / 2 + length);",
        "  int result_index = 0;",
        "",
        "  for (int i = 0; i < length; i++){",
        "    char ch = source[i];",
        "    result[result_index++] = toupper(ch);",
        "    ",
        "    for (int j = 0; j < i; j++){",
        "      result[result_index++] = tolower(ch);",
        "    }",
        "    if (i != length - 1){",
        "      result[result_index++] = '-';",
        "    }",
        "  }",
        "  result[result_index] = '\\0';",
        "  return result;",
        "}"
      ]
    },
    {
      "question": "You are given a string of space separated numbers, and have to return the highest and lowest number.\nExample: highAndLow(\"1 2 3 4 5\");  // return \"5 1\"",
      "answer": [
        '#include <stdio.h>',
        '#include <stdlib.h>',
        '#include <limits.h>',
        'void high_and_low (const char *strnum, char *result)',
        '{',
        '  int lowest = INT_MAX;',
        '  int highest = INT_MIN;',
        '  int current;',
        '  ',
        '  while(sscanf(strnum, "%d", &current)== 1){',
        '    if (current > highest){',
        '      highest = current;',
        '    }',
        '    if (current < lowest){',
        '      lowest = current;',
        '    }',
        '    while (*strnum != " " && *strnum != "\0"){',
        '      strnum++;',
        '    }',
        '    if (*strnum == " "){',
        '      strnum++;',
        '    }',
        '  }',
        '  sprintf(result, "%d %d", highest, lowest);',
        '}'
      ]
    }
  ],
}

export default questionsAnswers
