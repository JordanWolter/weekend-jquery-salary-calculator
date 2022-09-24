let workForce = [];
let i = 0;

$(document).ready(readyNow);

function readyNow(){
    console.log('DOM, for the family!');

    $('#salaryCalculator').on('submit', addEmployee);
}

function addEmployee(event){

    event.preventDefault();

    console.log('Adding new member to the family', $(this));

    let newEmployee = {
        employeeIndex: i,
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNum: $('#id').val(),
        jobTitle: $('#position').val(),
        salary: $('#salary').val()
    }

    console.log('New family member is', newEmployee);
    workForce.push(newEmployee);
    console.log('Members of the family', workForce);

    console.log(newEmployee.employeeIndex);
    i++
    console.log(newEmployee.employeeIndex);

    render()

}

function render(){
    $('#employeeTable > :not(.rowTitle) a').empty();

    for(let employee of workForce){
        $('#employeeTable').append(`
        <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNum}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <td>
        <button class="delete">Delete</button>
        </td>
        </tr>
        `)
    }
}

function dltEmployee(){
    console.log('In dltEmployee $(this)', $(this));

    $(this).partent().partent().remove();

}