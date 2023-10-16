const drinks = [
    {
      name: "Featured Blonde Roast",
      description: "A light and smooth roast with a mild flavor.",
      keywords: ["light roast", "mild", "smooth"],
    },
    {
      name: "Caramel Macchiato",
      description: "A sweet espresso-based drink with caramel syrup and steamed milk.",
      keywords: ["caramel", "espresso", "sweet", "milk"],
    },
    {
        name: "Featured Blonde Roast",
        description: "A delightful and mild coffee with bright, citrusy notes and a light body.",
        keywords: ["blonde roast", "mild", "citrusy", "light body"],
      },
      {
        name: "Featured Medium Roast",
        description: "A balanced and medium-bodied coffee with hints of nuttiness and a smooth finish.",
        keywords: ["medium roast", "balanced", "nutty", "smooth finish"],
      },
      {
        name: "Featured Dark",
        description: "A bold and full-bodied coffee with rich, roasted flavors and a satisfying depth.",
        keywords: ["dark roast", "bold", "full-bodied", "rich flavors"],
      },
      {
        name: "Featured Blonde Roast Veranda Blend",
        description: "A mellow and light-bodied coffee with a soft, cocoa finish and a touch of sweetness.",
        keywords: ["blonde roast", "mellow", "light body", "cocoa finish", "sweet"],
      },
      {
        name: "Featured Decaf Roast",
        description: "A decaffeinated coffee with a smooth and gentle flavor, perfect for those seeking a caffeine-free option.",
        keywords: ["decaf", "smooth", "caffeine-free", "gentle flavor"],
      },
      {
        name: "Cafe Misto",
        description: "A comforting blend of brewed coffee and steamed milk, offering a smooth and warm experience.",
        keywords: ["cafe misto", "brewed coffee", "steamed milk", "smooth", "warm"],
      },
      {
        name: "Caffè Americano",
        description: "A bold and intense coffee made by diluting espresso with hot water, delivering a rich and robust flavor.",
        keywords: ["caffe americano", "espresso", "diluted", "rich flavor"],
      },
      {
        name: "Cappuccino",
        description: "A classic Italian coffee with equal parts espresso, steamed milk, and milk foam, known for its strong and creamy taste.",
        keywords: ["cappuccino", "espresso", "steamed milk", "milk foam", "strong", "creamy"],
      },
      {
        name: "Caffè Latte",
        description: "A smooth and milky coffee consisting of espresso and steamed milk, offering a mellow and delicate flavor.",
        keywords: ["caffe latte", "espresso", "steamed milk", "smooth", "mellow flavor"],
      },
      {
        name: "Caffè Mocha",
        description: "A delightful combination of espresso, steamed milk, and chocolate, resulting in a rich and indulgent coffee treat.",
        keywords: ["caffe mocha", "espresso", "steamed milk", "chocolate", "rich", "indulgent"],
      },
      {
        name: "Flat White",
        description: "A creamy coffee made with espresso and steamed milk, known for its velvety texture and balanced flavor.",
        keywords: ["flat white", "espresso", "steamed milk", "creamy", "velvety", "balanced flavor"],
      },
      {
        name: "Espresso",
        description: "A concentrated coffee shot with a bold and intense flavor, perfect for those who enjoy a strong coffee experience.",
        keywords: ["espresso", "concentrated", "bold", "intense flavor", "strong"],
      },{
        name: "Espresso Con Panna",
        description: "A simple yet indulgent coffee made with a shot of espresso topped with a dollop of whipped cream, offering a perfect balance of bitterness and sweetness.",
        keywords: ["espresso con panna", "espresso", "whipped cream", "bitterness", "sweetness"],
      },
      {
        name: "Macchiato",
        description: "An espresso 'stained' with a small amount of frothy milk, creating a harmonious blend of strong coffee and creamy texture.",
        keywords: ["macchiato", "espresso", "frothy milk", "strong coffee", "creamy texture"],
      },
      {
        name: "Drip Coffee",
        description: "A straightforward and classic coffee made by dripping hot water over ground coffee beans, resulting in a familiar and comforting brew.",
        keywords: ["drip coffee", "hot water", "ground coffee", "classic", "familiar", "comforting"],
      },
      {
        name: "Pour-Over Coffee",
        description: "A carefully handcrafted coffee made by pouring hot water over ground coffee beans using a pour-over method, offering a clean and nuanced flavor profile.",
        keywords: ["pour-over coffee", "hot water", "handcrafted", "ground coffee", "clean flavor", "nuanced"],
      },
      {
        name: "French Press Coffee",
        description: "A rich and full-bodied coffee made by steeping ground coffee beans in hot water and pressing them down, resulting in a bold and robust brew.",
        keywords: ["French press coffee", "ground coffee", "steeping", "bold", "robust", "full-bodied"],
      },
      {
        name: "Caffè Americano Misto",
        description: "A milder variation of the Americano, made by diluting espresso with hot water and adding steamed milk, offering a balanced and enjoyable coffee experience.",
        keywords: ["caffe americano misto", "espresso", "diluted", "hot water", "steamed milk", "balanced", "enjoyable"],
      },
      {
        name: "Café Au Lait",
        description: "A simple and comforting coffee consisting of brewed coffee and steamed milk, known for its warm and soothing qualities.",
        keywords: ["cafe au lait", "brewed coffee", "steamed milk", "comforting", "warm", "soothing"],
      },
      {
        name: "Cinnamon Dolce Latte",
        description: "A delightful coffee featuring espresso, steamed milk, and cinnamon dolce syrup, delivering a sweet and spiced flavor experience.",
        keywords: ["cinnamon dolce latte", "espresso", "steamed milk", "cinnamon dolce syrup", "sweet", "spiced flavor"],
      },
      {
        name: "White Chocolate Mocha",
        description: "A luscious coffee blend of espresso, steamed milk, and white chocolate mocha sauce, known for its rich and creamy taste.",
        keywords: ["white chocolate mocha", "espresso", "steamed milk", "mocha sauce", "rich", "creamy"],
      },
      {
        name: "Caramel Macchiato",
        description: "An indulgent coffee made with espresso, vanilla syrup, steamed milk, and caramel drizzle, offering a sweet and caramelized flavor profile.",
        keywords: ["caramel macchiato", "espresso", "vanilla syrup", "steamed milk", "caramel drizzle", "sweet", "caramelized flavor"],
      },
      {
        name: "Honey Almondmilk Flat White",
        description: "A dairy-free coffee option featuring espresso, honey, and almondmilk, providing a nutty and slightly sweet coffee experience.",
        keywords: ["honey almondmilk flat white", "espresso", "honey", "almondmilk", "nutty", "slightly sweet"],
      },
      {
        name: "Caramel Flan Latte",
        description: "A rich coffee creation with espresso, steamed milk, and caramel flan syrup, offering a caramel and creamy delight.",
        keywords: ["caramel flan latte", "espresso", "steamed milk", "caramel flan syrup", "caramel", "creamy"],
      },
      {
        name: "Toasted White Chocolate Mocha",
        description: "A coffee treat featuring espresso, steamed milk, and toasted white chocolate mocha sauce, known for its toasty and creamy flavor.",
        keywords: ["toasted white chocolate mocha", "espresso", "steamed milk", "mocha sauce", "toasty", "creamy"],
      },
      {
        name: "Chestnut Praline Latte",
        description: "A seasonal coffee favorite with espresso, steamed milk, and chestnut praline syrup, offering a nutty and warm flavor experience.",
        keywords: ["chestnut praline latte", "espresso", "steamed milk", "praline syrup", "nutty", "warm flavor"],
      },
      {
        name: "Flat White",
        description: "A creamy coffee made with espresso and steamed milk, known for its velvety texture and balanced flavor.",
        keywords: ["flat white", "espresso", "steamed milk", "creamy", "velvety", "balanced flavor"],
      },
      {
        name: "Honey Almondmilk Flat White",
        description: "A dairy-free coffee delight with espresso, honey, and almondmilk, providing a nutty and slightly sweet coffee experience.",
        keywords: ["honey almondmilk flat white", "espresso", "honey", "almondmilk", "nutty", "slightly sweet"],
      },
      {
        name: "Pumpkin Spice Latte",
        description: "A seasonal favorite featuring espresso, steamed milk, and pumpkin spice sauce, known for its warm and autumnal flavor.",
        keywords: ["pumpkin spice latte", "espresso", "steamed milk", "pumpkin spice sauce", "warm", "autumnal flavor"],
      },
      {
        name: "Oleato Caffe Latte with Oatmilk",
        description: "A coffee option made with espresso and creamy oatmilk, offering a nutty and velvety-smooth coffee experience.",
        keywords: ["oleato caffe latte", "espresso", "oatmilk", "nutty", "velvety-smooth"],
      },
      {
        name: "Starbucks Reserve Latte",
        description: "A specialty coffee featuring espresso, steamed milk, and Starbucks Reserve coffee, known for its bold and unique flavor profile.",
        keywords: ["starbucks reserve latte", "espresso", "steamed milk", "reserve coffee", "bold", "unique flavor"],
      },
      {
        name: "Starbucks Reserve Hazelnut Bianco Latte",
        description: "A unique coffee blend with espresso, hazelnut syrup, and steamed milk, offering a nutty and creamy flavor experience.",
        keywords: ["hazelnut bianco latte", "espresso", "hazelnut syrup", "steamed milk", "nutty", "creamy"],
      },
      {
        name: "Starbucks Blonde Vanilla Latte",
        description: "A coffee delight with espresso, vanilla syrup, and steamed milk, known for its smooth and vanilla-infused flavor.",
        keywords: ["blonde vanilla latte", "espresso", "vanilla syrup", "steamed milk", "smooth", "vanilla-infused flavor"],
      },
      {
        name: "Apple Crisp Oatmilk Macchiato",
        description: "A seasonal coffee creation with espresso, apple crisp syrup, and oatmilk, offering a fruity and delightful coffee experience.",
        keywords: ["apple crisp oatmilk macchiato", "espresso", "apple crisp syrup", "oatmilk", "fruity", "delightful"],
      },
      {
        name: "Espresso Macchiato",
        description: "A simple yet bold coffee made with espresso and a dollop of frothy milk, known for its strong and rich flavor.",
        keywords: ["espresso macchiato", "espresso", "frothy milk", "strong", "rich flavor"],
      },
      {
        name: "Caffe Mocha",
        description: "A classic coffee blend with espresso, steamed milk, and mocha sauce, offering a rich and chocolatey flavor profile.",
        keywords: ["caffe mocha", "espresso", "steamed milk", "mocha sauce", "rich", "chocolatey flavor"],
      },
      {
        name: "Starbucks Reserve Dark Chocolate Mocha",
        description: "A premium coffee featuring espresso, steamed milk, and dark chocolate mocha sauce, known for its indulgent and bold flavor.",
        keywords: ["starbucks reserve dark chocolate mocha", "espresso", "steamed milk", "dark chocolate mocha sauce", "indulgent", "bold flavor"],
      },
      {
        name: "Iced Coffee",
        description: "A refreshing and chilled coffee made with brewed coffee and ice, providing a clean and crisp coffee experience.",
        keywords: ["iced coffee", "brewed coffee", "ice", "refreshing", "clean", "crisp"],
      },
      {
        name: "Starbucks Cold Brew Coffee",
        description: "A chilled coffee beverage brewed over an extended period, offering a smooth and full-bodied coffee experience.",
        keywords: ["starbucks cold brew coffee", "chilled coffee", "brewed", "smooth", "full-bodied"],
      },
      {
        name: "Starbucks Cold Brew Coffee with Milk",
        description: "Cold brew coffee mixed with creamy milk, resulting in a refreshing and creamy coffee delight.",
        keywords: ["cold brew coffee with milk", "cold brew", "creamy milk", "refreshing", "creamy"],
      },
      {
        name: "Vanilla Sweet Cream Cold Brew",
        description: "Cold brew coffee with sweet vanilla and a touch of cream, known for its sweet and velvety coffee flavor.",
        keywords: ["vanilla sweet cream cold brew", "cold brew coffee", "vanilla", "cream", "sweet", "velvety"],
      },
      {
        name: "Pumpkin Cream Cold Brew",
        description: "A seasonal cold brew coffee with pumpkin spice cream, offering a pumpkin-spiced and creamy coffee experience.",
        keywords: ["pumpkin cream cold brew", "seasonal cold brew", "pumpkin spice cream", "pumpkin-spiced", "creamy"],
      },
      {
        name: "Cinnamon Caramel Cream Cold Brew",
        description: "Cold brew coffee with a blend of cinnamon and caramel flavors, providing a spiced and indulgent coffee delight.",
        keywords: ["cinnamon caramel cream cold brew", "cold brew coffee", "cinnamon", "caramel", "spiced", "indulgent"],
      },
      {
        name: "Chocolate Cream Cold Brew",
        description: "Cold brew coffee with rich chocolatey notes and creamy undertones, offering a chocolate-infused coffee experience.",
        keywords: ["chocolate cream cold brew", "cold brew coffee", "rich chocolatey notes", "creamy undertones", "chocolate-infused"],
      },
      {
        name: "Starbucks Reserve Cold Brew",
        description: "A premium cold brew coffee made with Starbucks Reserve beans, known for its distinctive and exceptional flavor profile.",
        keywords: ["starbucks reserve cold brew", "premium cold brew coffee", "reserve beans", "distinctive flavor", "exceptional"],
      },
      {
        name: "Nitro Cold Brew",
        description: "Cold brew coffee infused with nitrogen, resulting in a creamy and effervescent coffee experience.",
        keywords: ["nitro cold brew", "cold brew coffee", "nitrogen", "creamy", "effervescent"],
      },
      {
        name: "Cinnamon Caramel Cream Nitro Cold Brew",
        description: "Nitro cold brew coffee with a blend of cinnamon and caramel flavors, providing a spiced and creamy coffee delight.",
        keywords: ["cinnamon caramel cream nitro cold brew", "nitro cold brew coffee", "cinnamon", "caramel", "spiced", "creamy"],
      },
      {
        name: "Starbucks Reserve Nitro Cold Brew",
        description: "A premium nitro cold brew coffee made with Starbucks Reserve beans, offering a distinctive and exceptional coffee experience.",
        keywords: ["starbucks reserve nitro cold brew", "premium nitro cold brew", "reserve beans", "distinctive flavor", "exceptional"],
      },
      {
        name: "Vanilla Sweet Cream Nitro Cold Brew",
        description: "Nitro cold brew coffee with sweet vanilla and a creamy texture, known for its velvety and refreshing coffee flavor.",
        keywords: ["vanilla sweet cream nitro cold brew", "nitro cold brew coffee", "vanilla", "creamy texture", "velvety", "refreshing"],
      },
      {
        name: "Iced Coffee",
        description: "A chilled coffee option made with brewed coffee and ice, offering a refreshing and clean coffee experience.",
        keywords: ["iced coffee", "chilled coffee", "brewed coffee", "ice", "refreshing", "clean"],
      },
      {
        name: "Iced Coffee with Milk",
        description: "Iced coffee mixed with creamy milk, resulting in a refreshing and creamy coffee delight.",
        keywords: ["iced coffee with milk", "iced coffee", "creamy milk", "refreshing", "creamy"],
      },
      {
        name: "Iced Espresso",
        description: "A chilled coffee choice made with espresso and ice, offering a bold and intense coffee experience.",
        keywords: ["iced espresso", "chilled coffee", "espresso", "ice", "bold", "intense"],
      },
      {
        name: "Iced Apple Crisp Oatmilk Shaken Espresso",
        description: "A chilled coffee option with espresso, apple crisp syrup, oatmilk, and toffeenut syrup, providing a fruity and nutty coffee delight.",
        keywords: ["iced apple crisp oatmilk shaken espresso", "chilled coffee", "espresso", "apple crisp syrup", "oatmilk", "toffeenut syrup", "fruity", "nutty"],
      },
      {
        name: "Oleato Iced Shaken Espresso with Oatmilk and Toffeenut",
        description: "Iced coffee with espresso, oatmilk, and toffeenut syrup, offering a nutty and velvety-smooth coffee experience.",
        keywords: ["oleato iced shaken espresso", "iced coffee", "espresso", "oatmilk", "toffeenut syrup", "nutty", "velvety-smooth"],
      },
      {
        name: "Iced Toasted Vanilla Oatmilk Shaken Espresso",
        description: "Iced coffee with espresso, toasted vanilla syrup, and oatmilk, providing a creamy and vanilla-infused coffee experience.",
        keywords: ["iced toasted vanilla oatmilk shaken espresso", "iced coffee", "espresso", "toasted vanilla syrup", "oatmilk", "creamy", "vanilla-infused"],
      },
      {
        name: "Iced Brown Sugar Oatmilk Shaken Espresso",
        description: "A chilled coffee choice with espresso, brown sugar oatmilk, and ice, known for its sweet and creamy coffee flavor.",
        keywords: ["iced brown sugar oatmilk shaken espresso", "chilled coffee", "espresso", "brown sugar oatmilk", "ice", "sweet", "creamy"],
      },
      {
        name: "Iced Chocolate Almondmilk Shaken Espresso",
        description: "Iced coffee with espresso and chocolate almondmilk, offering a rich and chocolatey coffee experience.",
        keywords: ["iced chocolate almondmilk shaken espresso", "iced coffee", "espresso", "chocolate almondmilk", "rich", "chocolatey"],
      },
      {
        name: "Iced Shaken Espresso",
        description: "A chilled espresso coffee option with ice, known for its bold and invigorating coffee experience.",
        keywords: ["iced shaken espresso", "chilled espresso", "ice", "bold", "invigorating"],
      },
      {
        name: "Iced Caffe Americano",
        description: "A chilled coffee made with espresso and water, offering a straightforward and bold coffee experience.",
        keywords: ["iced caffe americano", "chilled coffee", "espresso", "water", "straightforward", "bold"],
      },
      {
        name: "Iced Flat White",
        description: "Iced coffee with espresso and creamy steamed milk, providing a smooth and velvety coffee delight.",
        keywords: ["iced flat white", "iced coffee", "espresso", "creamy steamed milk", "smooth", "velvety"],
      },
      {
        name: "Starbucks Cold Brew Coffee",
        description: "A chilled coffee beverage brewed over an extended period, offering a smooth and full-bodied coffee experience.",
        keywords: ["starbucks cold brew coffee", "chilled coffee", "brewed", "smooth", "full-bodied"],
      },
      {
        name: "Starbucks Cold Brew Coffee with Milk",
        description: "Cold brew coffee mixed with creamy milk, resulting in a refreshing and creamy coffee delight.",
        keywords: ["cold brew coffee with milk", "cold brew", "creamy milk", "refreshing", "creamy"],
      },
      {
        name: "Vanilla Sweet Cream Cold Brew",
        description: "Cold brew coffee with sweet vanilla and a touch of cream, known for its sweet and velvety coffee flavor.",
        keywords: ["vanilla sweet cream cold brew", "cold brew coffee", "vanilla", "cream", "sweet", "velvety"],
      },
      {
        name: "Pumpkin Cream Cold Brew",
        description: "A seasonal cold brew coffee with pumpkin spice cream, offering a pumpkin-spiced and creamy coffee experience.",
        keywords: ["pumpkin cream cold brew", "seasonal cold brew", "pumpkin spice cream", "pumpkin-spiced", "creamy"],
      },
      {
        name: "Cinnamon Caramel Cream Cold Brew",
        description: "Cold brew coffee with a blend of cinnamon and caramel flavors, providing a spiced and indulgent coffee delight.",
        keywords: ["cinnamon caramel cream cold brew", "cold brew coffee", "cinnamon", "caramel", "spiced", "indulgent"],
      },
      {
        name: "Chocolate Cream Cold Brew",
        description: "Cold brew coffee with rich chocolatey notes and creamy undertones, offering a chocolate-infused coffee experience.",
        keywords: ["chocolate cream cold brew", "cold brew coffee", "rich chocolatey notes", "creamy undertones", "chocolate-infused"],
      },
      {
        name: "Starbucks Reserve Cold Brew",
        description: "A premium cold brew coffee made with Starbucks Reserve beans, known for its distinctive and exceptional flavor profile.",
        keywords: ["starbucks reserve cold brew", "premium cold brew coffee", "reserve beans", "distinctive flavor", "exceptional"],
      },
      {
        name: "Nitro Cold Brew",
        description: "Cold brew coffee infused with nitrogen, resulting in a creamy and effervescent coffee experience.",
        keywords: ["nitro cold brew", "cold brew coffee", "nitrogen", "creamy", "effervescent"],
      },
      {
        name: "Cinnamon Caramel Cream Nitro Cold Brew",
        description: "Nitro cold brew coffee with a blend of cinnamon and caramel flavors, providing a spiced and creamy coffee delight.",
        keywords: ["cinnamon caramel cream nitro cold brew", "nitro cold brew coffee", "cinnamon", "caramel", "spiced", "creamy"],
      },
      {
        name: "Starbucks Reserve Nitro Cold Brew",
        description: "A premium nitro cold brew coffee made with Starbucks Reserve beans, offering a distinctive and exceptional coffee experience.",
        keywords: ["starbucks reserve nitro cold brew", "premium nitro cold brew", "reserve beans", "distinctive flavor", "exceptional"],
      },
      {
        name: "Vanilla Sweet Cream Nitro Cold Brew",
        description: "Nitro cold brew coffee with sweet vanilla and a creamy texture, known for its velvety and refreshing coffee flavor.",
        keywords: ["vanilla sweet cream nitro cold brew", "nitro cold brew coffee", "vanilla", "creamy texture", "velvety", "refreshing"],
      },
      {
        name: "Iced Coffee",
        description: "A chilled coffee option made with brewed coffee and ice, offering a refreshing and clean coffee experience.",
        keywords: ["iced coffee", "chilled coffee", "brewed coffee", "ice", "refreshing", "clean"],
      },
      {
        name: "Iced Coffee with Milk",
        description: "Iced coffee mixed with creamy milk, resulting in a refreshing and creamy coffee delight.",
        keywords: ["iced coffee with milk", "iced coffee", "creamy milk", "refreshing", "creamy"],
      },
      {
        name: "Iced Espresso",
        description: "A chilled coffee choice made with espresso and ice, offering a bold and intense coffee experience.",
        keywords: ["iced espresso", "chilled coffee", "espresso", "ice", "bold", "intense"],
      },
      {
        name: "Iced Apple Crisp Oatmilk Shaken Espresso",
        description: "A chilled coffee option with espresso, apple crisp syrup, oatmilk, and toffeenut syrup, providing a fruity and nutty coffee delight.",
        keywords: ["iced apple crisp oatmilk shaken espresso", "chilled coffee", "espresso", "apple crisp syrup", "oatmilk", "toffeenut syrup", "fruity", "nutty"],
      },
      {
        name: "Oleato Iced Shaken Espresso with Oatmilk and Toffeenut",
        description: "Iced coffee with espresso, oatmilk, and toffeenut syrup, offering a nutty and velvety-smooth coffee experience.",
        keywords: ["oleato iced shaken espresso", "iced coffee", "espresso", "oatmilk", "toffeenut syrup", "nutty", "velvety-smooth"],
      },
      {
        name: "Iced Toasted Vanilla Oatmilk Shaken Espresso",
        description: "Iced coffee with espresso, toasted vanilla syrup, and oatmilk, providing a creamy and vanilla-infused coffee experience.",
        keywords: ["iced toasted vanilla oatmilk shaken espresso", "iced coffee", "espresso", "toasted vanilla syrup", "oatmilk", "creamy", "vanilla-infused"],
      },
      {
        name: "Iced Brown Sugar Oatmilk Shaken Espresso",
        description: "A chilled coffee choice with espresso, brown sugar oatmilk, and ice, known for its sweet and creamy coffee flavor.",
        keywords: ["iced brown sugar oatmilk shaken espresso", "chilled coffee", "espresso", "brown sugar oatmilk", "ice", "sweet", "creamy"],
      },
      {
        name: "Iced Chocolate Almondmilk Shaken Espresso",
        description: "Iced coffee with espresso and chocolate almondmilk, offering a rich and chocolatey coffee experience.",
        keywords: ["iced chocolate almondmilk shaken espresso", "iced coffee", "espresso", "chocolate almondmilk", "rich", "chocolatey"],
      },
      {
        name: "Iced Shaken Espresso",
        description: "A chilled espresso coffee option with ice, known for its bold and invigorating coffee experience.",
        keywords: ["iced shaken espresso", "chilled espresso", "ice", "bold", "invigorating"],
      },
      {
        name: "Iced Caffe Americano",
        description: "A chilled coffee made with espresso and water, offering a straightforward and bold coffee experience.",
        keywords: ["iced caffe americano", "chilled coffee", "espresso", "water", "straightforward", "bold"],
      },
      {
        name: "Iced Flat White",
        description: "Iced coffee with espresso and creamy steamed milk, providing a smooth and velvety coffee delight.",
        keywords: ["iced flat white", "iced coffee", "espresso", "creamy steamed milk", "smooth", "velvety"],
      },
      {
        name: "Iced Black Tea Lemonade",
        description: "Iced tea with a splash of lemonade, known for its refreshing and tangy tea flavor.",
        keywords: ["iced black tea lemonade", "iced tea", "lemonade", "refreshing", "tangy"],
      },
      {
        name: "Iced Royal English Breakfast Tea Latte",
        description: "Iced tea latte made with royal English breakfast tea, offering a balanced and invigorating tea experience.",
        keywords: ["iced royal english breakfast tea latte", "iced tea latte", "royal english breakfast tea", "balanced", "invigorating"],
      },
      {
        name: "Emperor's Clouds & Mist",
        description: "A green tea known for its delicate and crisp flavor, perfect for a serene tea experience.",
        keywords: ["emperor's clouds & mist", "green tea", "delicate", "crisp", "serene"],
      },
      {
        name: "Iced London Fog Tea Latte",
        description: "Iced tea latte made with Teavana's London Fog tea blend, offering a soothing and aromatic tea experience.",
        keywords: ["iced london fog tea latte", "iced tea latte", "teavana london fog tea", "soothing", "aromatic"],
      },
      {
        name: "Iced Pumpkin Cream Chai Tea Latte",
        description: "Iced tea latte with a pumpkin cream twist, featuring chai tea spices and a touch of sweetness.",
        keywords: ["iced pumpkin cream chai tea latte", "iced tea latte", "pumpkin cream", "chai tea", "spices", "sweetness"],
      },
      {
        name: "Iced Chai Tea Latte",
        description: "Iced latte infused with aromatic chai tea, offering a balance of spices and creamy goodness.",
        keywords: ["iced chai tea latte", "iced latte", "chai tea", "aromatic", "spices", "creamy"],
      },
      {
        name: "Iced Peach Green Tea",
        description: "Iced green tea with a hint of peach, known for its light and fruity flavor.",
        keywords: ["iced peach green tea", "iced green tea", "peach", "light", "fruity"],
      },
      {
        name: "Iced Peach Green Tea Lemonade",
        description: "A refreshing blend of iced green tea and zesty lemonade with a touch of peach sweetness.",
        keywords: ["iced peach green tea lemonade", "iced green tea", "zesty lemonade", "peach", "refreshing", "sweetness"],
      },
      {
        name: "Iced Matcha Tea Latte",
        description: "Iced latte featuring vibrant matcha tea, offering a balance of earthy and creamy flavors.",
        keywords: ["iced matcha tea latte", "iced latte", "matcha tea", "vibrant", "earthy", "creamy"],
      },
      {
        name: "Iced Green Tea",
        description: "A classic iced green tea known for its clean and grassy flavor, perfect for a refreshing experience.",
        keywords: ["iced green tea", "classic", "clean", "grassy", "refreshing"],
      },
      {
        name: "Iced Green Tea Lemonade",
        description: "Iced green tea blended with zesty lemonade, offering a delightful and tangy tea experience.",
        keywords: ["iced green tea lemonade", "iced green tea", "zesty lemonade", "delightful", "tangy"],
      },
      {
        name: "Iced Matcha Lemonade",
        description: "Iced matcha tea blended with lemonade, creating a harmonious blend of sweet and earthy flavors.",
        keywords: ["iced matcha lemonade", "iced matcha tea", "lemonade", "harmonious", "sweet", "earthy"],
      },
      {
        name: "Iced Passion Tango Tea",
        description: "A vibrant and fruity iced tea that combines passionfruit and hibiscus flavors for an exotic taste.",
        keywords: ["iced passion tango tea", "vibrant", "fruity", "passionfruit", "hibiscus", "exotic"],
      },
      {
        name: "Iced Passion Tango Tea Lemonade",
        description: "Iced passion tango tea with zesty lemonade, offering a tropical and tangy tea blend.",
        keywords: ["iced passion tango tea lemonade", "iced tea", "zesty lemonade", "tropical", "tangy"],
      },
      {
        name: "White Tea",
        description: "A delicate white tea known for its subtle and floral notes, perfect for a calming tea experience.",
        keywords: ["white tea", "delicate", "subtle", "floral", "calming"],
      },
      {
        name: "Mint Majesty Tea",
        description: "A soothing herbal tea featuring refreshing mint and subtle floral notes, perfect for relaxation.",
        keywords: ["mint majesty tea", "herbal tea", "refreshing", "soothing", "subtle floral notes", "relaxation"],
      },
      {
        name: "Peach Tranquility Herbal Tea",
        description: "A herbal tea with delicate peach and chamomile flavors, providing a calming and fruity tea experience.",
        keywords: ["peach tranquility herbal tea", "herbal tea", "peach", "chamomile", "calming", "fruity"],
      },
      {
        name: "Jade Citrus Mint Tea",
        description: "A green tea with invigorating citrus and mint notes, offering a revitalizing and zesty tea experience.",
        keywords: ["jade citrus mint tea", "green tea", "citrus", "mint", "invigorating", "zesty"],
      },
      {
        name: "Earl Grey Tea",
        description: "A classic black tea infused with aromatic bergamot, known for its bold and citrusy flavor.",
        keywords: ["earl grey tea", "black tea", "bergamot", "classic", "bold", "citrusy"],
      },
      {
        name: "Strawberry Acai Refresher",
        description: "A fruity and refreshing drink with the sweetness of strawberries and acai, perfect for a burst of flavor.",
        keywords: ["strawberry acai refresher", "fruity", "refreshing", "strawberries", "acai", "burst of flavor"],
      },
      {
        name: "Frozen Pineapple Passionfruit Lemonade Refresher",
        description: "A frozen and tangy drink with the tropical flavors of pineapple and passionfruit, providing a cool and zesty treat.",
        keywords: ["frozen pineapple passionfruit lemonade refresher", "frozen", "tangy", "tropical", "pineapple", "passionfruit", "cool", "zesty"],
      },
      {
        name: "Frozen Strawberry Acai Refresher",
        description: "A frozen refresher with the delightful sweetness of strawberries and acai, perfect for a chilly and fruity delight.",
        keywords: ["frozen strawberry acai refresher", "frozen", "refreshing", "strawberries", "acai", "chilly", "fruity delight"],
      },
      {
        name: "Frozen Mango Dragonfruit Lemonade Refresher",
        description: "A frozen and tropical delight with the exotic flavors of mango and dragonfruit, providing a refreshing and zesty treat.",
        keywords: ["frozen mango dragonfruit lemonade refresher", "frozen", "tropical", "exotic", "mango", "dragonfruit", "refreshing", "zesty"],
      },
      {
        name: "Paradise Drink Refresher",
        description: "A refreshing drink with tropical flavors, including pineapple and lime, creating a paradise in every sip.",
        keywords: ["paradise drink refresher", "refreshing", "tropical", "pineapple", "lime", "paradise"],
      },
      {
        name: "Pineapple Passionfruit Refresher",
        description: "A fruity and tangy refresher featuring the vibrant flavors of pineapple and passionfruit.",
        keywords: ["pineapple passionfruit refresher", "fruity", "tangy", "vibrant", "pineapple", "passionfruit"],
      },
      {
        name: "Mango Dragonfruit Refresher",
        description: "A delightful refresher with sweet mango and dragonfruit flavors, perfect for a tropical escape.",
        keywords: ["mango dragonfruit refresher", "delightful", "fruity", "mango", "dragonfruit", "tropical escape"],
      },
      {
        name: "Pink Drink Refresher",
        description: "A popular refresher with the flavors of acai, coconut milk, and strawberries, offering a pink and creamy delight.",
        keywords: ["pink drink refresher", "popular", "acai", "coconut milk", "strawberries", "pink", "creamy"],
      },
      {
        name: "Strawberry Acai Lemonade Refresher",
        description: "A zesty and fruity refresher featuring strawberries, acai, and lemonade, creating a tangy and refreshing drink.",
        keywords: ["strawberry acai lemonade refresher", "zesty", "fruity", "strawberries", "acai", "lemonade", "tangy", "refreshing"],
      },
      {
        name: "Dragon Drink Refresher",
        description: "A vibrant and tropical refresher with dragonfruit and coconut milk, offering a fruity and exotic experience.",
        keywords: ["dragon drink refresher", "vibrant", "tropical", "dragonfruit", "coconut milk", "fruity", "exotic"],
      },
      {
        name: "Mango Dragonfruit Refresher",
        description: "A refreshing refresher with sweet mango and dragonfruit flavors, perfect for a tropical escape.",
        keywords: ["mango dragonfruit refresher", "refreshing", "fruity", "mango", "dragonfruit", "tropical escape"],
      },
      {
        name: "Mango Dragonfruit Lemonade Refresher",
        description: "A delightful refresher with sweet mango, dragonfruit, and zesty lemonade, perfect for a tropical and tangy experience.",
        keywords: ["mango dragonfruit lemonade refresher", "delightful", "fruity", "mango", "dragonfruit", "lemonade", "tropical", "tangy"],
      },
      {
        name: "Apple Crisp Oatmilk Frappuccino Blended Beverage",
        description: "A creamy and spiced frappuccino with apple flavors, oatmilk, and a hint of cinnamon, reminiscent of apple pie.",
        keywords: ["apple crisp oatmilk frappuccino", "creamy", "spiced", "apple", "oatmilk", "cinnamon", "apple pie"],
      },
      {
        name: "Pumpkin Spice Frappuccino Blended Beverage",
        description: "A fall-inspired frappuccino with pumpkin spice, whipped cream, and a dash of cinnamon, a seasonal favorite.",
        keywords: ["pumpkin spice frappuccino", "fall-inspired", "pumpkin spice", "whipped cream", "cinnamon", "seasonal favorite"],
      },
      {
        name: "Mocha Cookie Crumble Frappuccino Blended Beverage",
        description: "A chocolatey frappuccino with cookie crumbles, coffee, and whipped cream, perfect for chocolate and coffee lovers.",
        keywords: ["mocha cookie crumble frappuccino", "chocolatey", "cookie crumbles", "coffee", "whipped cream", "chocolate", "coffee"],
      },
      {
        name: "Caramel Ribbon Crunch Frappuccino Blended Beverage",
        description: "A caramel-infused frappuccino with caramel drizzle, coffee, and whipped cream, offering a sweet and creamy treat.",
        keywords: ["caramel ribbon crunch frappuccino", "caramel-infused", "caramel drizzle", "coffee", "whipped cream", "sweet", "creamy"],
      },
      {
        name: "Espresso Frappuccino Blended Beverage",
        description: "A bold and icy frappuccino with espresso shots, ideal for an energizing coffee experience with a frosty twist.",
        keywords: ["espresso frappuccino", "bold", "icy", "espresso shots", "energizing", "frosty", "coffee"],
      },
      {
        name: "Caffe Vanilla Frappuccino Blended Beverage",
        description: "A creamy and vanilla-infused frappuccino, offering a delightful and sweet coffee treat with a hint of vanilla.",
        keywords: ["caffe vanilla frappuccino", "creamy", "vanilla-infused", "sweet", "coffee", "vanilla"],
      },
      {
        name: "Caramel Frappuccino Blended Beverage",
        description: "A caramel-flavored frappuccino with coffee, whipped cream, and caramel drizzle, creating a luscious and coffee-centric drink.",
        keywords: ["caramel frappuccino", "caramel-flavored", "coffee", "whipped cream", "caramel drizzle", "luscious", "coffee"],
      },
      {
        name: "Coffee Frappuccino Blended Beverage",
        description: "A classic coffee frappuccino with coffee, ice, and milk, perfect for a simple and refreshing coffee fix.",
        keywords: ["coffee frappuccino", "classic", "coffee", "ice", "milk", "simple", "refreshing"],
      },
      {
        name: "Mocha Frappuccino Blended Beverage",
        description: "A chocolatey frappuccino with coffee, chocolate, and whipped cream, appealing to chocolate and coffee enthusiasts.",
        keywords: ["mocha frappuccino", "chocolatey", "coffee", "chocolate", "whipped cream", "chocolate", "coffee"],
      },
      {
        name: "Java Chip Frappuccino Blended Beverage",
        description: "A frappuccino with coffee, chocolate chips, and whipped cream, offering a delightful blend of coffee and chocolate flavors.",
        keywords: ["java chip frappuccino", "coffee", "chocolate chips", "whipped cream", "delightful", "coffee", "chocolate"],
      },
      {
        name: "White Chocolate Mocha Frappuccino Blended Beverage",
        description: "A white chocolate mocha frappuccino with coffee, white chocolate, and whipped cream, providing a creamy and sweet coffee delight.",
        keywords: ["white chocolate mocha frappuccino", "white chocolate", "coffee", "whipped cream", "creamy", "sweet", "coffee"],
      },
      {
        name: "Apple Crisp Oatmilk Creme Frappuccino Blended Beverage",
        description: "A creamy and spiced creme frappuccino with apple flavors, oatmilk, and a hint of cinnamon, reminiscent of apple pie.",
        keywords: ["apple crisp oatmilk creme frappuccino", "creamy", "spiced", "apple", "oatmilk", "cinnamon", "apple pie"],
      },
      {
        name: "Pumpkin Spice Creme Frappuccino Blended Beverage",
        description: "A fall-inspired creme frappuccino with pumpkin spice, whipped cream, and a dash of cinnamon, a seasonal favorite.",
        keywords: ["pumpkin spice creme frappuccino", "fall-inspired", "pumpkin spice", "whipped cream", "cinnamon", "seasonal favorite"],
      },
      {
        name: "Chocolate Cookie Crumble Creme Frappuccino",
        description: "A creme frappuccino with cookie crumbles and chocolate, offering a delightful and creamy chocolate treat.",
        keywords: ["chocolate cookie crumble creme frappuccino", "creme", "cookie crumbles", "chocolate", "delightful", "creamy", "chocolate"],
      },
      {
        name: "Caramel Ribbon Crunch Creme Frappuccino Blended Beverage",
        description: "A caramel-infused creme frappuccino with caramel drizzle, creating a sweet and creamy caramel-centric delight.",
        keywords: ["caramel ribbon crunch creme frappuccino", "caramel-infused", "caramel drizzle", "sweet", "creamy", "caramel"],
      },
      {
        name: "Strawberry Creme Frappuccino Blended Beverage",
        description: "A creme frappuccino with sweet strawberries, providing a delightful and fruity strawberry treat.",
        keywords: ["strawberry creme frappuccino", "creme", "strawberries", "delightful", "fruity", "strawberry"],
      },
      {
        name: "Chai Creme Frappuccino Blended Beverage",
        description: "A creamy and spiced creme frappuccino with chai flavors, offering a delightful and aromatic chai tea experience.",
        keywords: ["chai creme frappuccino", "creamy", "spiced", "creme", "chai", "delightful", "aromatic", "chai tea"],
      },
      {
        name: "Double Chocolaty Chip Creme Frappuccino Blended Beverage",
        description: "A creamy creme frappuccino with rich chocolate and chocolate chips, perfect for a double chocolate delight.",
        keywords: ["double chocolaty chip creme frappuccino", "creamy", "creme", "rich chocolate", "chocolate chips", "double chocolate"],
      },
      {
        name: "Matcha Creme Frappuccino Blended Beverage",
        description: "A creamy creme frappuccino with the vibrant flavors of matcha, offering a delightful and green tea experience.",
        keywords: ["matcha creme frappuccino", "creamy", "creme", "vibrant", "matcha", "delightful", "green tea"],
      },
      {
        name: "Vanilla Bean Creme Frappuccino Blended Beverage",
        description: "A creamy creme frappuccino with sweet vanilla flavors, providing a delightful and vanilla-centric treat.",
        keywords: ["vanilla bean creme frappuccino", "creamy", "creme", "sweet vanilla", "delightful", "vanilla"],
      },
      {
        name: "White Chocolate Creme Frappuccino Blended Beverage",
        description: "A creamy creme frappuccino with white chocolate and whipped cream, perfect for a delightful and white chocolate treat.",
        keywords: ["white chocolate creme frappuccino", "creamy", "creme", "white chocolate", "whipped cream", "delightful", "white chocolate"],
      },
  ];

  const size = [
    {
      name: "Grande",
      description: "A medium-sized option for those who prefer a substantial coffee experience without going extra large.",
      keywords: ["grande", "medium-sized", "substantial", "coffee"],
    },
    {
      name: "Venti",
      description: "A large-sized choice for coffee enthusiasts who crave an extra dose of their favorite brew.",
      keywords: ["venti", "large-sized", "extra dose", "coffee"],
    },
    {
      name: "Trenta",
      description: "An extra-large size for those who seek the utmost coffee satisfaction and plenty of caffeine.",
      keywords: ["trenta", "extra-large", "utmost satisfaction", "caffeine"],
    },
  ];

  const resetButton = document.getElementById("new-drink-btn");

