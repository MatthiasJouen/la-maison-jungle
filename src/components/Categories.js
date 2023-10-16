import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }){
    return(
        <div className='lmj-categories'>
            <select 
                value={activeCategory} 
                onChange={(e) => setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option>Toutes les plantes</option>
                {categories.map((cat) => (
                    <option key={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button className="lmj-button lmj-button-green" onClick={() => setActiveCategory('Toutes les plantes')}>Réinitialiser</button>
        </div>
    )
}

export default Categories