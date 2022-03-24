const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const meal_result = document.querySelector('.meal-result');

// les evenements
// searchBtn.addEventListener('click', getMealList);
// mealList.addEventListener('click', getMealRecipe);
// recipeCloseBtn.addEventListener('click', () => {
//     mealDetailsContent.parentElement.classList.remove('showRecipe');
// });


function affichage(images, titre, ){


const h3 =document.createElement('h3')
h3.setAttribute('class',titre)
const a =document.createElement('a')
a.setAttribute('class', 'recipe-btn')
const divmeal_name =document.createElement('div')
divmeal_name.setAttribute('class', 'meal-name')
h3.innerText = 'Fresh sardines'
const image =document.createElement('img')
image.setAttribute('src', images)
image.setAttribute('alt', "food")
const i_meal =document.createElement('i')
i_meal.setAttribute('class', 'fa fa-heart-o')


const divmeal_img =document.createElement('div')
divmeal_img.setAttribute('class', 'meal-img')
const divmeal =document.createElement('div')
divmeal_img.setAttribute('id', 'meal')
const divmeal_item =document.createElement('div')
divmeal_item.setAttribute('class', 'meal-item')
const h2 =document.createElement('h2')
h2.setAttribute('class', 'title')
h2.innerText = 'Genèrer une recette'

divmeal_name.appendChild(h3)
a.appendChild(i_meal)
divmeal_name.appendChild(a)
divmeal_img.appendChild(image)
divmeal.appendChild(divmeal_img)
divmeal.appendChild(divmeal_name)
meal_result.appendChild(h2)
meal_result.appendChild(divmeal) 
}
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(function(donne){ 
    json=donne.json()
    // console.log(json);
    return json

})
.then(function (json) {
    json.meals.forEach(el=>{
        let images=el.strMealThumb;
        let titre= el.strMeal;
        affichage(images,titre )
    })

})



const recipe_btn = document.querySelector('.recipe-btn');
recipe_btn.addEventListener('click', ()=>{
    mealDetailsContent.classList.add('showRecipe');
})