function resetDrink() {
  document.getElementById("user-input-text").value = "";
  document.getElementById("chatgpt-response").innerText = "";
}

// Listen for the button click event
document.getElementById('user-input-btn').addEventListener('click', () => {
  // Get the user's input preferences
  const userPreferences = document.getElementById('user-input-text').value;

  // Check if the userPreferences are not empty
  if (userPreferences) {
    // Search for matching drink options
    const matchingDrinks = drinks.filter(drink => drink.keywords.some(keyword => userPreferences.toLowerCase().includes(keyword)));

    // Display a random matching drink recommendation
    if (matchingDrinks.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingDrinks.length);
      const randomDrink = matchingDrinks[randomIndex];

      // Generate a random size recommendation
      const randomSize = size[Math.floor(Math.random() * size.length)];

      // Add a greeting before displaying the drink recommendation
      document.getElementById('chatgpt-response').innerText = `Hello! Your recommended drink based on preferences is: ${randomSize.name} ${randomDrink.name}\nDescription: ${randomDrink.description}`;
    } else {
      document.getElementById('chatgpt-response').innerText = 'No matching drinks found.';
    }
  } else {
    // Handle the case when userPreferences are empty
    document.getElementById('chatgpt-response').innerText = 'Please enter your preferences.';
  }
});

// Add click event listener to the reset button
resetButton.addEventListener("click", resetDrink);

const userTextInput = document.getElementById('user-input-text');

userTextInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});