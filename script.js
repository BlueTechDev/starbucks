function getRandomDrink() {
        const category = Math.floor(Math.random() * 4);
        
        switch (category) {
          case 0:
            return getRandomSize();
          case 1:
            return getRandomHotDrink();
          case 2:
            return getRandomColdDrink();
          case 3:
            return getRandomTea();
          case 4:
            return getRandomRefresher();
          default:
            return "Unknown category";
        }
      }

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
        const size = ["Grande", "Vente","Trenta"];
        const randomSize = size[Math.floor(Math.random() * size.length)];
        return `${randomSize}`;
      }
      
      function getRandomHotDrink() {
        const hotDrinkOptions = ["Caffè Americano", "Cappuccino", "Caffè Latte", "Caffè Mocha", "Flat White", "Espresso", "Macchiato", "Drip Coffee", "Pour-Over Coffee", "French Press Coffee"];
        const randomDrink = hotDrinkOptions[Math.floor(Math.random() * hotDrinkOptions.length)];
        return `${randomDrink}`;
      }
      
      function getRandomColdDrink() {
        const coldDrinkOptions = ["Iced Coffee", "Cold Brew", "Nitro Cold Brew", "Iced Americano", "Iced Cappuccino", "Iced Latte", "Iced Mocha", "Frappuccino", "Iced Macchiato", "Iced Vanilla Bean Coconutmilk Latte"];
        const randomDrink = coldDrinkOptions[Math.floor(Math.random() * coldDrinkOptions.length)];
        return `${randomDrink}`;
      }
      
      function getRandomTea() {
        const teaOptions = ["Matcha Green Tea Latte", "Chai Tea Latte", "Iced Passion Tango Tea", "Iced Green Tea", "Iced Black Tea", "London Fog Tea Latte", "White Tea", "Mint Majesty Herbal Tea", "Peach Tranquility Herbal Tea", "Jade Citrus Mint Green Tea"];
        const randomDrink = teaOptions[Math.floor(Math.random() * teaOptions.length)];
        return `${randomDrink}`;
      }
      
      function getRandomRefresher() {
        const refresherOptions = ["Strawberry Acai Refresher", "Mango Dragonfruit Refresher", "Very Berry Hibiscus Refresher", "Pink Drink", "Violet Drink", "Dragon Drink", "Kiwi Starfruit Refresher", "Guava Passionfruit Refresher", "Pineapple Matcha Drink", "Iced Coconutmilk Mojito"];
        const randomDrink = refresherOptions[Math.floor(Math.random() * refresherOptions.length)];
        return `${randomDrink}`;
      }

      function getRandomFood() {
        const foodOptions = ["Bacon & Gouda Artisan Breakfast Sandwich", "Spinach & Feta Breakfast Wrap", "Classic Whole-Grain Oatmeal", "Ham & Swiss Panini", "Turkey & Havarti Sandwich", "Chicken Caprese Sandwich", "Protein Bistro Box", "Egg Salad Sandwich", "Double Chocolate Chunk Brownie", "Blueberry Muffin"];
        const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
        return `${randomFood}`;
      }

      document.getElementById("randomize-btn").addEventListener("click", function() {
        const randomOrder = `Today's order is a ${getRandomSize()} ${getRandomDrink()} with a ${getRandomFoodOrder()} on the side.`;
        document.getElementById("random-order").textContent = randomOrder;
      });