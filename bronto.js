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
            'Plantain', 'Potatoes', 'Quince', 'Sapodilla', 'Shallots', 'Spaghetti Squash','Sugar Apple', 'Yam'],
    orange: ['Apricot', 'Butternut', 'Cantaloupe', 'Carrot', 'Clementine', 'Kumquat', 'Loquat', 'Lychee', 'Mandarin',
            'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Pepper, Bell', 'Persimmon', 'Pumpkin',
            'Sapote', 'Sweet Potato', 'Tangerine'],
    red: ['Acerola', 'Cherry', 'Cranberry', 'Beetroot', 'Cabbage, Red', 'Grapefruit', 'Jujube Fruit', 'Onion, Red',
          'Pepper, Red', 'Pitanga', 'Pomegranite', 'Potato, Red', 'Raddichio', 'Radish', 'Raspberries', 'Rhubarb',
          'Rose Apple', 'Strawberries', 'Tomato', 'Watermelon'],
    purple: ['Açai', 'Eggplant', 'Blackberries', 'Blcakcurrant', 'Blueberries', 'Date Fruit', 'Elderberries',
            'Figs', 'Guava', 'Java Plum', 'Pomelo', 'Plum', 'Prickly Pear', 'Prune', 'Turnip'],
    brown: ['Arrowroot', 'Mushrooms', 'Rutabaga'],
  }
/*Functional Functions*/

Object.entries(VEGGIE_RAINBOW).map(([color, veggies]) => {
    return veggies.map(veggie =>`<li class="rainbow ${color}">${veggie}</li>`).join("\n")
  })

/*Bronto Animation*/
// Get image & use animation to make him eat veggies, use move with fade!

/*API Calls*/
const apiRecipeUrl = 'https://api.spoonacular.com/recipes/findByIngredients'; 
const apiSpoonacularKey = '69f82379f1fa466fab11947cdaabe271';



const apiNutritionUrl = 'https://api.edamam.com/api/nutrition-data';
const apiNutritionID = 'bd46c09c';
const apiNutritionKey = 'ff5b5872e2cc181bb71b861377ecbdd3';

//MUST URL ENCODE

/*Generation Functions*/
function generateLandingPage (){
    return `
    <h1>BRONTOSAURUS</h1>
    <p class='welcome'>Welcome to Brontosaurus! We're happy you're here.
        Brontosaurus is here to help you and your family eat more plants. 
        When our daughter was born, we knew we wanted to ensure she tried 
        everything in the fruit and veggie rainbow.
        But, as a parent (and even if you're not!) it can be hard to break out of the grocery store rut.
        You find yourself buying the same items - We're looking at you bell peppers - over and over. 
        We wanted to make sure she tried a variety of plants and we wanted to be able to track what she had tried.
        So, Brontosaurus was born. 
        The purpose of this app is to allow you to explore some veggies, fruits and legumes
        you may not have tried. It shows the nutrition info, and offers recipes involving said item. 
        Enjoy the fun rainbow grid with your little one(s), or just as an adult,
        because, who doesn't love a rainbow? </p>

        <button id='rainbowButton'>Check Out The Rainbow!</button>

        <section class='tips'>
                <h3>Tips & Tricks</h3>
                    <ul>
                        <li>Don't be afraid of herbs and spices! Be careful with spicy foods, but otherwise, let your tastebuds have fun!</li>
                        <li>If you've got a 'selective' eater, try and keep things relaxed and simple, i.e. only a couple, or single item at a time.</li>
                        <li>Give foods a second, third and fourth chance! Use those recipes and seasonings.</li>
                        <li>Don't stress about mess or try and feed your little one, let them explore the texture, smell and color of each food.</li>
                        <li>Know the difference between choking and gagging - check out the videos below.</li>
                        <li> Amazon List </li>
                    </ul>
            </section>
        
        <h2>Video Information</h2>
    <section class='videoContainer'> 
        <p>Baby Led Weaning</p>
        <p>How to Prep food for Babies</p>
        <iframe width='200' height='150' controls loop muted src="https://www.youtube.com/embed/i6ntYHXP6Xc"></iframe>
        <iframe width='200' height='150' controls loop muted src='https://www.youtube.com/embed/B7D9xOh4Jhw'></iframe>
        <p>CPR for babies</p>
        <p>Benefits of Eating Plants!</p>
        <iframe width='200' height='150' controls loop muted src='https://www.youtube.com/embed/n65HW1iJUuY'></iframe>
        <iframe width='200' height='150' controls loop muted src='https://www.youtube.com/embed/xnKaOL2IBPY'></iframe>
    </section>
       
    `
}

const generateRainbow = (rainbow) => {
    return `
    <ul class="rainbow">
    ${Object.entries(VEGGIE_RAINBOW).map(([color, veggies]) => {
    return veggies.map(veggie =>`<li class="rainbow ${color}"><a data-veggie="${veggie}">${veggie}</a></li>`).join("\n")
    })}
    <ul>
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

const generateVeggieInfo = (veggie) => {
    return `
    <h2>${veggie.name}</h2>
    `
  }

function generateContactPage (){
    return `
    <h2>Contact Us</h2>
    <form>
            <form action="/action_page.php">
                <label for="fname">Name</label>
                <input type="text" id="name" name="name" placeholder="Bernie Brontosaur" required>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="BernieBronto@veggiepatch.com">
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit">
    </form>
    `
}

/*Display Functions*/

function displayLandingPage (){ 
    $('main').html(generateLandingPage());
    generateBrontoAnimation ();
}

const displayRainbowSection = (rainbow = VEGGIE_RAINBOW) => {
    $('main').html(generateRainbowSection(rainbow))
  }

  

const getVeggieRecipe = (veggie) => {
return fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${veggie}&number=1&ranking=1`)
.then(response => {
      if (response.ok) {
        return response.json()
      } else {
        Promise.reject('Recipe Not Found')
      }
    })
  }

  const getVeggieNutrition = (veggie) => {
    return fetch(`https://api.edamam.com/api/nutrition-data?app_id=bd46c09c&app_id=ff5b5872e2cc181bb71b861377ecbdd3&ingr=${veggie}`)
    .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            Promise.reject('Data Not Found')
          }
        })
      }
  
      const displayVeggieInfo = (veggie) => {
        $('main').main(generateVeggieInfo(veggie))
      }
 
  
  
function displayNutritionInfo () {}

/*function displayRecipe (responseJson){
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
};
 */

 function displayContactPage (){
    $('main').html(generateContactPage());
    generateBrontoAnimation();
} 

/*Event Handlers*/

function handleRainbowButton () {}

const handleClickVeggie = () => {
    $('main').on('click', '.rainbow a', (event) => {
      let veggie = $(event.currentTarget()).data('veggie')
      getVeggieInfo(veggie).then(displayVeggieInfo)
    })
  }

function handleContactButton (){}

/*Event Listeners*/
/*Final Calls*/


  
  
 


  

  
  
  