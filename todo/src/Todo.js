import React, { useState, useEffect } from 'react'

import todoList from './data.json'

import TodoDisplay from './TodoDisplay'

import FormMain from './FormMain'


function Todo() {
    const [todoData, setTodoData] = useState(todoList.todo)

    const [editData, setEditData] = useState({
        name: '',
        description: '',
        tag: ''
    })

    useEffect(() => {
        console.log(todoData)

    })

    const removeTodo = (item) => {
        setTodoData(todoData.filter(todo => todo.id !== item.id))
    };

    const editTodo = (item) => {

        setEditData(item)
    };


    const handleSubmit = (formData) => {
        let newData = {}
        newData = {
            name: formData.name.value,
            description: formData.description.value,
            tag: formData.tag.value
        }
        console.log(newData)

        if (editData.id) {
            todoData.map((todo, index) => {
                if (todo.id === editData.id) {
                    // setTodoData(prevState => {
                    //     return {

                    //     }
                    // })
                    setTodoData(prevState => {
                        prevState[editData.id - 1] = { 'id': todo.id, ...newData };
                        return (prevState)
                    })
                }
                return todo
            })
            console.log(todoData)

            return

        }
        const randId = Math.random();
        newData.id = randId;
        setTodoData([...todoData, { 'id': newData.id, ...newData }])



        // if (newTask.id) {
        //     this.state.todos.map((todo, index) => {
        //         if (todo.id === this.state.todoId) {
        //             this.setState(prevState => {
        //                 prevState.todos[index] = newTask;
        //                 return {
        //                     prevState,
        //                     todoId: '',
        //                     inputArea: {
        //                         name: '',
        //                         description: '',
        //                         tag: ''
        //                     }
        //                 }
        //             })
        //         }
        //         return todo
        //     })
        //     return
        // }


        // const randId = Math.random();
        // newTask.id = randId
        // this.setState({
        //     todos: this.state.todos.concat(newTask),
        //     inputArea: {
        //         name: '',
        //         description: '',
        //         tag: ''
        //     }
        // })
    }


    return (
        <React.Fragment>

            <FormMain editData={editData} handleSubmit={handleSubmit} />

            <TodoDisplay list={todoData} edit={editTodo} remove={removeTodo} />
        </React.Fragment >

    )
}

export default Todo
