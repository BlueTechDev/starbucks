const drinks = ["Featured Blonde Roast",
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
]

// Define your API key. Replace 'YOUR_API_KEY' with your actual GPT-3 API key.
const apiKey = '';//Insert your own api key

// Listen for the button click event
document.getElementById('user-input-btn').addEventListener('click', async () => {
    // Get the user's input preferences
    const userPreferences = document.getElementById('user-input-text').value;

    // Check if the userPreferences are not empty
    if (userPreferences) {
        // Prepare the message to send to GPT-3
        const message = `Create a Starbucks drink based on the following preferences: ${userPreferences}`;

        // Fetch a response from GPT-3
        const response = await getGpt3Response(message);

        // Display the response
        displayResponse(response.choices[0].text);
    } else {
        // Handle the case when userPreferences are empty
        displayResponse('Please enter your preferences.');
    }
});

// Function to fetch a response from GPT-3
async function getGpt3Response(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50, // Adjust as needed
        }),
    });
    return response.json();
}

// Function to display the response in the HTML
function displayResponse(responseText) {
    document.getElementById('chatgpt-response').innerText = responseText;
}
