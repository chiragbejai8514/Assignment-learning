let employees = [{
    imgSrc: '',
    designation: 'Trainee Software Engineer'
},
{
    imgSrc: '',
    designation: 'Software Engineer'
}];

function getEmployeeData() {
    employees.forEach(employee => {
        let template = employeeTemplate(employee);
        document.body.innerHTML += template;
    });
}

function employeeTemplate(data) {
    return ` <div class="id-card">
<div class="id-card__employee-photo" >
  <img src="" alt="">
</div>
<div class="id-card__employee-designation" >
 ${data.designation}
</div>
<div class="id-card__company-logo" >
  <h1 >CodeCraft</h1>
  <small>Driving Inspiration With Passion</small>
</div>
</div>`;
}