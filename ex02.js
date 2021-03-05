const fetch = require('node-fetch');

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
.then((response)=>{
    if (response.ok) 
    return response.json();
})
.then((data)=>{

    pratos = [];

    for (let i=0; i<10; i++){
        pratos.push(data.meals[i].strMeal);
    }

    console.log(pratos);
});