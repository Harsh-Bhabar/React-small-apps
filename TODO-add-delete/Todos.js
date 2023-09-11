import React, { useState } from 'react'
import TodoCard from './TodoCard'
import AddTodoForm from './AddTodoForm';

export default function Todos(props) {

	const allTodos = props.allTodos ? props.allTodos : [];
	const handleSubmit = props.handleSubmit;
	const handleDelete = props.handleDelete;

	const [toggleTodoForm, setToggleTodoForm] = useState(false);

	const toggleAddTodoForm = () => {
		setToggleTodoForm(!toggleTodoForm);
	}

	return (
		<div className='todoApp'>
			<div className='topRow'>
				<h2>Todo App</h2>
				<button className='btn' onClick={toggleAddTodoForm}>Add Todo</button>
			</div>

			{
				toggleTodoForm && <AddTodoForm handleSubmit={handleSubmit} />			
			}
			<div className='todosRow'>
				{
					allTodos.map((todo) => (
						<TodoCard key={todo.id} todo={todo} handleDelete={handleDelete} />
					))
				}
			</div>
			<div className='bottomRow'></div>
			
		</div>
	)
}
