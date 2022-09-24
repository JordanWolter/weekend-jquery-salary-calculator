let employeeArray = [];
let i = 0;

$(document).ready(readyNow);

function readyNow(){
    console.log('DOM, for the family!');

    $('#salaryCalculator').on('submit', addEmployee);

    $('#employeeTable').on('click', '.delete', dltEmployee);
}

function addEmployee(event){

    event.preventDefault();

    // if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#id').val() === '' || $('#position').val() === '' || $('#salary').val() === ''){
    //     alert('!!!MISSING INPUT FIELD!!!');
    //     return;
    // }

    if(missingInput()){
        clearInput();
        return;
    }

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
    employeeArray.push(newEmployee);
    console.log('Members of the family', employeeArray);

    i++
    console.log(newEmployee.employeeIndex);

    render();


}

function render(){
    //$('#employeeTable > tr > :not(.rowTitle)').empty();
    //$('#employeeTable').empty();
    $('#employeeTable').find('tr:gt(0)').remove();

    //<td id='delete'>${employeeArray.indexOf(employee)}</td>

    for(let employee of employeeArray){
        $('#employeeTable').append(`
        <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNum}</td>
        <td>${employee.jobTitle}</td>
        <td>$${employee.salary}</td>
        <td>
        <button class="delete">Delete</button>
        </td>
        </tr>
        `)
    }
    clearInput();

}

function dltEmployee(employee){
    console.log('In dltEmployee $(this)', $(this));

    $(this).parent().parent().remove();

    //let deleteThis = $(this).parent().parent().find('#delete').html();

    let deleteThis = $(this).parent().parent().find(employee.employeeIndex);
    console.log(deleteThis);

    employeeArray.splice(deleteThis, 1);

}

function clearInput(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#position').val('');
    $('#salary').val('');
}

function missingInput(){
    if($('#firstName').val() === ''){
        alert('!!!MISSING FIRST NAME FIELD!!!');
        return true;
    }else if($('#lastName').val() === ''){
        alert('!!!MISSING LAST NAME FIELD!!!');
        return true;
    }else if($('#id').val() === ''){
        alert('!!!MISSING ID FIELD!!!');
        return true;
    }else if($('#position').val() === '' ){
        alert('!!!MISSING TITLE FIELD!!!');
        return true;
    }else if($('#salary').val() === ''){
        alert('!!!MISSING SALARY FIELD!!!');
        return true;
    }else{
        console.log('No missing inputs');
        return false;
    }
}