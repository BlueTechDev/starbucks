let selectedSize = "";

document.getElementById("reset-btn").style.display = "none";

function getRandomDrink() {
  const category = Math.floor(Math.random() * 5);

  switch (category) {
    case 0:
      selectedSize = getRandomSize();
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
    case 4:
      selectedSize = getRandomSize();
      return getRandomFrappucino();
    default:
      return "Unknown category";
  }
}

document.getElementById("drink-btn").addEventListener("click", function () {
  resetOrder();
  const drink = getRandomDrink();

  const randomDrink = `Your drink is a ${selectedSize} ${drink}.`;
  document.getElementById("randomize-btn").style.display = "none";
  document.getElementById("customize-btn").style.display = "none";
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-drink").textContent = randomDrink;
    document.getElementById("drink-btn").style.display = "inline-block";
    document.getElementById("reset-btn").style.display = "inline-block"; // Show the reset button
  }, 2000);
});


function resetOrder() {
  document.body.style.backgroundImage = 'url(/assets/coffee.jpg)';
  clearOrderElements();
  hideAllButtons();
  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "inline-block"; // Hide the random button
  document.getElementById("drink-btn").style.display = "inline-block"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  document.getElementById("reset-btn").style.display = "none"; // Hide the drink button
}


document.getElementById("randomize-btn").addEventListener("click", function () {
  resetOrder();
  const drink = getRandomDrink();
  const food = getRandomFoodOrder();
  
  const randomOrder = `Today's order is a ${selectedSize} ${drink} with a ${food} on the side.`;

  document.getElementById("randomize-btn").style.display = "none";
  document.getElementById("customize-btn").style.display = "none";
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-drink").textContent = randomOrder;
    document.getElementById("randomize-btn").style.display = "inline-block";
    document.getElementById("drink-btn").style.display = "none"; // Show the drink button
    document.getElementById("customize-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "inline-block"; // Show the reset button
    showResetButton();
  }, 2000);
});


document.getElementById("customize-btn").addEventListener("click", function () {
  resetOrder();
  showCustomizeButtons();
});

function showCustomizeButtons() {

  document.getElementById("randomize-btn").style.display = "none";
  document.getElementById("drink-btn").style.display = "none";
  document.getElementById("hot-btn").style.display = "inline-block";
  document.getElementById("cold-btn").style.display = "inline-block";
  document.getElementById("frappe-btn").style.display = "inline-block";
  document.getElementById("tea-btn").style.display = "inline-block";
  document.getElementById("refresh-btn").style.display = "inline-block";
  document.getElementById("seasonal-btn").style.display = "inline-block";
  document.getElementById("customize-btn").style.display = "none";
  showResetButton();
}

document.getElementById("hot-btn").addEventListener("click", function () {
  resetOrder();
  const hotDrink = getRandomHotDrink();
  const yourHotDrink = `Your order is a ${selectedSize} ${hotDrink}.`;
  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourHotDrink;
    document.getElementById("hot-btn").style.display = "inline-block"; // Show the hot button
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    showResetButton();
  }, 2000);
});


document.getElementById("cold-btn").addEventListener("click", function () {
  resetOrder();
  const coldDrink = getRandomColdDrink();
  const yourColdDrink = `Your order is a ${selectedSize} ${coldDrink}.`;

  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourColdDrink;
    document.getElementById("cold-btn").style.display = "inline-block"; // Show the cold button
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    showResetButton();
  }, 2000);
});


document.getElementById("frappe-btn").addEventListener("click", function () {
  resetOrder();
  const frappeDrink = getRandomFrappucino();
  const yourFrappeDrink = `Your order is a ${selectedSize} ${frappeDrink}.`;

  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourFrappeDrink;

    document.getElementById("random-drink").textContent = frappeDrink;
    document.getElementById("frappe-btn").style.display = "inline-block";
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    document.getElementById("reset-btn").style.display = "inline-block";
    showResetButton();
  }, 2000);
});

document.getElementById("refresh-btn").addEventListener("click", function () {
  resetOrder();
  const refresherDrink = getRandomRefresher();
  const yourRefresherDrink = `Your order is a ${selectedSize} ${refresherDrink}.`;

  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourRefresherDrink;

    document.getElementById("refresh-btn").style.display = "inline-block";
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    document.getElementById("reset-btn").style.display = "inline-block";
    showResetButton();
  }, 2000);
});

