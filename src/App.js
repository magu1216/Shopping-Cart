import { useState } from "react";
import ItemForm from "./components/ItemForm";
import CartItem from "./components/CartItem";

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<div className='App'>
			<h1>Shopping Cart</h1>
			<ItemForm
				cartItems={cartItems}
				setCartItems={setCartItems}
			/>
			<div>
				{cartItems.map((item, index) => (
					<CartItem
						key={index}
						index={index}
						item={item}
						cartItems={cartItems}
						setCartItems={setCartItems}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
