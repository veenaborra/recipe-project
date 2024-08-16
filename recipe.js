const searchBox=document.querySelector('.searchbox');
const searchBtn=document.querySelector('.searchbtn');
const recipeCon=document.querySelector('.recipe-container');
const recipeDetailsContent=document.querySelector('.recipe-details-content');
const recipeCloseBtn=document.querySelector('.recipe-closeBtn')

console.log("suhasss");

const fetchRecipes=async(query)=>{
    recipeCon.innerHTML="<h2>Fetching recipes...</h2>";
const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const response= await data.json();
recipeCon.innerHTML="";
response.meals.forEach(meal=>{
    const recipeDiv=document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML=`
    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span> Dish</p>
    <p><span>${meal.strCategory}</span></p>
    `
    const button=document.createElement('button');
button.textContent="View Recipe";
recipeDiv.appendChild(button);


button.addEventListener('click',()=>{
    openRecipePopup(meal);
})

    recipeCon.appendChild(recipeDiv);

})
}
const openRecipePopup= (meal) =>{
    recipeDetailsContent.textContent=`
    <h2>${meal.strMeal}</h2>
    `
    recipeDetailsContent.parentElement.style.display="block";

}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();
    fetchRecipes(searchInput);
})