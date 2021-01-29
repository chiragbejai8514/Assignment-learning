import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        const employee = this.props.data.map(item => {
            const { id, employee_name, employee_salary, employee_age } = item

            return (
                <div key={item.id} className="employee-details row" >
                    <div className="todo__item-name">Id:{id}</div>
                    <div className="todo__item-desc"> Name:{employee_name}</div>
                    <div className="todo__item-desc"> Salary:{employee_salary}</div>
                    <div className="todo__item-desc"> Age:{employee_age}</div>
                    <div>
                        <button className="todo__item-remove" onClick={() => this.props.remove(item)}>Remove</button>
                        <button className="todo__item-remove" onClick={() => this.props.edit(item)}>Edit</button>
                    </div>
                </div>
            )
        }
        )
        return (
            <>
                {employee}
            </>
        )
    }
}
