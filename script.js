let selectedSize = "";

function getRandomDrink() {
  const category = Math.floor(Math.random() * 5);

  switch (category) {
    case 0:
      selectedSize = getRandomSize(); //Store the size of the random drink
      return getRandomHotDrink();
    case 1:
      selectedSize = getRandomSize();
      return getRandomColdDrink();
    case 2:
      selectedSize = getRandomSize();
      return getRandomTea();
    case 3:
      selectedSize = getRandomSize();
      return getRandomRefresher();
    default:
      return "Unknown category";
}

}

document.getElementById("drink-btn").addEventListener("click", function() {
  resetOrder()
  const drink = getRandomDrink();

  // Set the text of drink-btn
  const randomDrink = `Your drink is a ${selectedSize} ${drink}.`;
  document.getElementById("randomize-btn").style.display = "none"; // Hide both buttons
  document.getElementById("drink-btn").style.display = "none"; // Hide both buttons
  document.getElementById("loading-icon").style.display = "block"; // Show the loading icon
  
  setTimeout(() => {
    document.getElementById("loading-icon").style.display = "none"; // Hide the loading icon
    document.getElementById("random-drink").textContent = randomDrink;
    document.getElementById("randomize-btn").style.display = "none";
    document.getElementById("drink-btn").style.display = "block"; // Show the drink-btn

  }, 2000);
});


function resetOrder() {
  document.getElementById("random-order").textContent = "";
  document.getElementById("random-drink").textContent = "";
  document.getElementById("randomize-btn").style.display = "inline-block";
  document.getElementById("drink-btn").style.display = "inline-block";
}

document.getElementById("randomize-btn").addEventListener("click", function() {
  resetOrder(); // Reset the order before generating a new one

  const drink = getRandomDrink();
  const food = getRandomFoodOrder();

  const randomOrder = `Today's order is a ${selectedSize} ${drink} with a ${food} on the side.`;
  document.getElementById("randomize-btn").style.display = "none";
  document.getElementById("loading-icon").style.display = "inline-block";
  document.getElementById("drink-btn").style.display = "none"

  setTimeout(() => {
    document.getElementById("loading-icon").style.display = "none";
    document.getElementById("random-order").textContent = randomOrder;
    document.getElementById("randomize-btn").style.display = "block";
    document.getElementById("drink-btn").style.display = "none";
  }, 2000);
});

function getRandomFoodOrder() {
  const category = Math.floor(Math.random() * 1);

  switch (category) {
    case 0:
      return getRandomFood();
    default:
      return "Unknown category";
  }
}

function getRandomSize() {
  const size = ["Grande", "Vente", "Trenta"];
  const randomSize = size[Math.floor(Math.random() * size.length)];
  return `${randomSize}`;
}

function getRandomHotDrink() {
  const hotDrinkOptions = [
    "Featured Blone Roast",
    "Featured Medium Roast",
    "Featured Dark",
    "Featured Blone Roast Veranda Blend",
    "Featured Decaf Roast Decaf",
    "Cafe Misto",
    "Caffè Americano",
    "Cappuccino",
    "Caffè Latte",
    "Caffè Mocha",
    "Flat White",
    "Espresso",
    "Espresso Con Panna",
    "Macchiato",
    "Drip Coffee",
    "Pour-Over Coffee",
    "French Press Coffee",
    "Caffè Americano Misto",
    "Café Au Lait",
    "Caffè Misto",
    "Cinnamon Dolce Latte",
    "White Chocolate Mocha",
    "Caramel Macchiato",
    "Honey Almondmilk Flat White",
    "Caramel Flan Latte",
    "Toasted White Chocolate Mocha",
    "Chestnut Praline Latte",
    "Cappuccino",
    "Flat white",
    "Honey Almondmilk Flat White",
    "Pumpkin Spice Latte",
    "Oleato Caffe Latte with Oatmilk",
    "Cinnamon Dolce Latte",
    "Starbucks Reserve Latte",
    "Starbucks Rserve Hazelnut Bianco Latte",
    "Starbucks Blone Vanilla Latte",
    "Apple Crisp Oatmilk Macchiato",
    "Caramel Macchiato",
    "Espresso Macchiato",
    "Caffe Mocha",
    "Starbucks Reserve Dark Chocolate Mocha",
    "White Chocolate Mocha"
  ];
  const randomDrink = hotDrinkOptions[Math.floor(Math.random() * hotDrinkOptions.length)];
  return `${randomDrink}`;
}

