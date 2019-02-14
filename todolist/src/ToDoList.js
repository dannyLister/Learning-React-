// doesnt work on delete function - revisit at later date
import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import './TodoList.css';

class ToDoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.detleteItem.bind(this);
	};

	addItem(e) {
		let itemArray = this.state.items;

		if (this._inputElement.value !== '') {
			itemArray.unshift({
				//unshift = adds new item(s) to the BEGINNING of an existing array
				text: this._inputElement.value,
				key: Date.now() //will generate a unique key utilising current date/time stamp
			});

			this.setState({
				items: itemArray
			});

			this._inputElement.value = ''
		}


		deleteItem(key) {
			let filteredItems = this.state.items.filter(function (item) {
				return (item.key !== key);
			});


			this.setState({
				items: filteredItems
			});

			console.log(itemArray)

			e.preventDefault();
		}

		render() {
			return (
				<div className="todoListMain">
					<div className="header">
						<form onSubmit={this.addItem}>
							<input ref={(a) => (this._inputElement = a)} placeholder="Enter Task" />
							<button type="submit">Add</button>
						</form>
					</div>
					<ToDoItems entries={this.state.items} delete={this.detleteItems} />
				</div>
			);
		}
	}

	export default ToDoList;
