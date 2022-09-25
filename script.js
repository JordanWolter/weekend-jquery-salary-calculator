
//global variables
let employeeArray = [];
let i = 0;
let totalSalary = 0;
let toMoney = '';

$(document).ready(readyNow);

//function to load on ready
function readyNow(){

    console.log('DOM is ready');

    $('#salaryCalculator').on('submit', addEmployee);

    $('#employeeTable').on('click', '.delete', dltEmployee);

}

//function to add new employee on button press
function addEmployee(event){

    event.preventDefault();

    // if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#id').val() === '' || $('#position').val() === '' || $('#salary').val() === ''){
    //     alert('!!!MISSING INPUT FIELD!!!');
    //     return;
    // }

    if(missingInput()){
        //clearInput();
        return;
    }

    console.log('in addEmployee', $(this));

    let newEmployee = {
        employeeIndex: i,
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNum: $('#id').val(),
        jobTitle: $('#position').val(),
        salary: $('#salary').val()
    }

    console.log('New employee', newEmployee);
    employeeArray.push(newEmployee);
    console.log('Array of employees', employeeArray);

    //trying to figure out how to delete off [i]
    i++;
    console.log('Index last added', newEmployee.employeeIndex);

    let employeeSalary = parseInt(newEmployee.salary);
    
    totalSalary += employeeSalary;
    console.log('Total salary', totalSalary);
    
    render();
    checkTotal();

}

//function to output table to the DOM
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
        <td>$<span id="salary">${employee.salary}</span></td>
        <td id="index">${employeeArray.indexOf(employee)}</td>
        <td>
        <button class="delete">Delete</button>
        </td>
        </tr>
        `)
    }
    
    toMoney = totalSalary.toLocaleString("en-US");

    $('#totalMonthly').empty();
    $('#totalMonthly').append(toMoney);

    clearInput();
    checkTotal();

}

//function to delete employee
function dltEmployee(){
    console.log('In dltEmployee $(this)', $(this));

    $(this).parent().parent().remove();
    let subSalary = $(this).parent().parent().find("#salary").html();
    let subMonthly = parseInt(subSalary);

    console.log('Test to see if changed to number', subMonthly);

    totalSalary -= subMonthly;
    toMoney = totalSalary.toLocaleString("en-US");
    
    $('#totalMonthly').empty();
    $('#totalMonthly').append(toMoney);

    //figured out how to delete from html index
    let deleteThis = $(this).parent().parent().find('#index').html();
    employeeArray.splice(deleteThis, 1);
    
    console.log('Array should have the deleted one removed',employeeArray);
    checkTotal();

}

function checkTotal(){
    if(totalSalary >= 20000){
        $('#background').css('background-color', 'red')
    }else{
        $('#background').css('background-color', 'white')
    }
}

//funtion to reset all input fields
function clearInput(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#position').val('');
    $('#salary').val('');
}

//function to test if any fields are missing and 
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