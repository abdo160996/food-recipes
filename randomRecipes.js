const backupImg = "./imgs/error-404.jpg"
let cards = ''
export async function getRandomRecipes() {

    try {
        let res = await fetch("https://api.spoonacular.com/recipes/random?apiKey=7bab8ffa89e94dc8ac466c5f23cf40ea&number=10");
        let recipeDetails = await res.json()

        recipeDetails = recipeDetails.recipes; //array
        recipeDetails.forEach((recipe) => {
            let recipeName = recipe['title']
            let readyInMinutes = recipe['readyInMinutes']
            let recipeThumb = recipe['image']
            let sourceName = recipe['sourceName']
            let recipeSourceUrl = recipe['spoonacularSourceUrl']

            // createElements(recipeName, recipeThumb == undefined ? backupImg : recipeThumb, sourceName, recipeSourceUrl, readyInMinutes)
            let cardTemplate = `<div class="card">
                <img src="${recipeThumb == undefined ? backupImg : recipeThumb}" loading="lazy" alt="food" class="w-full h-32 sm:h-48 object-cover" />
                <div class="p-2">
                <span class="font-bold">${recipeName}</span>
                <span class="block text-sm text-gray-400">By: <a href="${recipeSourceUrl}">${sourceName}</a> </span>
                </div>
                <div class="badge">
                <img src="./imgs/timer.svg" class="w-5 inline-block" alt="" />
                <span class="text-primary">${readyInMinutes} mins</span>
                </div>
                </div>`
            cards += cardTemplate;
        });
       
        localStorage.setItem("recipes", JSON.stringify(cards))
     

    } catch (error) {
        console.log(error)
    }

    return cards

}
