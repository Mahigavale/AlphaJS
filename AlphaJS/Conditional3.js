var marks=35;
if (marks > 10 && marks < 20) {
    console.log("Failed, very badly");

}
else if (marks > 20 && marks <= 35) {
    console.log("little scope");

}
else if (marks > 35 && marks < 45) {
    console.log("passed on the edge");

}
else if (marks > 45 && marks < 70) {
    console.log("A");

}
else {

    console.log("A+");

}