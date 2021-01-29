import React from 'react'

const color = {
    bug: 'red',
    test: 'green',
    error: 'grey',
    normal: 'black'
}

function TodoDisplay(props) {

    const listItems = props.list.map((todo, index, arr) => {
        return (
            <div key={todo.id} className="todo__list-item row" style={{ border: ` solid 2px ${color[todo.tag]}` }}>
                <div className="todo__item-name">Name:{todo.name}</div>
                <div className="todo__item-desc"> Description:{todo.description}</div>
                <div>
                    <button className="todo__item-remove" onClick={() => props.remove(todo)}>Remove</button>
                    <button className="todo__item-remove" onClick={() => props.edit(todo)}>Edit</button>
                </div>
            </div>
        )
    })
    return (
        <div style={{ paddingTop: '100px' }} >{listItems}

        </div>
    )
}

export default TodoDisplay
