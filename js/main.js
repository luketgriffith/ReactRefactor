import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
import {TodoCollection} from './resources';
import {TodoView} from './views';
import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './react/todo_list';
import FullList from './react/full_list';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

let todos = new TodoCollection();
     todos.fetch().then(()=>{
         let x= todos.toJSON();
            ReactDom.render(<FullList 
                  scrub={x} />, 
                  document.querySelector('.wrapper'));
              });
       









console.log('Hello, World');
