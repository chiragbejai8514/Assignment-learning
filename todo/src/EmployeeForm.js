import React, { Component } from 'react'


const initial_state = {
    employee_name: '',
    employee_salary: '',
    employee_age: ''

}

class EmployeeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editData: {
                employee_name: '',
                employee_salary: '',
                employee_age: ''

            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.edit !== this.props.edit) {
            this.setState({
                editData: this.props.edit
            })

        }
    }

    handleChange = (event) => {
        const inputValue = this.state.editData
        const { name, value } = event.target
        inputValue[name] = value
        this.setState({
            editData: inputValue
        })
    }
    clearForm = () => {
        this.setState({
            editData: {
                employee_name: '',
                employee_salary: '',
                employee_age: ''
            }
        })
    }

    render() {
        const { employee_name, employee_salary, employee_age, id } = this.state.editData
        const { handleChange, clearForm } = this

        return (
            <div style={{ border: 'solid 2px red', padding: '10px', maxWidth: '700px' }}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.submit(this.state.editData)
                }}>
                    <label>Name<input name="employee_name" value={employee_name} onChange={handleChange} /></label>
                    <label>Salary<input name="employee_salary" value={employee_salary} onChange={handleChange} /></label>
                    <label>Age<input name="employee_age" value={employee_age} onChange={handleChange} /></label>

                    {(id) ? <button style={{ marginTop: '10px' }} type="submit" name="update">Update</button> : <button style={{ marginTop: '10px' }} type="submit" name="update">Submit</button>}
                </form>
                <button style={{ marginTop: '10px' }} onClick={() => clearForm()}>Reset</button>

            </div >
        )
    }
}

export default EmployeeForm
