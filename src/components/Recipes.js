import React from 'react'

const Recipes = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.calories}</p>
            <img src={props.image} alt=""/>
        </div>
    );
}
export default Recipes;