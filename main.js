
import { getRandomRecipes } from "./randomRecipes.js"
import { searchRecipes } from "./recipeBySearch.js"
const latestCards = document.querySelector(".latest-cards");
const burgerMenu = document.querySelector("#burger-m");
const defaultMenu = document.querySelector("#menu-list");
const loadMoreBtn = document.querySelector("#load")
const getResultsBtn = document.querySelector("#results")



// convert to burger menu
burgerMenu.addEventListener('click', () => {
    defaultMenu.classList.contains("hidden") ? defaultMenu.classList.remove("hidden") : defaultMenu.classList.add("hidden")
})


//get from local Storage
if (localStorage.getItem("recipes")) {
    latestCards.innerHTML = JSON.parse(localStorage.getItem("recipes"))
} else {
    latestCards.innerHTML = await getRandomRecipes()
}


let counter = 0
//load more
loadMoreBtn.addEventListener("click", async () => {

    if (counter >= 2) {
        alert("stopped for api reasons!")
        loadMoreBtn.classList.add("pointer-events-none")
    } else {
        counter++;
        latestCards.innerHTML = await getRandomRecipes()
    }
})


//search results
getResultsBtn.addEventListener('click', searchRecipes)









// get random recipe from mealdb
// async function getRandomReceipe() {
//     try {
//         let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
//         let receipeDetails = await res.json().meals[0]
//         let receipeName = receipeDetails['strMeal']
//         let receipeThumb = receipeDetails['strMealThumb']
//         let receipeCategory = receipeDetails['strCategory']
//     } catch (error) {
//         console.log("Error api not found")
//     }
// }


// function createElements(recipeN, thumbUrl, sourceName, sourceUrl, time) {
//     let card = document.createElement("div");
//     card.addEventListener("click", () => {
//         console.log(thumbUrl)
//     })
//     let textDiv = document.createElement("div")
//     let recipeName = document.createElement("span")
//     let recipeSource = document.createElement("span")
//     let recipeTime = document.createElement("span")
//     let timerImg = document.createElement("img");
//     let recipeUrl = document.createElement("a");
//     let badgeDiv = document.createElement("div");
//     let recipeThumb = document.createElement("img");

//     recipeName.classList.add("font-bold")
//     recipeName.innerHTML = recipeN

//     recipeSource.classList.add("block", "text-sm", "text-gray-400")
//     recipeUrl.href = sourceUrl
//     recipeUrl.textContent = sourceName
//     recipeSource.appendChild(recipeUrl)
//     textDiv.classList.add("p-2")
//     textDiv.append(recipeName, recipeSource)

//     timerImg.src = "./imgs/timer.svg"
//     timerImg.classList.add("w-5", "inline-block")
//     recipeTime.classList.add("text-primary")
//     recipeTime.innerHTML = time + "mins";
//     badgeDiv.classList.add("badge")
//     badgeDiv.append(timerImg, recipeTime)


//     recipeThumb.classList.add("w-full", "h-32", "sm:h-48", "object-cover")
//     recipeThumb.src = thumbUrl

//     card.classList.add("card");
//     card.append(recipeThumb, textDiv, badgeDiv)
//     latestCards.appendChild(card)

// }