document.getElementById("tea-btn").addEventListener("click", function () {
  resetOrder();
  const teaDrink = getRandomTea();
  const yourTeaDrink = `Your order is a ${selectedSize} ${teaDrink}.`;

  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourTeaDrink;

    document.getElementById("tea-btn").style.display = "inline-block";
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    document.getElementById("reset-btn").style.display = "inline-block";
    showResetButton();
  }, 2000);
});

document.getElementById("seasonal-btn").addEventListener("click", function () {
  resetOrder();
  const seasonalItem = getSeasonalItem();
  const yourSeasonalItem = `Your order is a ${selectedSize} ${seasonalItem}.`;

  document.getElementById("cold-btn").style.display = "none"; // Hide the cold button
  document.getElementById("hot-btn").style.display = "none"; // Hide the hot button
  document.getElementById("frappe-btn").style.display = "none"; // Hide the frappe button
  document.getElementById("tea-btn").style.display = "none"; // Hide the tea button
  document.getElementById("seasonal-btn").style.display = "none"; // Hide the seasonal button
  document.getElementById("customize-btn").style.display = "none"; // Hide the custome button
  document.getElementById("randomize-btn").style.display = "none"; // Hide the random button
  document.getElementById("drink-btn").style.display = "none"; // Hide the drink button
  document.getElementById("refresh-btn").style.display = "none"; // Hide the drink button
  showLoadingIcon();

  setTimeout(() => {
    hideLoadingIcon();
    document.getElementById("random-order").textContent = yourSeasonalItem;

    document.getElementById("seasonal-btn").style.display = "inline-block";
    document.getElementById("customize-btn").style.display = "inline-block"; // Hide the custome button
    document.getElementById("reset-btn").style.display = "inline-block";
    showResetButton();
    setSeasonalBackgroundImage(seasonalItem);
  }, 2000);
});

document.getElementById("reset-btn").addEventListener("click", function () {
  resetOrder();
  document.getElementById("randomize-btn").style.display = "inline-block"
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
  const size = ["Grande", "Venti", "Trenta"];
  const randomSize = size[Math.floor(Math.random() * size.length)];
  return `${randomSize}`;
}

function getRandomHotDrink() {
  const hotDrinkOptions = [
    "Featured Blonde Roast",
    "Featured Medium Roast",
    "Featured Dark",
    "Featured Blonde Roast Veranda Blend",
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
    "Cinnamon Dolce Latte",
    "White Chocolate Mocha",
    "Caramel Macchiato",
    "Honey Almondmilk Flat White",
    "Caramel Flan Latte",
    "Toasted White Chocolate Mocha",
    "Chestnut Praline Latte",
    "Flat white",
    "Honey Almondmilk Flat White",
    "Pumpkin Spice Latte",
    "Oleato Caffe Latte with Oatmilk",
    "Starbucks Reserve Latte",
    "Starbucks Reserve Hazelnut Bianco Latte",
    "Starbucks Blonde Vanilla Latte",
    "Apple Crisp Oatmilk Macchiato",
    "Espresso Macchiato",
    "Caffe Mocha",
    "Starbucks Reserve Dark Chocolate Mocha",
  ];
  const randomDrink = hotDrinkOptions[Math.floor(Math.random() * hotDrinkOptions.length)];
  return `${randomDrink}`;
}

function getRandomColdDrink() {
  const icedDrinkOptions = [
    "Iced Coffee",
    "Starbucks Cold Brew Coffee",
    "Starbucks Cold Brew Coffee with Milk",
    "Vanilla Sweet Cream Cold Brew",
    "Pumpkin Cream Cold Brew",
    "Cinnamon Caramel Cream Cold Brew",
    "Chocolate Cream Cold Brew",
    "Starbucks Reserve Cold Brew",
    "Nitro Cold Brew",
    "Cinnamon Caramel Cream Nitro Cold Brew",
    "Starbucks Reserve Nitro Cold Brew",
    "Vanilla Sweet Cream Nitro Cold Brew",
    "Iced Coffee",
    "Iced Coffee with Milk",
    "Iced Espresso",
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Oleato Iced Shaken Espresso with Oatmilk and Toffeenut",
    "Iced Toasted Vanilla Oatmilk Shaken Espresso",
    "Iced Brown Sugar Oatmilk Shaken Espresso",
    "Iced Chocolate Almondmilk Shaken Espresso",
    "Iced Shaken Espresso",
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
    "Iced Starbucks Blonde Vanilla Latte",
    "Iced Apple Crisp Oatmilk Macchiato",
    "Iced Caramel Macchiato",
    "Iced White Chocolate Mocha",
    "Iced Caffe Mocha",
    "Starbucks Reserve Iced Dark Chocolate Mocha"
  ];
  
  const randomDrink = icedDrinkOptions[Math.floor(Math.random() * icedDrinkOptions.length)];
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
    "Earl Grey Tea"
  ];
  
  const randomDrink = teaOptions[Math.floor(Math.random() * teaOptions.length)];
  return `${randomDrink}`;
}

