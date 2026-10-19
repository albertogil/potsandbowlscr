const menus = {
  playa: {
    brunch: [['Traditional Breakfast','Desayuno Típico','₡6,350'],['Breakfast Burrito','Burrito de Desayuno','₡6,800'],['Potato Hash','Potato Hash','₡6,800'],['Shakshuka Eggs','Huevos Shashuka','₡6,550'],['Sweet & Savory Chicken Waffles','Waffles con Pollo Dulce & Salado','₡7,500'],['Coconut Pancakes','Pancakes de Coco','₡7,200'],['French Toast','Tostadas Francesas','₡7,200'],['Short Rib Benedict','Huevos Benedictinos con Short Rib','₡7,750'],['Scrambled Eggs','Huevos Revueltos','₡7,200']],
    bowls: [['Teriyaki Chicken','Pollo Teriyaki','₡8,500'],['Tuna Poke','Poke de Atún','₡8,950'],['Kale Salad','Ensalada de Kale','₡6,550'],['Cauliflower Rice','Arroz de Coliflor','₡6,400'],['Chifricoco','Chifricoco','₡9,500'],['Acai','Acai','₡8,500'],['Tropical Spirulina','Tropical Spirulina','₡5,950']],
    mains: [['Chips & Dips','Chips & Dips','₡5,450'],['Ceviche','Ceviche','₡6,800'],['Prime Steak with Vegetables','Lomito de Entraña Prime con Vegetales','₡11,700'],['Chicken, Fish or Shrimp Tacos','Tacos de Pollo, Pescado o Camarón','₡9,280'],['Casado','Casado','₡4,200'],['Short Rib Tacos','Tacos de Short Rib','₡9,700'],['Prime Choice Cheeseburger','Quesoburguesa Prime Choice','₡12,000'],['Deluxe Cheeseburger','Hamburguesa Deluxe','₡13,600'],['Keto Zucchini Burger','Hamburguesa Keto Zucchini','₡12,600'],['Chicken Burger','Hamburguesa de Pollo','₡10,230'],['Vegetarian Burger','Hamburguesa Vegetariana','₡9,300']],
  },
  catalinas: {
    brunch: [['Traditional Breakfast','Desayuno Típico','₡7,000'],['Breakfast Burrito','Burrito de Desayuno','₡7,500'],['Potato Hash','Potato Hash','₡7,500'],['Shakshuka Eggs','Huevos Shashuka','₡7,200'],['Sweet & Savory Chicken Waffles','Waffles con Pollo Dulce & Salado','₡8,200'],['Coconut Pancakes','Pancakes de Coco','₡7,900'],['French Toast','Tostadas Francesas','₡7,900'],['Short Rib Benedict','Huevos Benedictinos con Short Rib','₡8,500'],['Scrambled Eggs','Huevos Revueltos','₡7,500']],
    bowls: [['Teriyaki Chicken','Pollo Teriyaki','₡9,100'],['Tuna Poke','Poke de Atún','₡9,850'],['Kale Salad','Ensalada de Kale','₡7,200'],['Cauliflower Rice','Arroz de Coliflor','₡7,000'],['Chifricoco','Chifricoco','₡9,500'],['Acai','Acai','₡8,800'],['Tropical Spirulina','Tropical Spirulina','₡6,545']],
    mains: [['Chips & Dips','Chips & Dips','₡6,000'],['Ceviche','Ceviche','₡7,500'],['Prime Steak with Vegetables','Lomito de Entraña Prime con Vegetales','₡12,500'],['Chicken, Fish or Shrimp Tacos','Tacos de Pollo, Pescado o Camarón','₡10,200'],['Casado','Casado','₡4,400'],['Short Rib Tacos','Tacos de Short Rib','₡10,500'],['Prime Choice Cheeseburger','Quesoburguesa Prime Choice','₡13,200'],['Deluxe Cheeseburger','Hamburguesa Deluxe','₡14,950'],['Keto Zucchini Burger','Hamburguesa Keto Zucchini','₡13,850'],['Chicken Burger','Hamburguesa de Pollo','₡11,250'],['Vegetarian Burger','Hamburguesa Vegetariana','₡10,230']],
  }
};
const locationExtras = {
  playa: {
    smallPlates: [['Quesadilla & carrot sticks','Quesadilla y bastones de zanahoria','₡4,850'],['Fish or chicken fingers with fries','Dedos de pescado o pollo y papas fritas','₡6,800'],['Extra breading','Extra empanizar','₡500'],['Mini Casado','Mini Casado','₡5,900'],['Falafel balls','Bolitas de Falafel','₡5,800'],['Rice crispy tostadas','Tostadas Crispy de Arroz','₡4,500']],
    addOns: [['Organic chicken','Pollo Orgánico','₡3,600'],['Mahi-mahi','Dorado','₡5,000'],['Prime skirt steak','Lomito de entraña','₡5,650'],['Braised short rib','Costilla de Res Mechada','₡3,200'],['Mushrooms','Champiñones de cultivo','₡4,200'],['Bacon','Tocineta','₡1,600'],['Gluten-free bread','Pan Gluten Free','₡1,600'],['Extra egg','Extra de huevo','₡450']],
    juices: [['Green Machine','Green Machine','₡5,350'],['Green Candy','Green Candy','₡4,900'],['Carrot Wonder','Carrot Wonder','₡4,900'],['Spicy Watermelon','Spicy Sandía','₡4,900'],['Activated charcoal lemonade','Limonada de Carbón','₡2,200'],['Shot of Sunshine','Shot of Sunshine','₡2,000']],
    coffee: [['Americano','Americano - Café Negro','₡1,500'],['Cortado','Cortado','₡1,600'],['Coffee with milk','Café con Leche','₡1,800'],['Flat White','Flat White','₡2,500'],['Cappuccino','Cappuccino','₡2,500'],['Latte','Latte','₡2,500'],['Cold Brew','Cold Brew','₡2,900'],['Mochaccino','Mochaccino','₡2,500'],['Matcha','Matcha','₡3,000'],['Golden Milk','Golden Milk','₡2,900'],['Chai tea','Té Chai','₡2,800'],['Natural hot chocolate','Chocolate caliente natural','₡2,200'],['House-made milk add-on','Adicional de leche hecha en casa','₡1,300']],
    softDrinks: [['Rainforest Water 750ml','Agua Rainforest 750ml','₡3,800'],['San Pellegrino Water 500ml','Agua San Pellegrino 500ml','₡4,800'],['Orange juice','Jugo de Naranja','₡2,750'],['Coca-Cola','Coca Cola','₡1,800'],['Coca-Cola Zero','Coca Cola Zero','₡1,800']],
    smoothies: [['Cacao Nut','Cacao Nut','₡4,500'],['Mango Passion','Mango Passion','₡4,500'],['Coco Chía','Coco Chía','₡4,500'],['Pink Lady','Pink Lady','₡4,500'],['Verde','Verde','₡4,500'],['Strawberry Matcha','Matcha Fresa','₡4,500'],['Sunrise','Sunrise','₡4,500'],['Protein smoothie | Purple','Agregar Proteína | Pura Prote','₡1,800'],['Raspberry lemonade','Limonada de Frambuesa','₡2,550'],['Mint lemonade','Limonada de Hierba buena','₡2,280'],['Build your own two-fruit smoothie','Arma tu propio smoothie en agua con 2 frutas','₡2,550']],
    cocktails: [['Mimosa','Mimosa','₡4,400'],['Carajillo','Carajillo','₡6,300'],['Spicy passion-fruit margarita','Margarita Picante de Maracuyá','₡6,000'],['Strawberry mojito','Mojito de Fresa','₡4,400'],['Mora Gin & Tonic','Mora Gin & Tonic','₡4,400'],['Aperol Spritz','Aperol Spritz','₡7,150'],['Red sangria','Sangría Roja','₡7,150'],['Heineken','Heineken','₡3,600'],['Corona','Corona','₡3,200'],['Craft beer','Cerveza Artesanal','₡5,300'],['Guana Red IPA','Guana - Red IPA',''],['Playa Grande Summer Ale','Playa Grande - Summer Ale',''],['Zarpezuelo Lager','Zarpezuelo - Lager','']],
    wines: [['Las Camelias — Sauvignon Blanc','Las Camelias — Sauvignon Blanc','₡3,950 / ₡18,600'],['La Belle Angele — Chardonnay','La Belle Angele — Chardonnay','₡4,500 / ₡20,000'],['Las Camelias — Tempranillo','Las Camelias — Tempranillo','₡3,950 / ₡18,600'],['Ídolo — Cabernet Sauvignon','Ídolo — Cabernet Sauvignon','₡22,800'],['La Belle Angele — Pinot Noir','La Belle Angele — Pinot Noir','₡4,500 / ₡20,000'],['Las Camelias — Merlot','Las Camelias — Merlot','₡3,950 / ₡18,600']]
  },
  catalinas: {}
};
locationExtras.catalinas = JSON.parse(JSON.stringify(locationExtras.playa));
locationExtras.catalinas.smallPlates = [['Quesadilla & carrot sticks','Quesadilla y bastones de zanahoria','₡5,300'],['Fish or chicken fingers with fries','Dedos de pescado o pollo y papas fritas','₡7,500'],['Extra breading','Extra empanizar','₡500'],['Mini Casado','Mini Casado','₡6,500'],['Falafel balls','Bolitas de Falafel','₡6,350'],['Rice crispy tostadas','Tostadas Crispy de Arroz','₡4,950']];
locationExtras.catalinas.addOns = [['Organic chicken','Pollo Orgánico','₡3,950'],['Mahi-mahi','Dorado','₡5,500'],['Prime skirt steak','Lomito de entraña','₡6,200'],['Braised short rib','Costilla de Res Mechada','₡3,500'],['Mushrooms','Champiñones de cultivo','₡4,670'],['Bacon','Tocineta','₡1,760'],['Gluten-free bread','Pan Gluten Free','₡2,200'],['Extra egg','Extra de huevo','₡500']];
locationExtras.catalinas.juices = [['Green Machine','Green Machine','₡5,350'],['Green Candy','Green Candy','₡5,350'],['Carrot Wonder','Carrot Wonder','₡5,350'],['Spicy Watermelon','Spicy Sandía','₡5,350'],['Activated charcoal lemonade','Limonada de Carbón','₡3,000'],['Shot of Sunshine','Shot of Sunshine','₡2,200']];
locationExtras.catalinas.smoothies = [['Cacao Nut','Cacao Nut','₡4,950'],['Mango Passion','Mango Passion','₡4,950'],['Coco Chía','Coco Chía','₡4,950'],['Pink Lady','Pink Lady','₡4,950'],['Verde','Verde','₡4,950'],['Strawberry Matcha','Matcha Fresa','₡4,950'],['Sunrise','Sunrise','₡4,950'],['Protein smoothie | Purple','Agregar Proteína | Pura Prote','₡1,980'],['Raspberry lemonade','Limonada de Frambuesa','₡2,800'],['Mint lemonade','Limonada de Hierba buena','₡2,500'],['Build your own two-fruit smoothie','Arma tu propio smoothie en agua con 2 frutas','₡2,800']];
locationExtras.catalinas.cocktails = [['Mimosa','Mimosa','₡4,900'],['Carajillo','Carajillo','₡6,950'],['Spicy passion-fruit margarita','Margarita Picante de Maracuyá','₡6,600'],['Strawberry mojito','Mojito de Fresa','₡4,900'],['Mora Gin & Tonic','Mora Gin & Tonic','₡4,900'],['Aperol Spritz','Aperol Spritz','₡7,850'],['Red sangria','Sangría Roja','₡7,850'],['Heineken','Heineken','₡3,600'],['Corona','Corona','₡3,200'],['Craft beer','Cerveza Artesanal','₡5,300'],['Guana Red IPA','Guana - Red IPA',''],['Playa Grande Summer Ale','Playa Grande - Summer Ale',''],['Zarpezuelo Lager','Zarpezuelo - Lager','']];
// Descriptions follow the printed January 2026 menus. The Spanish text is kept
// verbatim; the English copy is a translation of the same ingredients.
const descriptions = {
  'Desayuno Típico':['Pinto, aguacate, pico de gallo, huevos, tortilla palmeada, queso, natilla y plátanos maduros en miel','Pinto, avocado, pico de gallo, eggs, hand-pressed tortilla, cheese, sour cream and ripe plantains in honey'],
  'Burrito de Desayuno':['Huevos revueltos, queso cheddar, aguacate, pico de gallo, natilla chipotle, papas fritas. Side de gallo pinto','Scrambled eggs, cheddar, avocado, pico de gallo, chipotle sour cream, fries. Side of gallo pinto'],
  'Potato Hash':['Papas en cuadritos, tocineta, huevos pochados, cebolla, chile dulce, salsa holandesa','Diced potatoes, bacon, poached eggs, onion, sweet pepper and hollandaise'],
  'Huevos Shashuka':['Salsa de tomate casera, huevos, pan con aceite de oliva','Homemade tomato sauce, eggs, bread with olive oil'],
  'Waffles con Pollo Dulce & Salado':['Cuarto y muslo de pollo deshuesado marinado por 8 horas, empanizado, frito y rebosado con miel de abeja, mantequilla clarificada y un poco de picante. Bañado con una salsa de caramelo hecha en casa, granola con piña y fresas al lado','Boneless chicken marinated for 8 hours, breaded and fried with honey, clarified butter and a little spice. House-made caramel sauce, pineapple granola and strawberries'],
  'Pancakes de Coco':['Harina de coco, aceite de coco, salsa de fresas y banano','Coconut flour, coconut oil, strawberry sauce and banana'],
  'Tostadas Francesas':['Pan Brioche, leche dormida con almendras caramelizadas, compota de fresa y banano, y frutas frescas: papaya, piña, mango, banano, fresa y chantillí','Brioche, almond milk with caramelized almonds, strawberry and banana compote, fresh papaya, pineapple, mango, banana, strawberry and chantilly'],
  'Huevos Benedictinos con Short Rib':['Costilla de res cocinada al fuego lento por 12 horas, mechada, servido sobre pan masa madre, aguacate, arúgula, huevos pochados, salsa holandesa, tomate cherry y side de papa rallada','Slow-cooked shredded short rib on sourdough, avocado, arugula, poached eggs, hollandaise, cherry tomato and potato'],
  'Huevos Revueltos':['Dos huevos, hongos, tomate cherry, mozzarella en bolita, pesto hecho en casa. Escoger: tortilla, pan integral o bagel','Two eggs, mushrooms, cherry tomato, mozzarella balls and house-made pesto. Choose tortilla, whole-wheat bread or bagel'],
  'Pollo Teriyaki':['Arroz de sushi, cebollino, mostaza china, maní, cebolla, ajonjolí, chile dulce, brócoli, salsa teriyaki casera','Sushi rice, scallion, Chinese mustard, peanuts, onion, sesame, sweet pepper, broccoli and house-made teriyaki'],
  'Poke de Atún':['Atún crudo marinado, arroz de sushi, edamame, wakame, mango, aguacate, semillas de ajonjolí','Marinated raw tuna, sushi rice, edamame, wakame, mango, avocado and sesame'],
  'Ensalada de Kale':['Quinoa, mango, semilla de marañón, aguacate, tomate cherry, aderezo mostaza miel','Quinoa, mango, cashews, avocado, cherry tomato and honey-mustard dressing'],
  'Arroz de Coliflor':['Hummus, kale, zanahoria, hongos, aderezo de tahini','Hummus, kale, carrot, mushrooms and tahini dressing'],
  'Chifricoco':['Arroz, frijoles con leche de coco y picante, pico de gallo, aguacate, cuadritos de pollo empanizados','Rice, beans with coconut milk and spice, pico de gallo, avocado and breaded chicken'],
  'Açai':['Banano, jugo de naranja. Top: mora, granola, chía, banano','Banana and orange juice. Toppings: blackberry, granola, chia and banana'],
  'Tropical Spirulina':['Mango, piña, leche de coco. Top: granola, maracuyá, fresas, coco','Mango, pineapple and coconut milk. Toppings: granola, passion fruit, strawberries and coconut'],
  'Mini Casado':['Arroz, frijoles, plátano, aguacate. A elegir: pollo o pescado a la plancha','Rice, beans, plantain and avocado. Choose grilled chicken or fish'],
  'Chips & Dips':['Chips de camote y malanga, guacamole, pico de gallo, tzatziki','Sweet potato and malanga chips, guacamole, pico de gallo and tzatziki'],
  'Ceviche':['Pesca del día, maracuyá, aguacate, jengibre, chile panameño, chips de plátano verde','Catch of the day, passion fruit, avocado, ginger, Panamanian pepper and green plantain chips'],
  'Bolitas de Falafel':['Con salsa de yogurt griego y hierba buena','With Greek yogurt and mint sauce'],
  'Tostadas Crispy de Arroz con Atún':['Arroz de sushi frito, atún crudo marinado con soya, aceite de sésamo y siracha','Fried sushi rice, raw tuna marinated with soy, sesame oil and sriracha'],
  'Lomito de Entraña Prime con Vegetales':['Brócoli, hongos, tomate cherry, plátano maduro, chimichurri','Broccoli, mushrooms, cherry tomato, ripe plantain and chimichurri'],
  'Tacos de Pollo, Pescado o Camarón':['Ensalada de repollo con mango, pico de gallo, aguacate y aderezo mostaza miel, tortillas palmeadas hechas en casa. *proteínas vienen sin empanizar','Cabbage salad with mango, pico de gallo, avocado and honey-mustard dressing on house-made tortillas. *Proteins are not breaded'],
  'Casado':['Arroz, frijoles, picadillo de chayote, ensalada de repollo, pico de gallo, aguacate, plátano maduro','Rice, beans, chayote picadillo, cabbage salad, pico de gallo, avocado and ripe plantain'],
  'Tacos de Short Rib':['Costilla de res cocinada al fuego lento por 12 horas mechada, servida sobre tortilla de maíz morado, chutney de mango, chips de malanga y camote','Slow-cooked shredded short rib on purple corn tortillas, mango chutney, malanga and sweet potato chips'],
  'Quesoburguesa Prime Choice':['Tomate deshidratado, arúgula, cebollas caramelizadas, aioli, queso cheddar','Dehydrated tomato, arugula, caramelized onions, aioli and cheddar'],
  'Hamburguesa Deluxe':['Aguacate, queso cheddar, tocineta, huevo frito, torta Prime Choice Angus, arúgula','Avocado, cheddar, bacon, fried egg, Prime Choice Angus patty and arugula'],
  'Hamburguesa Keto Zucchini':['Aguacate, queso cheddar, tocineta, huevo frito, torta Prime Choice Angus, arúgula. | Zucchinni remplaza el pan','Avocado, cheddar, bacon, fried egg, Prime Choice Angus patty and arugula. Zucchini replaces the bun'],
  'Hamburguesa de Pollo':['Cuarto y muslo de pollo deshuesado empanizado, coleslaw, pepinos en vinagre','Breaded boneless chicken, coleslaw and pickles'],
  'Hamburguesa Vegetariana':['Torta vegana de vegetales, arúgula, cebolla caramelizada, salsa de aguacate','Vegan vegetable patty, arugula, caramelized onion and avocado sauce'],
  'Green Machine':['Kale, pepino, manzana verde, jengibre, apio, limón','Kale, cucumber, green apple, ginger, celery and lime'],
  'Green Candy':['Piña, manzana verde, pepino, hierba buena','Pineapple, green apple, cucumber and mint'],
  'Carrot Wonder':['Zanahoria, manzana verde, manzana roja, jengibre, limón','Carrot, green and red apple, ginger and lime'],
  'Spicy Sandía':['Sandía, manzana verde, remolacha, jalapeño, hierba buena limón','Watermelon, green apple, beet, jalapeño, mint and lime'],
  'Limonada de Carbón':['Carbón activado, limón, azúcar','Activated charcoal, lime and sugar'],
  'Shot of Sunshine':['Naranja, limón, cúrcuma, jengibre','Orange, lime, turmeric and ginger'],
  'Jugo de Naranja':['Exprimido en casa','Squeezed in-house'],
  'Cacao Nut':['Banano, mantequilla de maní, cacao, leche de almendra top de cacao nibs','Banana, peanut butter, cacao, almond milk and cacao nibs topping'],
  'Mango Passion':['Mango, maracuyá, cúrcuma, leche de coco, miel','Mango, passion fruit, turmeric, coconut milk and honey'],
  'Coco Chía':['Chía, mango, vainilla, leche de coco, miel','Chia, mango, vanilla, coconut milk and honey'],
  'Pink Lady':['Pitaya, mango, leche de coco, miel','Pitaya, mango, coconut milk and honey'],
  'Verde':['Piña, aguacate, kale, pepino, jengibre, limón, miel','Pineapple, avocado, kale, cucumber, ginger, lime and honey'],
  'Matcha Fresa':['Matcha frío con leche de coco y miel. Encima smoothie de fresa con leche regular','Cold matcha with coconut milk and honey, topped with strawberry smoothie made with regular milk'],
  'Sunrise':['Banano, mango, jengibre, cúrcuma, canela, leche de almendra, miel','Banana, mango, ginger, turmeric, cinnamon, almond milk and honey'],
  'Arma tu propio smoothie en agua con 2 frutas':['Sandía, mango, fresa, banano, papaya o piña','Watermelon, mango, strawberry, banana, papaya or pineapple'],
  'Carajillo':['Licor 43, shot de espresso, jarabe de azúcar','Licor 43, espresso and sugar syrup'],
  'Margarita Picante de Maracuyá':['Tequila infusionado con jalapeño, maracuyá, sal picante de jalapeño','Jalapeño-infused tequila, passion fruit and spicy jalapeño salt'],
  'Mojito de Fresa':['Ron, fresas, hierba buena','Rum, strawberries and mint'],
  'Aperol Spritz':['Aperol, espumante, soda','Aperol, sparkling wine and soda']
};

