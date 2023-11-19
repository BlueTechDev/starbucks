document.addEventListener("DOMContentLoaded", function () {
  const randomizeBtn = document.getElementById("randomize-btn");
  const orderDisplay = document.getElementById("random-order");
  const drinkBtn = document.getElementById("drink-btn");
  const resetBtn = document.getElementById("reset-btn");
  const drinkDisplay = document.getElementById("random-drink");
  const loadingIcon = document.getElementById("loading-icon");


  function hideButtons() {
    drinkBtn.style.display = "none";
    randomizeBtn.style.display = "none";
    resetBtn.style.display = "none";
  }

  function showButtons() {
    drinkBtn.style.display = "inline-block";
    randomizeBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
  }

  function hideElements() {
    orderDisplay.style.display = "none";
    drinkDisplay.style.display = "none";
    hideButtons();
  }

  function showElements() {
    orderDisplay.style.display = "block";
    drinkDisplay.style.display = "block";
    showButtons();
  }


  function getRandomDrinkSize() {
    const sizes = [
      "Grande",
      "Venti",
      "Trenta",
    ];
  
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }
  
  // Usage
  const randomSize = getRandomDrinkSize();
  console.log(randomSize); // This will output a random size: "Grande", "Venti", or "Trenta"
  

  drinkBtn.addEventListener("click", function () {
    // Hide buttons and elements
    hideElements();
    loadingIcon.style.display = "inline-block";

    const sizes = getRandomDrinkSize();
    const randomDrink = getRandomDrink();
    drinkDisplay.textContent = `Your Random Drink: ${sizes} ${randomDrink}`;

    // Hide buttons and elements
    hideElements();
    loadingIcon.style.display = "inline-block";

    setTimeout(() => {
      loadingIcon.style.display = "none";
      showElements();
    }, 5000);
  });

  function getRandomDrink() {
    const drinkList = [
      "Featured Blonde Roast",
      "Featured Medium Roast",
      "Featured Dark",
      "Featured Blonde Roast Veranda Blend",
      "Featured Decaf Roast",
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
      "Starbucks Reserve Iced Dark Chocolate Mocha",
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
      "Mango Dragonfruit Lemonade Refresher",
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

    const randomIndex = Math.floor(Math.random() * drinkList.length);
    const randomDrink = drinkList[randomIndex];
    return randomDrink;
  }

  function getRandomFood() {
    const foodList = [
      "Bacon, Sausage & Egg Wrap",
      "Impossible Breakfast Sandwich",
      // Remaining food items...
    ];

    const randomFoodIndex = Math.floor(Math.random() * foodList.length);
    const randomFood = foodList[randomFoodIndex];

    return randomFood;
  }

  randomizeBtn.addEventListener("click", function () {
     // Hide buttons and elements
     hideElements();
     loadingIcon.style.display = "inline-block";

    const sizes = getRandomDrinkSize();
    const randomFood = getRandomFood();
    const randomDrink = getRandomDrink();

      // Show the text and reset button
      orderDisplay.textContent = `Your Random order is: ${sizes} ${randomDrink} with a ${randomFood} on the side.`;
      setTimeout(() => {
        loadingIcon.style.display = "none";
        showElements();
      }, 5000);
  });

  resetBtn.addEventListener("click", function () {
    orderDisplay.textContent = ""; // Clear the text content
    drinkDisplay.textContent = ""; // Clear the text content
  });
});
