let workForce = [];

$(document).ready(readyNow);

function readyNow(){
    console.log('DOM, for the family!');

    $('#salaryCalculator').on('submit', addEmployee);
}

function addEmployee(event){

    event.preventDefault();

    console.log('Added new member to the family', $(this));

    let newEmployee = {
        firstName: $('#firstName'),
        lastName: $('#lastName'),
        idNum: $('#id'),
        jobTitle: $('#position'),
        salary: $('#salary')
    }

}