const wineDetails = [
  ['Las Camelias','Sauvignon Blanc, Galicia España','Sauvignon Blanc, Galicia, Spain'],
  ['La Belle Angele','Chardonnay, Vin de Pays, Francia','Chardonnay, Vin de Pays, France'],
  ['Las Camelias','Tempranillo, Castilla y León, España','Tempranillo, Castilla y León, Spain'],
  ['Idolo','Cabernet Sauvignon, Castilla de la Mancha, España','Cabernet Sauvignon, Castilla de la Mancha, Spain'],
  ['La Belle Angele','Pinot Noir, Vin de Pays, Francia','Pinot Noir, Vin de Pays, France'],
  ['Las Camelias','Merlot, Castilla y León, España','Merlot, Castilla y León, Spain']
];

const root = document.querySelector('[data-location-menu]');
if (root) {
  const location = root.dataset.locationMenu;
  const es = document.documentElement.lang.startsWith('es');
  const food = menus[location];
  const drinks = locationExtras[location];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const section = (en, sp, items, options={}) => `<section class="menu-section"><h3>${es ? sp : en}</h3>${options.wine ? `<p class="menu-price-legend">${es ? 'Copa / Botella' : 'Glass / Bottle'}</p>` : ''}<div class="menu-items">${items.map(([english,spanish,price]) => {
    const description = descriptions[spanish];
    return `<article class="menu-item"><h4>${escapeHtml(es ? spanish : english)}${price ? `<span>${escapeHtml(price)}</span>` : ''}</h4>${description ? `<p>${escapeHtml(description[es ? 0 : 1])}</p>` : ''}</article>`;
  }).join('')}</div></section>`;
  const foodIntro = es ? 'Alimentamos cuerpo y alma por medio de comida saludable y deliciosa que puede ser adaptada para diferentes restricciones y alergias. Utilizamos ingredientes hechos desde cero para maximizar la calidad, valor nutricional, frescura y buen sabor.' : 'We nourish body and soul with healthy, delicious food that can be adapted for different dietary restrictions and allergies. We use ingredients made from scratch for quality, nutrition, freshness and flavor.';
  const drinkIntro = es ? 'Bebidas hechas con amor, con ingredientes frescos. Los jugos coldpressed son frutas y vegetales triturados con una máquina especial y después exprimidos, haciendo un jugo 100% de la fruta sin agua, ni azúcar adicional agregada.' : 'Drinks made with love and fresh ingredients. Cold-pressed juices are crushed and squeezed using a special machine, making 100% fruit juice with no added water or sugar.';
  const kids = drinks.smallPlates.slice(0,4);
  const sharing = [food.mains[0],food.mains[1],...drinks.smallPlates.slice(4)];
  sharing[3] = [sharing[3][0],'Tostadas Crispy de Arroz con Atún',sharing[3][2]];
  const mains = food.mains.slice(2,6);
  const burgers = food.mains.slice(6);
  drinks.addOns[4] = ['Farmed shrimp','Camarones de cultivo',location === 'playa' ? '₡4,200' : '₡4,620'];
  drinks.coffee[4][2] = '₡2,300';
  drinks.cocktails[12] = ['Zarpeazul - Lager','Zarpeazul - Lager',''];
  drinks.smoothies[7][0] = 'Add Protein | Pura Prote';
  food.bowls[5][0] = 'Açai';
  food.bowls[5][1] = 'Açai';
  drinks.wines.forEach((wine,index) => { wine[0] = wineDetails[index][0]; wine[1] = wineDetails[index][0]; });
  const symbols = [['Spicy','Picante',''],['Gluten friendly','Gluten friendly',''],['Vegetarian / can be made vegan','Vegetariano / opción de hacer Vegano','']];
  const wineSection = `<section class="menu-section"><h3>${es ? 'VINO' : 'WINE'}</h3><p class="menu-price-legend">${es ? 'Copa / Botella' : 'Glass / Bottle'}</p><div class="menu-items">${drinks.wines.map((wine,index) => `<article class="menu-item"><h4>${escapeHtml(wine[es ? 1 : 0])}<span>${escapeHtml(wine[2])}</span></h4><p>${escapeHtml(wineDetails[index][es ? 1 : 2])}</p></article>`).join('')}</div></section>`;
  root.innerHTML = `<div class="menu-sheet"><h2>${es ? 'Brunch todo el día, todos los días' : 'Brunch all day, every day'}</h2><p class="menu-subtitle">${foodIntro}</p><div class="menu-sections">${section('Brunch','BRUNCH',food.brunch)}${section('Sweet & savory bowls','BOWLS DULCES Y SALADOS',food.bowls)}${section('Little visitors','VISITAS PEQUEÑAS',kids)}${section('To share','PA’ PICAR',sharing)}${section('Mains','FUERTES',mains)}${section('Burgers','HAMBURGUESAS',burgers)}${section('Add-ons','ADICIONALES',drinks.addOns)}${section('Symbols','SIMBOLOGÍA',symbols)}</div><p class="menu-note">${es ? 'Precios incluyen 10% de servicio y 13% de IVA.' : 'Prices include 10% service and 13% VAT.'}</p></div><div class="menu-sheet"><h2>${es ? 'BEBIDAS' : 'DRINKS'}</h2><p class="menu-subtitle">${drinkIntro}</p><div class="menu-sections">${section('Cold-pressed juices','JUGOS COLDPRESSED',drinks.juices)}${section('Coffee & tea','CAFÉ Y TÉ',drinks.coffee)}${section('Water & soft drinks','AGUA Y GASEOSAS',drinks.softDrinks)}${section('Smoothies & natural drinks','SMOOTHIES Y BEBIDAS NATURALES',drinks.smoothies)}${section('Mixology','MIXOLOGÍA',drinks.cocktails)}${wineSection}</div><p class="menu-note">${es ? '**Alergias o restricciones por favor notificar a su salonero. Menú contiene trazas.' : '**Please tell your server about allergies or dietary restrictions. Menu may contain traces.'}</p></div>`;
}
