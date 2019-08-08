/*Functional Functions*/
function VeggieOverlord(name, recipe, nutrition) {
  const processedRecipe = recipe && recipe.length ? Object.values(recipe) : 'Recipe Data Not Found'
  const processedNutrition = nutrition && nutrition.length ? Object.values(nutrition) : 'Nutrition Data Not Found'
  const veggie = {
    name, recipe: processedRecipe, nutrition: processedNutrition
  }
  console.log(processedNutrition)
  return veggie
}


const VEGGIE_RAINBOW = {
  green: ["Artichoke", "Arugula", "Asparagus", 'Avocado', 'Beans, Green', 'Bitter Melon', 'Bok Choy',
    'Broad Beans', 'Broccoli', 'Broccoli Rabe', 'Brussel Sprouts', 'Cabbage, green', 'Celery',
    'Chayote', 'Cherimoya', 'Chicory', 'Collards', 'Cucumber', 'Dandelion Greens', 'Edamame', 'Feijoa',
    'Fiddleheads', 'Gooseberries', 'Grapes', 'Honeydew', 'Jackfruit', 'Kale', 'Kiwi', 'Leeks', 'Lettuce',
    'Lime', 'Mustard Greens', 'Okra', 'Peas', 'Pear', 'Pepper, Bell', 'Runner Beans', 'Snow Peas', 'Sorrel',
    'Soursop', 'Spinach', 'Swiss Chard', 'Tomatillo', 'Watercress', 'Zucchini'],
  yellow: ['Bamboo', 'Banana', 'Belgian Endive', 'Bread Fruit', 'Carambola', 'Cassava', 'Cauliflower',
    'Celery Root', 'Corn', 'Crookneck', 'Custard Apple', 'Daikon Radish', 'Durian', 'Fennel', 'Ginger Root',
    'Horseradish', 'Jicama', 'Kohlrabi', 'Lemon', 'Longan', 'Onions, Yellow', 'Olives', 'Parsnip', 'Pineapple',
    'Plantain', 'Potatoes', 'Quince', 'Sapodilla', 'Shallots', 'Spaghetti Squash', 'Sugar Apple', 'Yam'],
  orange: ['Apricot', 'Butternut', 'Cantaloupe', 'Carrot', 'Clementine', 'Kumquat', 'Loquat', 'Lychee', 'Mandarin',
    'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Pepper, Bell', 'Persimmon', 'Pumpkin',
    'Sapote', 'Sweet Potato', 'Tangerine'],
  red: ['Acerola', 'Cherry', 'Cranberry', 'Beetroot', 'Cabbage, Red', 'Grapefruit', 'Jujube Fruit', 'Onion, Red',
    'Pepper, Red', 'Pitanga', 'Pomegranite', 'Potato, Red', 'Raddichio', 'Radish', 'Raspberries', 'Rhubarb',
    'Rose Apple', 'Strawberries', 'Tomato', 'Watermelon'],
  purple: ['Açai', 'Eggplant', 'Blackberries', 'Blackcurrant', 'Blueberries', 'Date Fruit', 'Elderberries',
    'Figs', 'Guava', 'Java Plum', 'Pomelo', 'Plum', 'Prickly Pear', 'Prune', 'Turnip'],
  brown: ['Arrowroot', 'Mushrooms', 'Rutabaga'],
}


/*API Data*/
const apiRecipeUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
const apiSpoonacularKey = '69f82379f1fa466fab11947cdaabe271';

const apiNutritionUrl = 'https://api.edamam.com/api/nutrition-data';
const apiNutritionID = 'bd46c09c';
const apiNutritionKey = 'ff5b5872e2cc181bb71b861377ecbdd3';

