import React, {useEffect, useState} from 'react';
import './Search.scss';
import Recipes from "./Recipes";

const Search = () => {

    const APP_ID = 'dc3affb1';
    const APP_KEY = '85deaefb9cba4db01330ad0941930e1b';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    };

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div>
            <form onSubmit={getSearch} className='search-form'>
                <input className='input-search form-control' type="text" value={search} onChange={updateSearch}/>
                <button className='button-search btn btn-primary' type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipes
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        key={recipe.recipe.label}
                    />

                ))}
            </div>
        </div>
    )
};

export default Search;