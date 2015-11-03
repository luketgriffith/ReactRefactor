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
  wasClicked(event){
    event.target.value= '';
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
      var now = moment().toString();
         let CompletedTodo = new TodoModel({
            objectId: x,
            completeAt: now
         });
         
         CompletedTodo.save();
         todos.fetch().then(()=>{
          location.reload(true);
         })

      });
      
  },

processData(item){
  
  return <div key={item.objectId} className='todoItems'>
            <h1>{item.title}</h1><button onClick={()=>this.completeTask(item.objectId)}>Done</button>
         </div>   


},
clearCompleted(){
  let todos = new TodoCollection();
    todos.fetch().then(()=>{
      let dumpster = todos.toJSON().find(item=>item.completeAt);
      let CompletedTodo = new TodoModel({
            objectId: dumpster.objectId,
         });
        CompletedTodo.destroy();
        todos.fetch().then(()=>{
          location.reload(true);
         })
    })
},
  render() {
    return (
      <ul className= 'todoList'>
        <input type='text' onChange={this.updateMessage} 
             className='newTodo' value={this.state.message} onClick={this.wasClicked}/>
             <button onClick={this.addTodo}>Add</button>
             
        <TodoList hamster={this.props.scrub.map(this.processData)}/>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </ul>
    );
  }
})

