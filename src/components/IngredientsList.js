import React from 'react';

function IngredientsList({ listIngredients }) {
    return (
        <>
            <h1>Ingredients:</h1>
            <ol>
                <li>{listIngredients}</li>
                <li>I1</li>
                <li>I2</li>
                <li>I3</li>
                <li>I4</li>
            </ol>
        </>
    );
}

export default IngredientsList;
