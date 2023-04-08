const query = document.querySelector("#query")
const searchResults = document.querySelector("#search-results")
const errorDiv = document.querySelector("#error")
export async function searchRecipes() {
    if (searchResults.innerHTML !== "") {
        searchResults.innerHTML = "";
    }
    let queryValue = query.value;
    try {
        let res = await fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=7bab8ffa89e94dc8ac466c5f23cf40ea&number=10&query=${queryValue}`);
        let recipeResults = await res.json()

        recipeResults.forEach((recipe) => {
            let recipeName = recipe['title']
            let recipeId = recipe['id']
            //create Span
            let recipeSpan = document.createElement("a");
            recipeSpan.classList.add("search-result")
            recipeSpan.dataset.id = recipeId;
            recipeSpan.innerHTML = recipeName;

            // redirect to details page
            recipeSpan.addEventListener("click", async function () {
                let res = await fetch(`https://api.spoonacular.com/recipes/${this.dataset.id}/information?apiKey=7bab8ffa89e94dc8ac466c5f23cf40ea`)
                let recipeDetails = await res.json()

                let srcUrl = recipeDetails['sourceUrl']
                let recipeUrl = document.createElement("a");
                recipeUrl.href = srcUrl;
                recipeUrl.target = "_blank"
                recipeUrl.click()
            })
            searchResults.appendChild(recipeSpan)
            searchResults.parentElement.classList.remove("hidden")
        });

    } catch (error) {
        errorDiv.classList.remove("hidden")
    }
}