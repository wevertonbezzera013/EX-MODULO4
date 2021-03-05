const fetch = require('node-fetch');

function filtraIngredientes(data) {
    
    let ingredientes = ''

    let lista = data;
    
    for(let i = 0; i < 20; i++) {
        if(lista.meals[0].strIngredient[i] || '' && lista.meals[0].strIngredient[i] || null) {
            ingredientes += `${strIngredient[i]}, `
        }
    }

    return ingredientes;
}

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then((response) => {
    if (response.ok) 
    return response.json()
})
.then ((data) => {
    const ingr = filtraIngredientes(data)
    console.log(`Nome: ${data.meals[0].strMeal}\nID: ${data.meals[0].idMeal}\nRegião: ${data.meals[0].strArea}\nIngredientes: ${ingr}\nInstruções: ${data.meals[0].strInstructions}`);
});