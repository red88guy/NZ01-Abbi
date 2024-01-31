let score = parseInt(prompt("Enter the score"))



// Human  Error Check
while (score>100 || score <0 || score == undefined) {
    console.log("Please enter number between 0 - 100");
    score = parseInt(prompt("Enter the score"));
}

if (score >=90) {
    console.log("Grade A");
}
else if (score >=80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 60) {
    console.log("Grade D");
}
else {
// else if (score < 60) {
    console.log("Grade E");
}

// switch(true) {
//     case >=90 :
//         console.log("Grade A");
//         break;
// }