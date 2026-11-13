// Function to calculate average
function calculateAverage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    let avg = total / 3;
    return avg;
}

// Function to determine grade
function calculateGrade(avg) {
    if (avg >= 80 && avg <= 100) {
        return "A";
    } else if (avg >= 70) {
        return "B";
    } else if (avg >= 60) {
        return "C";
    } else if (avg >= 50) {
        return "D";
    } else {
        return "E";
    }
}


let studentName = prompt("Enter student's full name:");
let course = prompt("Enter course name:");
let mark1 = Number(prompt("Enter mark for subject 1:"));
let mark2 = Number(prompt("Enter mark for subject 2:"));
let mark3 = Number(prompt("Enter mark for subject 3:"));


if (studentName == "" || course == "" || isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
    alert("Please fill in all fields with valid numbers!");
} else if (mark1 > 100 || mark2 > 100 || mark3 > 100 || mark1 < 0 || mark2 < 0 || mark3 < 0) {
    alert("Marks must be between 0 and 100!");
} else {

    let finalAverage = calculateAverage(mark1, mark2, mark3);
    let finalGrade = calculateGrade(finalAverage);

    
    console.log("Student Name: " + studentName);
    console.log("Course: " + course);
    console.log("Average Marks: " + finalAverage);
    console.log("Grade: " + finalGrade);

    alert("Student: " + studentName + "\nAverage: " + finalAverage + "\nGrade: " + finalGrade);
}