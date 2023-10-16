import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart}) {
	
	const [activeCategory, setActiveCategory] = useState('Toutes les plantes')
	const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	function removeFromCart(name, price) {
		// On récupère la plante dans le panier
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		if (currentPlantSaved) {
			// Si il y a plus d'un seul exemplaire de la plante dans le panier
			if (currentPlantSaved.amount > 1) {
				// On décrémente la quantité de 1
				const cartFilteredCurrentPlant = cart.map((plant) =>
				plant.name === name
					? { ...plant, amount: plant.amount - 1 }
					: plant
				);
				// On met à jour le panier avec la nouvelle quantité
				updateCart([...cartFilteredCurrentPlant]);
			} else {
				// On supprime la plante du panier
				const cartWithoutCurrentPlant = cart.filter(
				(plant) => plant.name !== name
				);
				updateCart([...cartWithoutCurrentPlant]);
			}
		}
	}
	

	return (
		<div className='lmj-shopping-list'>
			<Categories 
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
					activeCategory ==="Toutes les plantes" || activeCategory === category ?(
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<div className='lmj-cart-delete-buttons'>
								<button onClick={() => addToCart(name, price)}>🛒</button>
								{/*Si la plante est déjà dans le panier, on affiche le bouton "Retirer"*/}
								{cart.find((plant) => plant.name === name) ? (
									<button onClick={() => removeFromCart(name, price)}>❌</button>
								) : null}
							</div>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList