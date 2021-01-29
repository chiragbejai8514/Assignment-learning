import React, { Component } from 'react'

import EmployeeList from './EmployeeList'


import EmployeeForm from './EmployeeForm'

import SearchBar from './SearchBar'


import './Employee.css'
const url = 'http://dummy.restapiexample.com/api/v1/'

const initialEdit = {
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: '',

}

class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editEmployee: initialEdit,
            isLoaded: false,
            searchElement: '',
            searchArray: []
        }
    }

    componentDidMount() {
        console.log(11)
        fetch(url + 'employees')
            .then(response => response.json())
            .then(json => this.setState({
                employees: json.data,
                isLoaded: true,

            }, () => console.log(json.data)))
            .catch(err => console.log(err))
    }


    removeEmployee = (item) => {
        fetch(url + 'delete/' + item.id, {
            method: 'DELETE',
            headers: new Headers(),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    employees: this.state.employees.filter(employee => employee.id !== item.id)
                })
            })
            .catch((err) => console.log(err))
    };



    edit = (item) => {
        fetch(url + 'update/' + item.id, {
            method: 'PUT',
            body: JSON.stringify({ 'id': item.id, 'name': item.employee_name, 'salary': item.employee_salary, 'age': item.employee_age })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
        this.setState({
            editEmployee: item

        })
    };

    clearEditEmployee = () => (
        this.setState({
            editEmployee: {
                id: '',
                employee_name: '',
                employee_salary: '',
                employee_age: ''
            }
        })

    )

    handleSubmit = (form) => {
        fetch(url + 'create', {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({ 'id': form.id, 'name': form.employee_name, 'salary': form.employee_salary, 'age': form.employee_age })
        }).then((res) => res.json())
            .then((data) => {
                const { name, salary, age } = data.data
                if (form.id) {
                    if (this.state.editEmployee.id) {
                        let newTemp = this.state.employees;
                        this.state.employees.map((employee, index) => {
                            if (employee.id === this.state.editEmployee.id) {
                                newTemp[index] = { id: employee.id, employee_name: name, employee_salary: Number(salary), employee_age: Number(age) }
                                this.setState({
                                    employees: newTemp,
                                })
                                this.clearEditEmployee()
                            }
                            return this.state.employees
                        })
                        return
                    }
                }
                const randId = Math.floor(Math.random() * 10) + 25
                this.setState({
                    employees: [...this.state.employees, {
                        id: randId,
                        employee_name: name,
                        employee_salary: Number(salary),
                        employee_age: Number(age)
                    }],
                })
                this.clearEditEmployee()
            })
            .catch((err) => console.log(err))
    }


    searchEmployee = (searchElement) => {



        if (searchElement) {

            let joined = [];
            this.state.employees.map(employee => {
                if (employee.employee_name.includes(searchElement)) {
                    // console.log(employee)
                    joined.push(employee);


                }
            })
            console.log('Here', joined)



        }


        // if (searchElement !== '') {
        //     this.setState({ searchElement: [] })
        //     this.state.employees.map(employee => {
        //         if (employee.employee_name.includes(searchElement)) {
        //             let joined = this.state.searchArrray.concat(employee);

        //             this.setState({ searchArrray: joined }, () => console.log(this.state.searchArrray))
        //         }
        //     })

        // }

    }

    render() {
        const { editEmployee, employees, isLoaded } = this.state
        const { handleSubmit, edit, removeEmployee, searchEmployee } = this
        if (!isLoaded) {
            return <h1 > Loading </h1>
        }
        return (<>
            <EmployeeForm
                edit={editEmployee}
                submit={handleSubmit}
            />
            <SearchBar search={searchEmployee} />
            <EmployeeList
                data={employees}
                edit={edit}
                remove={removeEmployee} />
        </>
        )
    }
}

export default Employee