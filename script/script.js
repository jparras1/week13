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
            console.log(student);
            myStudents.push(student);
            // check if an entry with student's infor is in the array don't push it
            firstNameInput.value = "";
            lastNameInput.value = "";
            programNameInput.value = "";
        }
        else if (event.target.id === "background-button"){
            
        }
    }
}

bodyRef.addEventListener("click", clickHandler);