const getVeggieRecipe = async (veggie) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=69f82379f1fa466fab11947cdaabe271&ingredients=${encodeURIComponent(veggie)}&number=1&ranking=1`);
  if (response.ok) {
    const responseRecipe = await response.json();
    return responseRecipe;
  }
  else {
    return null;
  }
}

const getVeggieNutrition = async (veggie) => {
  const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=bd46c09c&app_key=ff5b5872e2cc181bb71b861377ecbdd3&ingr=1%20${encodeURIComponent(veggie)}`);
  if (response.ok) {
    const responseNutrition = await response.json();
    return responseNutrition.totalNutrients;
  }
  else {
    return null;
  }
}


/*Generation Functions*/
function generateLandingPage() {
  return `
    <h1>BRONTOSAURUS</h1>
    <p class='welcome'>Welcome to Brontosaurus! We are here to help you and your family eat more plants. 
        When our daughter was born, we knew we wanted to ensure she tried 
        everything in the fruit and veggie rainbow.
        But, as a parent (and even if you're not!) it can be hard to break out of the grocery store rut.
        You find yourself buying the same items - We're looking at you bell peppers - over and over again. 
        Or, if you do buy a new veggie or fruit, it sits in the fridge
        like a lonely dinosaur because you aren't really sure what to do with it!
        The purpose of this app is to allow you to explore fruits and veggies
        you may not have tried, or give you new ideas for old favorites. 
        It shows the nutrition info, and offers recipes involving said item. 
        Enjoy the fun rainbow grid with your little one(s), or just as an adult,
        because, who doesn't love a rainbow? </p>
       
        <div class='buttonLanding'>

        <button id='goToInfo'>To The Info!</button>

        <button id='rainbowButton'>To The Rainbow!</button> 
        
        </div> 
    `
}

