import '../styles/Cart.css';
import {  useEffect } from 'react'

function Cart({cart, updateCart}){
    const items = Object.keys(cart)
    const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return (
        <div className='lmj-cart'>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button className="lmj-button" onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
    )
}

export default Cart