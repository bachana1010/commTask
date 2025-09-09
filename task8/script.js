// 1 ნაწილი
const a = 15;
const b = 4;
console.log("ჯამი:", a + b);
console.log("სხვაობა:", a - b);
console.log("ნამრავლი:", a * b);
console.log("განაყოფი:", a / b);
console.log("ნაშთი:", a % b);

// 2 ნაწილი
console.log("a > b:", a > b);
console.log("a === b:", a === b);
console.log("a იყოფა b-ზე:", a % b === 0);


// 3 ნაწილი
let arr = [3, 7, 12, 5, 9];
console.log("პირველი და ბოლო:", arr[0], arr[arr.length - 1]);
console.log("სიგრძე:", arr.length);
arr.push(20, 25);
console.log("push-ის შემდეგ:", arr);
arr.pop();
console.log("pop-ის შემდეგ:", arr);
const midIndex = Math.floor((arr.length - 1) / 2);
console.log("შუა ელემენტი:", arr[midIndex]);
