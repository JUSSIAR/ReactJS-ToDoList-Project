import React from 'react'
import './App.css'
import './styles.css'
import NewCase from './components/newCase/newCase.js'
import TaskList from './components/taskList/taskList.js'

const listOfTasks = [
  {
    id: 0,
    name: 'Git',
    description: 'I have to read git-book',
    completed: 1
  },
  {
    id: 1,
    name: 'Math',
    description: 'I have to study hard',
    completed: 0
  },
  {
    id: 2,
    name: 'Web',
    description: 'I have to develop ToDoList',
    completed: 0
  },
  {
    id: 3,
    name: 'Sport',
    description: 'I have to go to a gym',
    completed: 1
  },
  {
    id: 4,
    name: 'Household',
    description: 'I have to wash up',
    completed: 0
  }
]

class MyToDoList extends React.Component {
  state = {
    list : listOfTasks.map(it => {
      return {
        id : it.id,
        name : it.name,
        description : it.description,
        completed : it.completed
      }
    }),
    form : {
      name: "",
      description: "" 
    }
  }

  changeStatus = (id) => {
    this.setState(cur => {
      let copy = cur.list.map(it => {
        return {
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        }
      })
      const newVal = 1 - copy[id].completed
      copy[id].completed = newVal
      return {
        list : copy
      }
    })
  }

  changeInput1 = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          name : value,
          description : cur.form.description
        }
      }
    })
  }

  changeInput2 = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          name : cur.form.name,
          description : value
        }
      }
    })
  }

  pushNewItem = () => {
    if (this.state.list.length >= 7) {
      alert("Слишком много дел...")
      console.log("list error\n")
      return
    }
    this.setState(cur => {
      const new_list = [
        ...cur.list,
        { 
          id : cur.list.length,
          name : cur.form.name,
          description : cur.form.description,
          completed : 0
        }
      ]
      return {
        list : new_list
      }
    })
  }

  render() {
    return (
      <div className = "back">
        <div className = "content">
          <div id = "header1">
            <h1> ToDoList </h1>
          </div>
          <TaskList
            list = {this.state.list}
            click = {this.changeStatus}
          />
          <NewCase
            props = {this.state.form}
            change1 = {this.changeInput1}
            change2 = {this.changeInput2}
            click = {this.pushNewItem}
          />
        </div>
      </div>
    )
  }
}

export default MyToDoList
