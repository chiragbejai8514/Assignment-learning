import React from 'react';
import './App.css';

// import Form from './Form'

// import FormA from './FormA'


import Todo from './Todo'


import Employee from './Employee'




const UserContext = React.createContext("chiraaag")



class App extends React.Component {

  // constructor(props) {

  //   super(props);
  //   this.state = {
  //     todoId: '',
  //     todos: data.todo,
  //     temp: 1,
  //     inputArea: {
  //       name: '',
  //       description: '',
  //       tag: ''
  //     },
  //     myarray: [1, 2, 3, 4, 5]
  //   }
  // }

  // removeTodo = (item) => {
  //   this.setState({
  //     todos: this.state.todos.filter(todo => todo.id !== item.id)
  //   })
  // };

  // editTodo = (item) => {
  //   const result = item
  //   // this.child.current.state.form = result[0]
  //   this.setState({
  //     todoId: item.id,
  //     inputArea: result
  //   })
  // };

  // handleSubmit = (form) => {
  //   console.log(form)
  //   // event.preventDefault();
  //   const newTask = {
  //     ...form
  //   };

  //   if (newTask.id) {
  //     this.state.todos.map((todo, index) => {
  //       if (todo.id === this.state.todoId) {
  //         this.setState(prevState => {
  //           prevState.todos[index] = newTask;
  //           return {
  //             prevState,
  //             todoId: '',
  //             inputArea: {
  //               name: '',
  //               description: '',
  //               tag: ''
  //             }
  //           }
  //         })
  //       }
  //       return todo
  //     })
  //     return
  //   }
  //   const randId = Math.random();
  //   newTask.id = randId
  //   this.setState({
  //     todos: this.state.todos.concat(newTask),
  //     inputArea: {
  //       name: '',
  //       description: '',
  //       tag: ''
  //     }
  //   })
  // }

  // shouldComponentUpdate(props, state) {
  //   if (state.myarray[0] < 100) { return true }
  //   else return false
  // }

  render = () => {
    // this.state.myarray.map((item, index) => {
    //   // console.log([item])
    //   this.setState(prevState => {
    //     prevState.myarray[index] = item * 100
    //     return {
    //       prevState
    //     }
    //   })
    // }
    // )

    // console.log(this)

    // const { todos } = this.state
    // const listItems = todos.map((item, index, arr) => {
    //   return (
    //     <div key={item.id} className="todo__list-item row" style={{ border: ` solid 2px ${color[item.tag]}` }}>
    //       <div className="todo__item-name">Name:{item.name}</div>
    //       <div className="todo__item-desc"> Description:{item.description}</div>
    //       <div>
    //         <button className="todo__item-remove" onClick={() => this.removeTodo(item)}>Remove</button>
    //         <button className="todo__item-remove" onClick={() => this.editTodo(item)}>Edit</button>
    //       </div>
    //     </div>
    //   )
    // })

    return (

      // < div className="todo" >
      //   <div className="container">
      //     <div className="heading column">TODO</div>
      //     <Form handleSubmit={this.handleSubmit} temps={this.state.inputArea} temp={this.state.temp} />
      //     <UserContext.Provider value='hello'>
      //       <FormA />
      //     </UserContext.Provider>

      //     <div className="todo__list-body">
      //       {listItems}
      //     </div>
      //   </div>
      // </div >
      <React.Fragment>
        {/* <Todo /> */}
        <Employee />
      </React.Fragment>
    )
  }
}

export default App;


export { UserContext }

