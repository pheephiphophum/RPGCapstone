function mapIngredients(item, ingredients){


    return(
        ingredients.map((ingredient) => <p className="ingredient" key={`${item}Ingredients`}>{ingredient[0]} {ingredient[1]}</p>)
    )
}

export default mapIngredients