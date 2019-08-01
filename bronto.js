/*Functional Functions*/
/*Bronto Animation*/
// Get image & use animation to make him eat veggies, use move with fade!

/*API Calls*/
const apiRecipeUrl = 'https://api.spoonacular.com/recipes/findByIngredients'; 
const apiSpoonacularKey = '69f82379f1fa466fab11947cdaabe271';
//eg: URL?ingredients=(XYZ)&number=2&ranking=1

const apiNutritionUrl = 'https://api.edamam.com/api/nutrition-data';
const apiNutritionID = 'bd46c09c';
const apiNutritionKey = 'ff5b5872e2cc181bb71b861377ecbdd3';
//eg: URL?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"
//MUST URL ENCODE

/*Generation Functions*/
function generateLandingPage (){}
function generateRainbowGrid (){}
function generateIndividualItem (){}
function generateContactPage (){}

/*Display Functions*/
function displayLandingPage (){} //bronto animation
function displayRainbowGrid (){}
function displayIndividualItem (displayNutritionInfo, displayRecipe){}
function displayNutritionInfo () {}
function displayRecipe (responseJson){
    console.log(responseJson);
  for (let i = 0; i < responseJson.data.length; i++){
    $('.recipe').append(
      `<li><h3>${responseJson.}</h3>
      <p>${responseJson.}</p>
      <p>${responseJson.}</p>
      <p>'${responseJson.}'</p>
      <p>'${responseJson.}</p>
      </li>`
    )};
  $('#results').removeClass('hidden');
};
} 
function displayContactPage (){} //bronto animation

/*Event Handlers*/
function handleContactButton (){}
function handleItemClick (){}

/*Event Listeners*/
/*Final Calls*/
fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}