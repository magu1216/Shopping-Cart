import React from "react";

export default function CartItem({
	item,
	index,
	cartItems,
	setCartItems,
}) {
	const completeItem = (index) => {
		const newItems = [...cartItems];
		newItems[index].isCompleted = true;
		setCartItems(newItems);
	};

	const removeItem = (index) => {
		const newItems = [...cartItems];
		newItems.splice(index, 1);
		setCartItems(newItems);
	};

	return (
		<div
			className='item'
			style={{
				textDecoration: item.isCompleted
					? "line-through"
					: "",
			}}
		>
			<div>{item.name}</div>
			<div>{item.number}</div>
			<div>{item.unit}</div>
			<div>
				<button onClick={() => completeItem(index)}>
					Complete
				</button>
				<button onClick={() => removeItem(index)}>x</button>
			</div>
		</div>
	);
}
