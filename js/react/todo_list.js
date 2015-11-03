import React from 'react';
import _ from 'underscore';
import ListItem from './list_item';
import {TodoCollection} from '../resources';
import {TodoView} from '../views';
import TodoModel from '../resources/new_model';
export default React.createClass({
  

  render(){
    return (
      
        <li>{this.props.hamster}</li>
      
    );
  }

});