function getRandomRefresher() {
  const refresherOptions = [
    "Strawberry Acai Refresher",
    "Frozen Pineapple Passionfruit Lemonade Refresher",
    "Frozen Strawberry Acai Refresher",
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

function getRandomFrappucino() {
  const frappuccinoOptions = [
    "Apple Crisp Oatmilk Frappuccino Blended Beverage",
    "Pumpkin Spice Frappuccino Blended Beverage",
    "Mocha Cookie Crumble Frappuccino Blended Beverage",
    "Caramel Ribbon Crunch Frappuccino Blended Beverage",
    "Espresso Frappuccino Blended Beverage",
    "Caffe Vanilla Frappuccino Blended Beverage",
    "Caramel Frappuccino Blended Beverage",
    "Coffee Frappuccino Blended Beverage",
    "Mocha Frappuccino Blended Beverage",
    "Java Chip Frappuccino Blended Beverage",
    "White Chocolate Mocha Frappuccino Blended Beverage",
    "Apple Crisp Oatmilk Creme Frappuccino Blended Beverage",
    "Pumpkin Spice Creme Frappuccino Blended Beverage",
    "Chocolate Cookie Crumble Creme Frappuccino",
    "Caramel Ribbon Crunch Creme Frappuccino Blended Beverage",
    "Strawberry Creme Frappuccino Blended Beverage",
    "Chai Creme Frappuccino Blended Beverage",
    "Double Chocolaty Chip Creme Frappuccino Blended Beverage",
    "Matcha Creme Frappuccino Blended Beverage",
    "Vanilla Bean Creme Frappuccino Blended Beverage",
    "White Chocolate Creme Frappuccino Blended Beverage"
  ];

  const randomDrink = frappuccinoOptions[Math.floor(Math.random()*frappuccinoOptions.length)] ;
  return  ` ${randomDrink}`;
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
  "Cinnamon Coffee Cake",
  "Iced Lemon Loaf",
  "Pumpkin & Pepita Loaf",
  "Banana Walnut & Pecan Loaf",
  "Cheese Danish",
  "Glazed Doughnut",
  "Pumpkin Cream Cheese Muffin",
  "Blueberry Scone",
  "Petite Vanilla Bean Scone",
  "Blueberry Muffin",
  "Rolled & Steel-cut Oatmeal",
  "Berry Trio Parfait",
  "Crispy Grilled Cheese on Sourdough",
  "Ham & Swiss on Baguette",
  "Turkey, Provolone & Pesto on Ciabatta",
  "Tomato & Mozzarella on Focaccia"
];
  const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
  return `${randomFood}`;
}

function getSeasonalItem() {
  const seasonalItems = [
    "Iced Pumpkin Cream Chai tea Latte",
    "Pumpkin Spice Latte",
    "Pumpkin Cream Cold Brew",
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Pumpkin Cream Cheese Muffin",
    "Baked Apple Croissant",
  ];

  const randomSeasonalItem = seasonalItems[Math.floor(Math.random() * seasonalItems.length)];
  return `${randomSeasonalItem}`;
}

function showLoadingIcon() {
  document.getElementById("loading-icon").style.display = "block";
}

function hideLoadingIcon() {
  document.getElementById("loading-icon").style.display = "none";
}

function hideAllButtons() {
  document.getElementById("drink-btn").style.display = "none";
  document.getElementById("randomize-btn").style.display = "none";
  document.getElementById("customize-btn").style.display = "none";
}

function showResetButton() {
  document.getElementById("reset-btn").style.display = "inline-block";
  document.getElementById("")
}

function clearOrderElements() {
  document.getElementById("random-drink").textContent = "";
  document.getElementById("random-order").textContent = "";
}

document.getElementById("reset-btn").addEventListener("click", function() {
  resetOrder(); // Reset the order when the "Reset" button is clicked
});

