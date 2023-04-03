// const bgButton = document.querySelector(".background-button");
// const submitButton = document.querySelector(".sub-button");
const bodyRef = document.body;

let myStudents = [];

function clickHandler (event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.textContent === "Submit"){
            const firstNameInput = document.querySelector("#firstname");
            const lastNameInput = document.querySelector("#lastname");
            const programNameInput = document.querySelector("#progname");
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: programNameInput.value
            }
            
            // check if an entry with student's infor is in the array don't push it
            let studentExists = false;
            for (let item of myStudents) {
                if (
                    item.firstName === student.firstName &&
                    item.lastName === student.lastName &&
                    item.progName === student.progName) {
                        alert("student exists");
                        studentExists = true;
                    }
            }
            if (studentExists === false) {
                myStudents.push(student);
                addsStudenttoList(student);
            }
            firstNameInput.value = "";
            lastNameInput.value = "";
            programNameInput.value = "";

        }
        else if (event.target.id === "background-button"){
            
        }
    }
}

bodyRef.addEventListener("click", clickHandler);

function addsStudenttoList (studentInfo) {
    let newList = document.createElement("li");
    newList.textContent = `${studentInfo["firstName"]} ${studentInfo["lastName"]}`;
    let prog = document.querySelectorAll(".enroll ul");
    for (let item of prog) {
        if (item.className.includes(studentInfo["progName"])){
            item.appendChild(newList);
        }
    }
}