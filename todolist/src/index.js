import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import '../src/ToDoList';
import ToDoList from '../src/ToDoList';

let destination = document.querySelector('#container');

ReactDOM.render(
	<div>
		<div>
			<ToDoList />
		</div>
	</div>,
	destination
);
