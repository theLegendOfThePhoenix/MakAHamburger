import React from 'react';
import { useState } from 'react';
import GenButton from './components/GenButton';
import IngredientsList from './components/IngredientsList';

function App() {
    let [listIngredients, setListIngredients] = useState([]);

    console.log('rendering');

    return (
        <>
            <GenButton setListIngredients={setListIngredients} />
            <div id='ingredientsListAndImage'>
                <IngredientsList listIngredients={listIngredients} />
            </div>
        </>
    );
}

export default App;
