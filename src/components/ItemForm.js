import React, { useState } from "react";

export default function ItemForm({
	cartItems,
	setCartItems,
}) {
	const [name, setName] = useState();
	const [number, setNumber] = useState();
	const [unit, setUnit] = useState();

	let newItem = {
		name: name,
		number: number,
		unit: unit,
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (name && number && unit) {
			addItem();
			setName("");
			setNumber("");
			console.log(cartItems);
		} else {
			console.log("error");
		}
	};

	const addItem = () => {
		const newItems = [...cartItems, newItem];
		setCartItems(newItems);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				id='product'
				type='text'
				className='input'
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<input
				id='number'
				type='number'
				className='input'
				value={number}
				onChange={(event) => (
					setNumber(event.target.value),
					console.log({ name, number })
				)}
			/>
			<select
				id='unit'
				name='unit'
				onChange={(event) =>
					console.log({ unit }, setUnit(event.target.value))
				}
			>
				<option value='' selected disabled hidden>
					Choose here
				</option>
				<option value='pieces'>Stück</option>
				<option value='packages'>Packung</option>
				<option value='litre'>l</option>
				<option value='millilitre'>ml</option>
				<option value='kilogram'>kg</option>
				<option value='gram'>g</option>
			</select>
			<button type='submit'>Add To Cart</button>
		</form>
	);
}
