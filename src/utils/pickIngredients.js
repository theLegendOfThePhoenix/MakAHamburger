const pickIngredients = (d) => {
    let ingredients = [];
    let { bread, meat, sauce, cheese, other } = d;

    ingredients.push(
        bread[randomIndex(bread.length)],
        meat[randomIndex(meat.length)],
        sauce[randomIndex(sauce.length)],
        cheese[randomIndex(cheese.length)]
    );

    let previous;
    for (let i = 0; i < 3; i++) {
        let randomElement = other[randomIndex(other.length)];
        if (randomElement !== previous) {
            ingredients.push(randomElement);
            previous = randomElement;
        } else {
            i--;
        }
    }

    return ingredients;
};

const randomIndex = (l) => {
    return Math.floor(Math.random() * l);
};

export default pickIngredients;
