import React from 'react'

export default function TodoCard(props) {
	const todo = props.todo;
	const handleDelete = props.handleDelete;

	// const deleteTodo = (todo) => {
	// 	handleDelete(todo);
	// }

	return (
		<div className='todoCard'>
			<div className='todoCartLeft'>
				<div className='todoName'>{todo.name}</div>
				<div className='todoDesc'>{todo.desc}</div>
			</div>
			<div className='todoCardRight'>
				<button className='btn' onClick={() => handleDelete(todo)}>Delete</button>
			</div>
		</div>
	)
}