function generateInfoPage (){
    return `
    <section class='tips'>
                <h2>Tips & Tricks</h2>
                    <ul class='tricks'>
                        <li>Don't be afraid of herbs and spices! Be careful with spicy foods, but otherwise, let your tastebuds have fun!</li>
                        <li>If you've got a 'selective' eater, try and keep things relaxed and simple, i.e. only a couple, or single item at a time.</li>
                        <li>Give foods a second, third and fourth chance! Use those recipes and seasonings. There's a good chance they'll like it a different way.</li>
                        <li>Don't stress about mess or try and feed your little one, let them explore the texture, smell and color of each food.</li>
                        <li>If they don't like a food, try taking it away, without worrying or commenting, and then re-try it another time.</li>
                        <li>Know the difference between choking and gagging - check out the videos below to get more information on baby led weaning, plant based diets and more!</li>
                    </ul>
            </section>    
  <h2>Video Information</h2>
  <section class='videoContainer'> 
      <p>Baby Led Weaning</p>
      <p>How to Prep food for Babies</p>
      <iframe width='250' height='200' controls loop muted src="https://www.youtube.com/embed/i6ntYHXP6Xc"></iframe>
      <iframe width='250' height='200' controls loop muted src='https://www.youtube.com/embed/B7D9xOh4Jhw'></iframe>
      <p>CPR for babies</p>
      <p>Benefits of Eating Plants!</p>
      <iframe width='250' height='200' controls loop muted src='https://www.youtube.com/embed/n65HW1iJUuY'></iframe>
      <iframe width='250' height='200' controls loop muted src='https://www.youtube.com/embed/xnKaOL2IBPY'></iframe>
  </section>
  <section class='resources'>
  <h2>Great Reading</h2>
  <p>There are a ton of great resources out there, both for eating more plants and for baby led weaning.
  Some of our favorites are <a href='https://nutritionfacts.org/'target='_blank'>Nutrition Facts</a> and 
  <a href='http://www.babyledweaning.com/'target='_blank'>Baby Led Weaning</a>. 

  Some of our favorite cookbooks include: </p>
  <ul class='cookbooks'>
  <li><a href='https://www.amazon.com/Baby-Led-Feeding-Natural-Independent-Eaters/dp/0544963407/ref=sr_1_4?crid=3H30SJFXMGMA&keywords=baby+led+weaning&qid=1565216165&s=gateway&sprefix=baby+led+%2Caps%2C188&sr=8-4'target='_blank'>Baby Led Feeding</a></li>
  <li><a href='https://www.amazon.com/How-Not-Die-Discover-Scientifically-ebook/dp/B00Y7USB14/ref=sr_1_4?keywords=plant+based+diet&qid=1565216226&s=gateway&sr=8-4'target='_blank'>How Not To Die</a></li>
  <li><a href='https://www.amazon.com/Plant-Powered-Families-Kid-Tested-Whole-Foods-Recipes/dp/1941631045/ref=sr_1_3?keywords=plant+based+diet+for+kids&qid=1565216282&s=gateway&sr=8-3'target='_blank'>Plant Powered Families</a></li>
  </ul>

  <h2>Recommended Items</h2>
  <p>None of these items are truly 'essential' but, we have them in our home, and we can attest
  to the fact that they do make things easier when you are feeding a little one and eating a lot 
  of plants. Making sure you can prep food easily is one of the biggest things you can do to help
  make life, eating more plants and baby led weaning a lot easier!</p>
  <ul class='amazonList'>
  <li><a href='https://www.amazon.com/gp/product/B06VS6XGCJ/ref=ox_sc_act_title_3?smid=AK8KODIOTRXHK&psc=1'target='_blank'>Dishwasher Safe Chopping Boards</a></li>
  <li><a href='https://www.amazon.com/gp/product/B075MD55N1/ref=ox_sc_act_title_4?smid=A309REJE2CCLMD&psc=1'target='_blank'>Sharp Knives (If they're sharp, they're safer for you!)</a></li>
  <li><a href='https://www.amazon.com/dp/B01M7SRVC3/ref=dp_cerb_1?th=1'target='_blank'>Mini Food Chopper</a></li>
  <li><a href='https://www.amazon.com/gp/product/B00MRZIFD0/ref=ox_sc_act_title_5?smid=ATVPDKIKX0DER&psc=1'target='_blank'>Spillproof sippy cup</a></li>
  <li><a href='https://www.amazon.com/gp/product/B07GTFSQD1/ref=ox_sc_act_title_6?smid=A106IE2VDSG1UK&psc=1'target='_blank'>Floor Mat</a></li>
  <li><a href='https://www.amazon.com/gp/product/B011F7JK52/ref=ox_sc_act_title_7?smid=A3FK6CY2G2315W&psc=1'target='_blank'>Super strong suction food bowls</a></li>
  <li><a href='https://www.amazon.com/gp/product/B07GJZDTNV/ref=ox_sc_act_title_8?smid=A2T5AI9FTBZC4G&psc=1'target='_blank'>Perfect cutlery for baby hands!</a></li>
  <li><a href='https://www.amazon.com/gp/product/B07D1Z4LQ8/ref=ox_sc_act_title_1?smid=A3M17TF4J63QNF&psc=1'target='_blank'>Anti-Choking Device</a></li>
  </ul>
  </section>
  `
}


const generateRainbow = (rainbow) => {
  return `
  <section class='container'>
    <ul class="rainbow">
    ${Object.entries(VEGGIE_RAINBOW).map(([color, veggies]) => {
    return veggies.map(veggie => `<li class="rainbow ${color}"><a data-veggie="${veggie}">${veggie}</a></li>`).join("\n")
  }).join('\n')}
    <ul>
    </section>
    `
}

const generateRainbowSection = (rainbow) => {
  return `
    <section>
    <header><h2>Welcome to the Rainbow!</h2><header>
    <main>
      ${generateRainbow(rainbow)}
    </main>
    </section>
    `
}


function formatMissedIngredients(missedIngredients) {
  return missedIngredients.map(ingredient => {
    return ingredient.original;
  })
}

