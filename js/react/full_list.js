import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from '../parse_auth';
import {TodoCollection} from '../resources';
import {TodoView} from '../views';
import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './todo_list';
import TodoModel from '../resources/new_model';



export default React.createClass({
  getInitialState() {
    return {
      message: 'Add a To-Do'

    };
  },

  updateMessage(event) {
    let newMessage = event.target.value;

    this.setState({
      message: newMessage,
    });
  },

  addTodo(){
    let newTitle = document.querySelector('.newTodo').value;
      let todos = new TodoCollection();
      todos.fetch().then(()=>{
         let NewTodo = new TodoModel({
              title: newTitle
          });
              NewTodo.save();
              location.reload(true);
        })
},
completeTask(x){
    let todos = new TodoCollection();
    todos.fetch().then(()=>{
         let CompletedTodo = new TodoModel({
            objectId: x
         });
         console.log(CompletedTodo);
         CompletedTodo.destroy();
      });
      
  },

processData(item, wat){
  return <div key={wat}>
            <h1>{item.title}</h1><button onClick={()=>this.completeTask(item.objectId)}>Done</button>
         </div>   


},

  render() {
    return (
      <ul>
        <input type='text' onChange={this.updateMessage} 
             className='newTodo' value={this.state.message}/>
             <button onClick={this.addTodo}>Add</button>
        <TodoList hamster={this.props.scrub.map(this.processData)}/>
        <h1>Hey</h1>
      </ul>
    );
  }
})

