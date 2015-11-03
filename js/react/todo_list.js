import React from 'react';
import _ from 'underscore';
import ListItem from './list_item';
import {TodoCollection} from '../resources';
import {TodoView} from '../views';
import TodoModel from '../resources/new_model';
export default React.createClass({
  completeTask(x){
    let todos = new TodoCollection();
    todos.fetch().then(()=>{
         let CompletedTodo = new TodoModel({
            objectId: x
         });
         console.log(CompletedTodo);
         CompletedTodo.destroy();
         location.reload(true);
        });
      
  },

  render(){
    return (
      
        <li>{this.props.hamster}<button onClick={()=>this.completeTask(this.props.gerbil)}>Done</button></li>
      
    );
  }

});