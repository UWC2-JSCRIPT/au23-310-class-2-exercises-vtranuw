// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const myInfo = {
  firstName: "Viet",
  lastName: "Tran",
  "favorite food": "Noodle Soup (AKA Pho)",
  bestFriend: {
    firstName: "Hugh",
    lastName: "Dempsey",
    "favorite food": "Hot Dog",
  },
};

console.log(myInfo);

// 2. console.log best friend's firstName and your favorite food
console.log(`\nMy Best friend's first name is: ${myInfo.bestFriend.firstName}`);
console.log(`My favorite food is: ${myInfo["favorite food"]}\n`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToeBoard = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"],
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToeBoard[0][2] = "O";

// 5. Log the grid to the console.
for (let row of ticTacToeBoard) {
  console.log(row.join(" "));
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const myFirstEmail = "vht@gmail.com"; // this is  valid email
const mySecondEmail = "vht@.com"; // this is invalid email

// check validation of the emails
if (emailPattern.test(myFirstEmail)) {
  console.log(`\n${myFirstEmail} is valid`);
} else {
  console.log(`\n${myFirstEmail} is invalid !!!!`);
}

if (emailPattern.test(mySecondEmail)) {
  console.log(`\n${mySecondEmail} is valid`);
} else {
  console.log(`\n${mySecondEmail} is invalid !!!!`);
}

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = "1/21/2019";

const convertedAssignmentDate = new Date(assignmentDate);

console.log(`\nThe assignment date is ${convertedAssignmentDate}`);

// 8. Create a new Date instance to represent the dueDate.
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(convertedAssignmentDate);

dueDate.setDate(convertedAssignmentDate.getDate() + 7);

console.log(`\nThe due date of the assignment Date is ${dueDate}`);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Format the due date for the HTML <time> tag
const formattedDueDate = dueDate.toISOString().split("T")[0];
const month = months[dueDate.getMonth()];
const day = dueDate.getDate();
const year = dueDate.getFullYear();

// Create the HTML <time> tag in the desired format
const dueDateHTML = `<time datetime="${formattedDueDate}">${month} ${day}, ${year}</time>`;

// 10. log this value using console.log
console.log(`\n${dueDateHTML}`);
