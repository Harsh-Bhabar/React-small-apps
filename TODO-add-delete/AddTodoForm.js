import React, { useState } from 'react'

export default function AddTodoForm({ handleSubmit }) {

	const [addTodoFormData, setAddTodoFormData] = useState({
		name: "",
		desc: ""
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setAddTodoFormData({
			...addTodoFormData,
			[name] : value
		})
	}

	const submitForm = (e) => {
		e.preventDefault();
		handleSubmit(addTodoFormData);
		setAddTodoFormData({
			name: "",
			desc: ""
		})
	}

	return (
		<div>
			<form className='addTodoForm'>
				<label className='formLabel'>Name</label>
				<input type='text' className='formInput' name="name" value={addTodoFormData.name} onChange={handleChange} />

				<label className='formLabel'>Desc</label>
				<input type='text' className='formInput' name="desc" value={addTodoFormData.desc} onChange={handleChange} />

				<button className='btn' onClick={submitForm} >Add</button>
			</form>
		</div>
	)
}