function getRandomColdDrink() {
  const coldDrinkOptions = [
    "Iced Coffee",
    "Starbucks Cold Brew Coffee",
    "Starbucks Cold Brew Coffee with Milk",
    "Vanilla Sweet Cream Cold Brew",
    "Pumkin Cream Cold Brew",
    "Cinnamon Carmel Cream Cold Brew",
    "Choclate Cream Cold Brew",
    "Starbucks Reserve Cold Brew",
    "Nitro Cold Brew",
    "Cinnamon Carmel Cream Nitro Cold Brew",
    "Starbucks Reserve Nitro Cold Brew",
    "Vanilla Sweet Cream Nitro Cold Brew",
    "Iced Cofee",
    "Iced Coffee with Milk",
    "Iced Espresso",
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Oleato Iced Shaken Espresso with Oatmilk and Toffeenut",
    "Iced Toasted Vanilla Oatmilk Shaken Espresso",
    "Iced Brown Sugar Oatmilk shaken Espresso",
    "Iced Chocolate Almondmilk Shaken Espresso",
    "Iced Shaken Epresso",
    "Iced Caffe Americano",
    "Iced Flat White",
    "Iced Honey Almondmilk Flat White",
    "Iced Cappuccino",
    "Iced Latte",
    "Iced Caffe Latte",
    "Iced Pumpkin Spice Latte",
    "Starbucks Reserve Iced Latte",
    "Starbucks Reserve Iced Hazelnut Bianco Latte",
    "Iced Cinnamon Dolce Latte",
    "Iced Starbucks Blone Vanilla Latte",
    "Iced Apple Crisp Oatmilk Macchiato",
    "Iced Caramel Macchiato",
    "Iced White Chocolate Mocha",
    "Iced Caffe Mocha",
    "Starbucks Reserve Iced Dark Chocolate Mocha"
  ];
  const randomDrink = coldDrinkOptions[Math.floor(Math.random() * coldDrinkOptions.length)];
  return `${randomDrink}`;
}

function getRandomTea() {
  const teaOptions = [
    "Teavana London Fog Tea Latte",
    "Royal English Breakfast Tea",
    "Royal English Breakfast Tea Latte",
    "Matcha Tea Latte",
    "Chai Tea",
    "Chai Tea Latte",
    "Iced Passion Tango Tea",
    "Iced Green Tea",
    "Iced Black Tea",
    "Iced Black Tea Lemonade",
    "Iced Royal English Breakfast Tea Latte",
    "Emperor's Clouds & Mist",
    "Iced London Fog Tea Latte",
    "Iced Pumpkin Cream Chai Tea Latte",
    "Iced Chai Tea Latte",
    "Iced Peach Green Tea",
    "Iced Peach Green Tea Lemonade",
    "Iced Matcha Tea Latte",
    "Iced Green Tea",
    "Iced Green Tea Lemonade",
    "Iced Matcha Lemonade",
    "Iced Passion Tango Tea",
    "Iced Passion Tango Tea Lemonade",
    "White Tea",
    "Mint Majesty Tea",
    "Peach Tranquility Herbal Tea",
    "Jade Citrus Mint Tea",
    "Earl Grey Tea",
  ];
  const randomDrink = teaOptions[Math.floor(Math.random() * teaOptions.length)];
  return `${randomDrink}`;
}

function getRandomRefresher() {
  const refresherOptions = [
    "Strawberry Acai Refresher",
    "Fronzen Pineapple Passionfruit Lemonade Refresher",
    "Fronze Strawberry Acai Refresher",
    "Frozen Mango Dragonfruit Lemonade Refresher",
    "Paradise Drink Refresher",
    "Pineapple Passionfruit Refresher",
    "Mango Dragonfruit Refresher",
    "Pink Drink Refresher",
    "Strawberry Acai Lemonade Refresher",
    "Dragon Drink Refresher",
    "Mango Dragonfruit Refresher",
    "Mango Dragonfruit Lemonade Refresher"
  ];
  const randomDrink = refresherOptions[Math.floor(Math.random() * refresherOptions.length)];
  return `${randomDrink}`;
}

function getRandomFood() {
  const foodOptions = [
   "Bacon, Sausage & Egg Wrap",
   "Impossible Breakfast Sandwich",
   "Bacon, Gouda & Egg Sandwich",
   "Double-Smoked Cheddar & Egg Sandwich",
   "Turkey Bacon, Cheddar & Egg White Sandwich",
   "Sausage, Cheddar & Egg Sandwich",
   "Spinach, Feta & Egg White Wrap",
   "Plain Bagel",
   "Everything Bagel",
   "Chocolate Chip Cookie",
   "Baked Apple Croissant",
   "Ham & Swiss Croissant",
   "Butter Croissant",
   "Chocolate Croissant",
   "Cinnamon Coffe Cake",
   "Iced Lemon Loaf",
   "Pumpkin & Pepita Loaf",
   "Banana Walnut & Peacan Loaf",
   "Cheese Danish",
   "Glazed Doughnut",
   "Pumpkin Cream Cheese Muffin",
   "Blueberry Scone",
   "Petite Vanilla Bean Scone",
   "Blueberry Muffin"
  ];
  const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
  return `${randomFood}`;
}

document.getElementById("reset-btn").addEventListener("click", function() {
  resetOrder(); // Reset the order when the "Reset" button is clicked
});
