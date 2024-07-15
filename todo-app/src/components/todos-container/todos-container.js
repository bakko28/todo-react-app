import React, { Component } from 'react'
import TodosItem from '../todos-item/todos-item'

export class Todos extends Component {
    state = {
        todos: []
    }

    generateKey = () => Math.random().toString(36).substring(6)

    createTodosItem = (e) => {
        if (e.which === 13 || e.key === 'Enter' || e.code === 'Enter') {
            const inputValue = e.target.value
            e.target.value = ''
    
            this.setState((prevState) => {
                const newTodoItem = {
                    content: inputValue,
                    completed: false,
                    key: this.generateKey()
                }
                
                // Создаем новый массив и добавляем новый элемент
                const newArr = [...prevState.todos, newTodoItem]
        
                return {
                    todos: newArr
                }
            })
        }
    }    

    toComplete = (key) => {
        this.setState(({todos}) => {
            const newArr = [...todos]
            newArr.forEach(item => {
                if(item.key === key) {
                    item.completed = true
                }
            })
            return {
                todos: newArr
            }
        })
    }

    onDelete = (key) => {
        this.setState(({todos}) => {
            return {
                todos: todos.filter(item => item.key !== key)
            }
        })
    }

    render() {
        const {todos} = this.state

        const todoList = (todos.length > 0) ? this.state.todos.map(item => <TodosItem 
            content={item.content} 
            completed={item.completed}
            key={item.key}
            id={item.key}
            toComplete={this.toComplete}
            onDelete={this.onDelete}
        />) : []
            
 

        return (
           <View elems={todoList} createTodosItem={this.createTodosItem} /> 
        )
    }
}

const View = ({elems, createTodosItem}) => {
    return (
        <div className='todos'>
            <div className="todos__input-field">
                <input  type="text" 
                        className='input-field' 
                        placeholder='What needs to be done?'
                        onKeyDown={createTodosItem}/>
            </div>

            {elems}
        </div>
    )
}

export default Todos
