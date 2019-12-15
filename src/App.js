import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        todos: todosData
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(id) {
      this.setState (prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if(todo.id === id) {
                todo.completed = !todo.completed 
  console.log("test", id)
              }
              return todo
          })
          return {
              todo: updatedTodos
          }
      })
  }

  render(){
    const todoItems = this.state.todos.map(item => 
      <TodoItem 
                key={item.id}
                item={item}
                handleChange={this.handleChange}
      />
      )

    return (
      <h2>
      <div className="App-wrapper">
        <Header />
          <div className="todoitems-list"> {todoItems} </div>
        <Footer />

      </div>  
      </h2>
    )
  }
}

export default App