const generateVeggieInfo = (veggie) => {
  return `
    <article>
    <h2>${veggie.name}</h2>
    <section class='nutrition'>
    <h3>Nutrition Information</h3>
    <ul class='nutritionInfo'>${Array.isArray(veggie.nutrition) ? veggie.nutrition.map(
    nutrient => `
      <li>
       ${nutrient.label} ${nutrient.quantity}${nutrient.unit}
      </li>
      `
  ).join('\n'): veggie.nutrition}
  </ul>

</section>
<section class='recipe'>
<h3>Recipe</h3>
  ${Array.isArray(veggie.recipe) ? veggie.recipe.map(
    recipe => {
      let missedIngredients = formatMissedIngredients(recipe.missedIngredients);
      //API was kicking back error as it was not finding anything in used ingredients, so this was added//
      let usedIngredients = (recipe.usedIngredients[0] && recipe.usedIngredients[0].original) || '';
      return `<ul class='recipeList'>
      <li> ${recipe.title} </li>
      <li>${missedIngredients}</li>
      <li>${usedIngredients}</li>
      </li>
      `}): veggie.recipe}
      </ul>
      </section>
      <div class='button'>
  <button id='rainbowReturn'>Return to the Rainbow</button>
  </div>
</article>`
}


function generateContactPage() {
  return `
<h2>Contact Us</h2>
<form>
        <form action="https://formspree.io/morvenwatt@gmail.com" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Bernie Brontosaur" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="BernieBronto@veggiepatch.com">
            <label for="subject">Subject</label>
            <textarea type='text' id='subject' placeholder='My favorite fruit is mango!'></textarea>
            <div class='button'><button id='contact'>Submit</button></div>
</form>
`
}

/*Display Functions*/

function displayLandingPage() {
  $('main').html(generateLandingPage());

}
function displayInfoPage() {
  $('main').html(generateInfoPage());

}

const displayRainbowSection = (rainbow = VEGGIE_RAINBOW) => {
  $('main').html(generateRainbowSection(rainbow))
}


function displayContactPage() {
  $('main').html(generateContactPage());
}

const displayVeggieInfo = (veggie) => {
  $('main').html(generateVeggieInfo(veggie));
}


/*Event Handlers*/

function handleRainbowButton() {
  $('main').on('click', '#rainbowButton', function (event) {
    displayRainbowSection();
  })
}

function handleClickVeggie() {
  $('main').on('click', '.rainbow a', async (event) => {
    let veggieName = $(event.currentTarget).data('veggie')
    const veggieNutrition = await getVeggieNutrition(veggieName)
    const veggieRecipe = await getVeggieRecipe(veggieName)
    const veggie = VeggieOverlord(veggieName, veggieRecipe, veggieNutrition)
    displayVeggieInfo(veggie);
  })
}

function handleRainbowReturnButton() {
  $('main').on('click', '#rainbowReturn', function (event) {
    displayRainbowSection();
  })
}
function handleGoToInfoButton() {
  $('main').on('click', '#goToInfo', function (event) {
    displayInfoPage();
  })
}
function handleContactButton() {
  $('main').on('click', '#contact', function (event) {
  })
}
function handleHomeLink() {
  $('.homePage').on('click', function (event) {
    displayLandingPage();
  })
}
function handleInfoLink() {
  $('.infoPage').on('click', function (event) {
    displayInfoPage();
  })
}
function handleRainbowLink() {
  $('.rainbowPage').on('click', function (event) {
    displayRainbowSection();
  })
}
function handleContactLink() {
  $('.contactPage').on('click', function (event) {
    displayContactPage();
  })
}

/*Event Listeners*/

function setUpEventHandlers() {
  handleClickVeggie();
  handleRainbowButton();
  handleRainbowReturnButton();
  handleContactButton();
  handleContactLink();
  handleRainbowLink();
  handleHomeLink();
  handleInfoLink();
  handleGoToInfoButton();
}

function initializeUI() {
  displayLandingPage();
  setUpEventHandlers();
}
$(initializeUI);


