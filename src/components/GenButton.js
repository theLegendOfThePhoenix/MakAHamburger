import React from 'react';
import { useState, useEffect } from 'react';
import pickIngredients from '../utils/pickIngredients';
import ingredients from '../data/ingredients.json';

function GenButton({ setListIngredients }) {
    const [bgColor, setBgColor] = useState('#69cdff');
    const [isHovering, setIsHovering] = useState(true);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            setBgColor('#17b2ff');
            setTimeout(() => {
                setBgColor('#69cdff');
                setClicked(false);
            }, 1000);
        }
        if (isHovering && !clicked) {
            setBgColor('#91daff');
        }

        if (!isHovering && !clicked) {
            setBgColor('#69cdff');
        }
    }, [isHovering, clicked]);

    const gen = () => {
        let chosenIngredients = pickIngredients(ingredients);
        console.log(chosenIngredients);
        setListIngredients(chosenIngredients);
    };

    return (
        <div className='h-center'>
            <button
                type='button'
                id='gen-button'
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseDown={() => {
                    setClicked(true);
                    gen();
                }}
                style={{
                    backgroundColor: bgColor,
                }}
            >
                Generate a Burger
            </button>
        </div>
    );
}

export default GenButton;
