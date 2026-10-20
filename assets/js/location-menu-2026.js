// Sources: the bilingual 2026 location menu PDFs and the Pots & Bowls × Pascual pizza menu images.
// Each row carries the printed English/Spanish text and the two location prices.
const row = (en, es, enDescription, esDescription, playa, catalinas, flags = "", catalinasSpanishPrice = null, catalinasText = {}) =>
  ({ en, es, enDescription, esDescription, playa, catalinas, flags, catalinasSpanishPrice, catalinasText });

const foodSections = [
  { en: "Brunch all day", es: "Brunch todo el día", items: [
    row("Costarican Breakfast", "Desayuno Típico", "Gallo Pinto, avocado, pico de gallo, eggs, cheese, sour cream, sweet plantains with honey, homemade tortilla.", "Pinto, aguacate, pico de gallo, huevos, tortilla palmeada casera, queso, natilla y plátanos maduros en miel.", 6350, 7000, "gv"),
    row("Breakfast Burrito", "Burrito de Desayuno", "Scramble eggs, cheddar cheese, avocado, pico de gallo, homemade chipotle sour cream, french fries, side of gallo pinto.", "Huevos revueltos, queso cheddar, aguacate, pico de gallo, natilla chipotle casera y papas fritas. Side de gallo pinto.", 7500, 8300, "vs★"),
    row("Potato Hash", "Potato Hash", "Potato bites, bacon, poached eggs, onions, bell pepper, homemade hollandaise sauce.", "Papas en cuadritos, tocineta, huevos pochados, cebolla, chile dulce, salsa holandesa casera.", 7500, 8300, "g"),
    row("Shakshouka Eggs", "Huevos Shashuka", "Homemade tomato sauce, eggs, artisanal bread with olive oil.", "Salsa de tomate casera, huevos, pan con aceite de oliva.", 7200, 8000, "v"),
    row("Sweet & Sour Chicken Waffles", "Waffles con Pollo Dulce & Salado", "Deboned chicken thighs marinated for 8 hours, breaded, fried and coated with ghee, egg and a bit of spicy. Coated in homemade caramel sauce, on the side granola with pineapple and strawberries.", "Cuarto y muslo de pollo marinado 8 horas, empanizado, frito y rebosado con miel de abeja, mantequilla y picante. Bañado con salsa de caramelo casera, granola con piña y fresas.", 8300, 9000, "s"),
    row("Coconut Pancakes", "Pancakes de Coco", "Coconut flour, coconut oil, homemade strawberry and banana sauce.", "Harina de coco, aceite de coco, salsa de fresas y banano casera.", 8000, 8700, "gv"),
    row("French Toasts", "Tostadas Francesas", "Brioche bread, crème anglais with caramelized almonds, homemade strawberry compote, and fresh fruits: papaya, pineapple, mango, banana, strawberries and chantillí.", "Pan Brioche remojado en leche con almendras caramelizadas, compota casera de fresa y banano, y frutas frescas y chantillí.", 8000, 8700, "v"),
    row("Eggs Benedict with Short Rib", "Huevos Benedictinos con Short Rib", "Slow cooked short rib for 12 hours, serve with sour dough bread, avocado, arugula, poached eggs, homemade hollandaise sauce, cherry tomatoes and potato hash.", "Costilla de res mechada, cocida al fuego lento 12 horas, sobre pan masa madre con aguacate, arúgula, tomate cherry, huevos pochados y salsa holandesa. Side de papa rallada.", 8500, 9400, "", null, { esDescription: "Costilla de res mechada, cocida al fuego lento 12 horas, sobre pan masa madre con aguacate, arúgula, tomate cherry, huevos pochados y salsa holandesa casera. Side de papa rallada." }),
    row("Garden Scramble", "Garden Scramble", "Eggs, mushrooms, cherry tomato, mozzarella bites, homemade pesto. [Pick: Tortilla, Bread or Bagel]", "Dos huevos revueltos con hongos, tomate cherry, mozzarella, pesto casero. [Escoger: Tortilla Palmeada, Pan Integral o Bagel]", 8000, 8250, "v", 8300),
    row("Chilaquiles", "Chilaquiles", "Homemade chips, mozzarella cheese, homemade tomate sauce, avocado, organic chicken.", "Chips caseros, queso mozarella, salsa de tomate artesanal, aguacate y pollo orgánico.", 7600, 8200, "gs"),
    row("Honey Butter Pancakes", "Honey Butter Pancakes", "Fluffy homemade buttermilk pancakes with salted honey butter sauce.", "Caseros pancakes esponjosos de buttermilk con salsa de miel salada y mantequilla.", 8700, 9400, "v"),
    row("Açai", "Açai", "Banana, orange juice, topping: blackberries, homemade granola, chia, banana.", "Banano, jugo de naranja exprimido. Top: mora, granola casera, chía, banano.", 9400, 9700, "gv★", null, { esDescription: "Banano, jugo de naranja. Top: mora, granola casera, chía, banano." }),
    row("Tropical Spirulina", "Tropical Spirulina", "Mango, pineapple, homemade coconut milk. Top: granola, passion fruit, strawberries, shredded coconut.", "Mango, piña, leche de coco casera. Top: granola casera, maracuyá, fresas, coco.", 6600, 7100, "gv"),
    row("Chia Puddin", "Chia Puddin", "Greek yogurt, homemade almond milk, vanilla, banana and strawberry. Top: homemade granola, homemade peanut butter and strawberries.", "Yogurt griego, leche de almendra casera, vainilla, banano y fresas. Top: granola casera, mantequilla de maní casera y fresas.", 5700, 5800, "v", null, { enDescription: "Greek yogurt, homemade almond milk, vanilla, banana and strawberry. Top: Homemade granola, homemade peanut butter and strawberries.", esDescription: "Yogurt griego, leche de almendra casera, vanilla, banano y fresa. Top: Granola casera, mantequilla de maní y fresas" })
  ] },
  { en: "Pa’ picar", es: "Pa’ picar", items: [
    row("Artisanal Chips Trio", "Trío de Dips Artesanales", "Homemade sweet potato and malanga chips, guacamole, pico de gallo, tzatziki.", "Chips caseros de camote y malanga, guacamole, pico de gallo, tzatziki.", 6000, 6600, "gv"),
    row("House Ceviche", "Ceviche de la Casa", "Catch of the day, passion fruit, avocado, ginger, panamenian pepper, green plantain chips.", "Pesca del día, maracuyá, aguacate, jengibre, chile panameño, chips de plátano verde.", 7500, 8300, "gs"),
    row("Falafel Bites", "Bolitas de Falafel", "Greek yogurt sauce and mint.", "Con salsa de yogurt griego y hierba buena.", 6400, 7000, "v"),
    row("Tuna Crispy Rice Cakes", "Tostadas Crispy de Arroz con Atún", "Fried sushi rice cake, raw tuna marinated with soy sauce, sesame sauce and siracha.", "Arroz de sushi frito, atún crudo marinado con soya, aceite de sésamo y siracha.", 5000, 5500, "s★")
  ] },
  { en: "Specialties", es: "Especialidades", items: [
    row("Teriyaki Chicken", "Bowl Pollo Teriyaki Artesanal", "Sushi rice, chives, chinese mustard, peanuts, onions, sesame seeds, bell pepper, broccoli, homemade teriyaki sauce.", "Arroz de sushi, cebollino, mostaza china, maní, cebolla, ajonjolí, chile dulce, brócoli, salsa teriyaki casera.", 9400, 10000, "★"),
    row("Tuna Poke", "Poke de Atún", "Raw tuna, sushi rice, edamame, wakame, mango, avocado, sesame seeds.", "Atún crudo marinado, arroz de sushi, edamame, wakame, mango, aguacate, semillas de ajonjolí.", 9900, 10800, "s★"),
    row("Kale Salad", "Ensalada de Kale", "Quinoa, mango, cashew nuts, avocado cherry tomato, honey mustard dressing.", "Quinoa, mango, semilla de marañón, aguacate, tomate cherry, aderezo mostaza miel.", 7200, 7900, "gv"),
    row("Prime Choice Cheese Burger", "Quesoburguesa Prime Choice", "Dehydrated tomato, arugula, balsamic caramelized onions, homemade aioli, cheddar cheese.", "Tomate deshidratado, arúgula, cebollas caramelizadas, alioli casero, queso cheddar.", 14400, 15800, "★"),
    row("Deluxe Hamburger", "Hamburguesa Deluxe", "Avocado, cheddar cheese, bacon, fried egg, Angus Prime Choice beef, arugula.", "Aguacate, queso cheddar, tocineta, huevo frito, torta Angus Prime Choice, arúgula.", 16300, 17900),
    row("Keto Zucchinni Hamburger", "Hamburguesa Keto Zucchinni", "Avocado, cheddar cheese, bacon, fried egg, Angus Prime Choice beef, arugula | Zucchini replace bread.", "Aguacate, queso cheddar, tocineta, huevo frito, torta Angus Prime Choice, arúgula. | Zucchinni remplaza el pan.", 15200, 16700, "g"),
    row("Chicken Hamburger", "Hamburguesa de Pollo Crispy", "Deboned chicken thighs breaded, fried and coated with ghee, egg and a bit of spicy, homemade coleslaw, pickles.", "Cuarto y muslo de pollo deshuesado empanizado, coleslaw, pepinos en vinagre.", 11300, 12400, "", null, { enDescription: "Breaded chicken breast, fried and coated with ghee, egg and a bit of spicy, homemade coleslaw, pickles.", esDescription: "Pechuga de pollo empanizada, coleslaw casero, pepinos en vinagre." }),
    row("Vegetarian Burger", "Hamburguesa Vegetariana", "Veggie vegan patty cake, avocado sauce, arugula, caramelized onions.", "Torta vegana casera de vegetales, arúgula, cebolla caramelizada, salsa de aguacate.", 10300, 11300),
    row("Cauliflower Rice", "Arroz de Coliflor", "Homemade hummus, kale, carrots, mushrooms, tahini dressing.", "Hummus casero, kale, zanahoria, hongos, aderezo de tahini.", 7000, 7700, "gv"),
    row("Chifricoco", "Chifricoco", "Rice, beans with homemade coconut milk, spicy sauce, pico de gallo, avocado, breaded chicken bites.", "Arroz, frijoles con leche de coco casera picante, pico de gallo, aguacate, cuadritos de pollo empanizados.", 10500, 10500, "s★"),
    row("Chicken, Fish or Cultivated Shrimp Tacos", "Tacos de Pollo, Pescado o Camarón", "Cabbage salad with mango, pico de gallo, avocado, honey mustard dressing, homemade tortilla.", "Ensalada de repollo con mango, pico de gallo, aguacate y aderezo mostaza miel, tortillas palmeadas caseras. *Proteínas vienen sin empanizar", 10200, 11300, "g"),
    row("Short Rib Tacos", "Tacos de Short Rib", "Slow cooked short rib for 12hrs, served with homemade purple corn tortilla, mango chutney, malanga and sweet potato chips.", "Costilla de res cocinada al fuego lento por 12 horas mechada, servida sobre tortilla de maíz morado casera, chutney de mango, chips caseros de malanga y camote.", 10700, 11600, "g"),
    row("Crispy Aioli Tuna Tostada", "Tostadas de Atún con Alioli", "Raw tuna served with avocado, passion fruit, homemade aioli, crispy onions.", "Atún crudo con aguacate, maracuyá, aioli casero y cebolla crispy.", 8900, 8900, "gs"),
    row("Choice Hanger Tender Steak & Veggies", "Lomito de Entraña Prime con Vegetales", "Broccoli, mushrooms, cherry tomato, sweet plantains, chimichurri.", "Brócoli, hongos, tomate cherry, plátano maduro, chimichurri.", 14000, 15000, "g"),
    row("Casado", "Casado", "Rice, beans, squash picadillo, cabbage salad, pico de gallo, avocado, sweet platains", "Arroz, frijoles, picadillo de chayote, ensalada de repollo, pico de gallo, aguacate, plátano maduro.", 4200, 4400, "gv")
  ] },
  { en: "Small visitors", es: "Visitas pequeñas", items: [
    row("Quesadilla & Carrot Sticks", "Quesadilla y Bastones de Zanahoria", "", "", 5400, 5800, "v"),
    row("Grill Fish or Chicken Fingers with Fries", "Dedos de Pescado o Pollo y Papas Fritas", "", "", 7500, 8200),
    row("*Extra for breaded", "*Extra Empanizar", "", "", 600, 600),
    row("Mini Casado", "Mini Casado", "Rice, beans, avocado and sweet plantains. To choose: grill chicken or fish", "Arroz, frijoles, plátano, aguacate. A elegir: pollo o pescado a la plancha", 6500, 7200)
  ] },
  { en: "Extra sides", es: "Adicionales", defaultFlags: "g", items: [
    row("Organic Chicken", "Pollo Orgánico", "", "", 3600, 4000),
    row("Mahi Mahi", "Dorado", "", "", 5000, 5500),
    row("Hanger Steak", "Lomito de Entraña", "", "", 5700, 6200),
    row("Short Rib", "Costilla de Res Mechada", "", "", 3200, 3500),
    row("Cultivated Shrimp", "Camarones de Cultivo", "", "", 4200, 4600),
    row("Bacon", "Tocineta", "", "", 1600, 1800),
    row("Gluten Free Bread", "Pan Gluten Free", "", "", 1600, 2200),
    row("Extra Egg", "Extra de Huevo", "", "", 500, 500)
  ] },
  { en: "Pizzas", es: "Pizzas", items: [
    row("Margarita", "Margarita", "Tomato sauce, mozzarella, basil and extra-virgin olive oil.", "Salsa de tomate, mozzarella, albahaca y aceite de oliva extra virgen.", 8800, 8800),
    row("Pepperoni", "Pepperoni", "Tomato sauce, mozzarella and crispy pepperoni.", "Salsa de tomate, mozzarella y pepperoni crispy.", 9900, 9900),
    row("Funghi", "Funghi", "Tomato sauce, mozzarella and fresh mushrooms.", "Salsa de tomate, mozzarella y hongos frescos.", 9460, 9460),
    row("Funghi & Ham", "Funghi & Jamón", "Tomato sauce, mozzarella, fresh mushrooms and ham.", "Salsa de tomate, mozzarella, hongos frescos y jamón.", 10080, 10080),
    row("Burrata", "Burrata", "Tomato sauce, fresh burrata and basil.", "Salsa de tomate, burrata fresca y albahaca.", 11990, 11990),
    row("Shrimp & Parmigiano", "Camarón & Parmesano", "Garlic-butter shrimp, onion and Parmesan cheese.", "Camarones en mantequilla de ajo, cebolla y queso parmesano.", 13750, 13750, "★"),
    row("Dipping sauces", "Salsas para dipear", "Homemade aioli · Hot honey · Garlic butter", "Aioli casero · Miel picante · Mantequilla de ajo", 900, 900)
  ] }
];

const drinkSections = [
  { en: "Cold pressed juices", es: "Jugos cold pressed", defaultFlags: "gv", enNote: "100% fruit and veggie drink with no added water.", esNote: "Jugo 100% de la fruta sin agua, ni azúcar adicional agregada.", items: [
    row("Green Machine", "Green Machine", "Kale, cucumber, green apple, ginger, celery, lime", "Kale, pepino, manzana verde, jengibre, apio, limón", 5900, 5900),
    row("Green Candy", "Green Candy", "Pineapple, green apple, cucumber, mint", "Piña, manzana verde, pepino, hierba buena", 5900, 5900),
    row("Carrot Wonder", "Carrot Wonder", "Carrots, green apple, red apple, ginger, lime", "Zanahoria, manzana verde, manzana roja, jengibre, limón", 5900, 5900),
    row("Spicy Sandía", "Spicy Sandía", "Watermelon, green apple, beet, jalapeño, mint, lime", "Sandía, manzana verde, remolacha, jalapeño, hierba buena, limón", 5900, 5900),
    row("Charcoal Lemonade", "Limonada de Carbón", "Activated charcoal, lime, sugar", "Carbón activado, limón, azúcar", 3300, 3300),
    row("Shot of Sunshine", "Shot of Sunshine", "Orange, lime, turmeric, ginger", "Naranja, limón, cúrcuma, jengibre", 2400, 2500)
  ] },
  { en: "Smoothies & natural drinks", es: "Smoothies y bebidas naturales", defaultFlags: "gv", enNote: "All of our milks made daily in our kitchen.", esNote: "Todas nuestras leches las preparamos cada día en nuestra cocina.", enDietNote: "Vegan option available: please request no honey and plant-based milk where listed.", esDietNote: "Opción vegana disponible: solicite sin miel y con leche vegetal donde corresponda.", items: [
    row("Cacao Nut", "Cacao Nut", "Banana, homemade peanut butter, cacao, topping cacao nibs, homemade almond milk", "Banano, mantequilla de maní casera, cacao, leche de almendra casera, top de cacao nibs", 5500, 5900),
    row("Mango Passion", "Mango Passion", "Mango, passion fruit, turmeric, homemade coconut milk, honey", "Mango, maracuyá, cúrcuma, leche de coco casera, miel", 5500, 5900),
    row("Coco Chía", "Coco Chía", "Chia, mango, vanilla, homemade coconut milk, honey", "Chía, mango, vainilla, leche de coco casera, miel", 5500, 5900),
    row("Pink Lady", "Pink Lady", "Dragon fruit, mango, homemade coconut milk, honey", "Pitaya, mango, leche de coco casera, miel", 5500, 5900, "★"),
    row("Verde", "Verde", "Pineapple, avocado, kale, cucumber, ginger, lime, honey", "Piña, aguacate, kale, pepino, jengibre, limón, miel", 5500, 5900),
    row("Strawberry Matcha", "Strawberry Matcha", "Cold Matcha with coconut milk homemade and honey. On top, strawberry smoothie with regular milk and honey", "Matcha frío con leche de coco casera y miel. Encima smoothie de fresa con leche regular", 5500, 5900, "", null, { enDescription: "Cold Matcha with homemade coconut milk and honey. On top, strawberry smoothie with regular milk and honey" }),
    row("Sunrise", "Sunrise", "Banana, mango, ginger, turmeric, cinnamon, homemade almond milk, honey", "Banano, mango, jengibre, cúrcuma, canela, leche de almendra casera, miel", 5500, 5900),
    row("Add Protein | Pura Prote", "Agregar Proteína | Pura Prote", "", "", 2200, 2400),
    row("Make your smoothie with 2 fruits and water", "Arma tu propio smoothie en agua, con 2 frutas", "Watermelon, mango, strawberry, papaya, banana", "Sandía, mango, fresa, banano, papaya o piña", 3000, 3400),
    row("Orange Juice — Homemade squeezed", "Jugo de Naranja — Exprimido en casa", "", "", 3000, 3000),
    row("Raspberry Lemonade", "Limonada de Frambuesa", "", "", 3100, 3400, "★"),
    row("Mint Lemonade", "Limonada de Hierba Buena", "", "", 2800, 3000)
  ] },
  { en: "Mixology", es: "Mixología", defaultFlags: "gv", excludeDefaultFlagsFor: ["Heineken", "Corona", "Craft beer:", "Guana - Red IPA", "Playa Grande - Summer Ale, Official Pots & Bowls Beer", "Zarpeazul - Lager"], items: [
    row("Mimosa", "Mimosa", "", "", 4900, 4900),
    row("Carajillo", "Carajillo", "Licor 43, espresso shot, sugar", "Licor 43, shot de espresso, jarabe de azúcar", 7000, 7000),
    row("Passion Fruit Spicy Margarita", "Margarita Picante de Maracuyá", "Jalapeño infused tequila, passion fruit, jalapeño spicy salt", "Tequila infusionado con jalapeño, maracuyá, sal picante de jalapeño", 6600, 6600, "★"),
    row("Aperol Spritz", "Aperol Spritz", "", "", 7900, 7900),
    row("Blackberry Gin & Tonic", "Mora Gin & Tonic", "", "", 5900, 5900),
    row("Strawberry Mojito", "Mojito de Fresa", "", "", 5900, 5900),
    row("Red Sangría", "Sangría Roja", "", "", 7900, 7900),
    row("Heineken", "Heineken", "", "", 3600, 3600),
    row("Corona", "Corona", "", "", 3200, 3200),
    row("Craft beer:", "Cerveza Artesanal:", "", "", 6400, 6400),
    row("Guana - Red IPA", "Guana - Red IPA", "", "", null, null),
    row("Playa Grande - Summer Ale, Official Pots & Bowls Beer", "Playa Grande - Summer Ale, cerveza oficial de Pots & Bowls", "", "", null, null, "★"),
    row("Zarpeazul - Lager", "Zarpeazul - Lager", "", "", null, null)
  ] },
  { en: "Desserts", es: "Postres", defaultFlags: "v", vegetarianOnly: true, enNote: "Baked and crafted fresh in our kitchen.", esNote: "Horneados y preparados frescos en nuestra cocina.", items: [
    row("Cinnamon Roll", "Rollo de Canela", "", "", 2300, 2300),
    row("Banana Bread", "Queque de Banano", "", "", 3900, 3900),
    row("Mini Banana Bread", "Mini Queque de Banano", "", "", 2400, 2400),
    row("Peanut Butter Brownie", "Brownie de Mantequilla de Maní", "", "", 3900, 3900, "★"),
    row("Mini Peanut Butter Brownie", "Mini Brownie de Mantequilla de Maní", "", "", 2400, 2400),
    row("Oatmeal Cookie", "Galleta de Avena", "", "", 2800, 2800),
    row("Mini Oatmeal Cookie", "Mini Galleta de Avena", "", "", 1900, 1900),
    row("Cashew, Coconut and Pineapple Bites", "Bites de Marañón, Coco y Piña", "", "", 2400, 2400),
    row("Paletas de Helado Guanaletta", "Paletas de Helado Guanaletta", "", "", 2400, 2400),
    row("Carrot Cake", "Queque de Zanahoria", "", "", 5200, 5200),
    row("Carrot Cake | Hole", "Queque de Zanahoria - Entero", "", "", 36000, 36000),
    row("Pineapple Empanaditas", "Empanaditas de Piña", "", "", 1300, 1300),
    row("Almond with Raspberry Bites", "Bolitas de Almendra con Frambuesa", "", "", 1300, 1300),
    row("Salted Caramel Chessecake", "Salted Caramel Chessecake", "", "", 6600, 6600, "★"),
    row("Salted Caramel Chessecake - Hole", "Salted Caramel Chessecake | Entero", "", "", 54000, 54000),
    row("Ice Cream Scoop", "Bola de Helado", "", "", 2000, 2000)
  ] },
  { en: "Coffee & tea", es: "Café y té", defaultFlags: "gv", enDietNote: "Vegan option available with plant-based milk where listed.", esDietNote: "Opción vegana disponible con leche vegetal donde corresponda.", items: [
    row("Americano", "Americano", "", "", 1700, 1800),
    row("Cortado", "Cortado", "", "", 1800, 1900),
    row("Coffee with milk", "Café con Leche", "", "", 2000, 2200),
    row("Flat White", "Flat White", "", "", 2800, 3000),
    row("Cappuccino", "Cappuccino", "", "", 2500, 2800),
    row("Latte", "Latte", "", "", 2800, 3000),
    row("Cold Brew", "Cold Brew", "", "", 3200, 3500),
    row("Mochaccino", "Mochaccino", "", "", 2800, 3000),
    row("Matcha", "Matcha", "", "", 3600, 3600),
    row("Decaf Matcha", "Matcha Descafeinado", "", "", 4700, 4700),
    row("Hojicha", "Hojicha", "", "", 4500, 4600),
    row("Pea Butterfly", "Pea Butterfly", "", "", 4700, 4700),
    row("Golden Milk", "Golden Milk", "", "", 3200, 3500),
    row("Chai Tea", "Té Chai", "", "", 3100, 3400),
    row("Cacao Magic Bulk", "Cacao Magic Bulk", "", "", 4200, 4200),
    row("Hot chocolate - natural cacao", "Chocolate Caliente Natural", "", "", 2400, 2700),
    row("Additional Homemade Milks", "Adicional de Leche Hecha en Casa", "", "", 1500, 1600)
  ] },
  { en: "Water & soda", es: "Agua y gaseosas", defaultFlags: "gv", items: [
    row("San Benedetto Water 750ml", "Agua San Benedetto 750ml", "", "", 4600, 4600),
    row("San Pellegrino Water 750ml", "Agua San Pellegrino 750ml", "", "", 5800, 5800),
    row("Coca Cola", "Coca Cola", "", "", 2200, 2200)
  ] },
  { en: "Wine", es: "Vino", defaultFlags: "gv", wine: true, items: [
    row("Le Petit Connetable", "Le Petit Connetable", "Sauvignon Blanc. France", "Sauvignon Blanc. Francia", [6600, 25800], [6600, 25800]),
    row("Sottan Junior", "Sottan Junior", "Chardonnay. Argentina", "Chardonnay. Argentina", [6200, 24300], [6200, 24300], "", null, { name: "Sottano Junior" }),
    row("Luis Alegre Crianza", "Luis Alegre Crianza", "Tempranillo. Spain", "Tempranillo. España", [6600, 26100], [6600, 26100]),
    row("Ramirana", "Ramirana", "Merlot. Chile", "Merlot. Chile", [6200, 24300], [6200, 24300])
  ] }
];

const root = document.querySelector("[data-location-menu]");
if (root) {
  const spanish = document.documentElement.lang.startsWith("es");
  const catalinas = root.dataset.locationMenu === "catalinas";
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const price = value => value == null ? "" : Array.isArray(value)
    ? value.map(number => "₡" + number.toLocaleString("en-US")).join(" / ")
    : "₡" + value.toLocaleString("en-US");
  const flags = { v: ["Vegetarian / vegan option available", "Vegetariano / opción vegana disponible"], s: ["Spicy", "Picante"], g: ["Gluten-friendly", "Gluten-friendly"], "★": ["Best Seller", "Más vendido"] };
  const renderItem = (item, section) => {
    const sectionFlags = section.excludeDefaultFlagsFor?.includes(item.en) ? "" : (section.defaultFlags || "");
    const itemFlags = [...new Set(sectionFlags + item.flags)].join("");
    const printedPrice = catalinas ? (spanish && item.catalinasSpanishPrice != null ? item.catalinasSpanishPrice : item.catalinas) : item.playa;
    const description = catalinas && item.catalinasText[spanish ? "esDescription" : "enDescription"] || (spanish ? item.esDescription : item.enDescription);
    const badges = [...itemFlags].map(flag => {
      const label = flag === "v" && section.vegetarianOnly ? (spanish ? "Vegetariano" : "Vegetarian") : flags[flag][spanish ? 1 : 0];
      return '<span class="menu-badge" title="' + escapeHtml(label) + '" aria-label="' + escapeHtml(label) + '">' + flag.toUpperCase() + "</span>";
    }).join("");
    const name = catalinas && item.catalinasText.name ? item.catalinasText.name : (spanish ? item.es : item.en);
    return '<article class="menu-item" data-flags="' + escapeHtml(itemFlags) + '"><h4><span class="menu-item-name">' + escapeHtml(name) + badges + '</span>' + (printedPrice == null ? "" : '<span class="menu-item-price">' + escapeHtml(price(printedPrice)) + "</span>") + "</h4>" + (description ? "<p>" + escapeHtml(description) + "</p>" : "") + "</article>";
  };
  const renderSection = section => '<section class="menu-section"><h3>' + escapeHtml(spanish ? section.es : section.en) + '</h3>' +
    (section.enNote ? '<p class="menu-section-note">' + escapeHtml(spanish ? section.esNote : section.enNote) + "</p>" : "") +
    (section.enDietNote ? '<p class="menu-section-note">' + escapeHtml(spanish ? section.esDietNote : section.enDietNote) + "</p>" : "") +
    (section.wine ? '<p class="menu-price-legend">' + (spanish ? "COPA / BOTELLA" : "GLASS / BOTTLE") + "</p>" : "") +
    '<div class="menu-items">' + section.items.map(item => renderItem(item, section)).join("") + "</div></section>";
  const lead = spanish ? "Ingredientes frescos, hechos desde cero para nutrir cuerpo y alma" : "Fresh, from-scratch ingredients crafted to nourish both body and soul.";
  const footer = spanish ? "Alergias o restricciones por favor notificar a su salonero. Menú contiene trazas." : "*Allergies or restrictions please let your server know. Menu may have traces.";
  const tax = spanish ? "Precios incluyen 10% de servicio y 13% de IVA" : "Prices include 10% service & 13% IVA.";
  const renderSheet = (sections, drinks) => '<div class="menu-sheet"><h2>' + escapeHtml(lead) + '</h2><div class="menu-sections">' + sections.map(renderSection).join("") + '</div>' +
    '<p class="menu-note">' + (drinks ? escapeHtml(tax) : escapeHtml(footer + " " + tax)) + "</p></div>";
  const filterLabels = spanish
    ? { v: "Vegetariano / opción vegana", s: "Picante", g: "Gluten-friendly", "★": "Más vendidos" }
    : { v: "Vegetarian / vegan option", s: "Spicy", g: "Gluten-friendly", "★": "Best Sellers" };
  root.innerHTML = '<div class="menu-filters" role="group" aria-label="' + (spanish ? "Filtrar platos" : "Filter menu items") + '"><span class="menu-filters-label">' + (spanish ? "Filtrar por:" : "Filter by:") + '</span>' +
    Object.entries(filterLabels).map(([flag, label]) => '<button type="button" data-menu-filter="' + flag + '" aria-pressed="false">' + escapeHtml(label) + '</button>').join("") +
    '</div><p class="menu-filter-status" role="status" aria-live="polite"></p>' + renderSheet(foodSections, false) + renderSheet(drinkSections, true);
  const buttons = [...root.querySelectorAll("[data-menu-filter]")];
  const items = [...root.querySelectorAll(".menu-item")];
  const status = root.querySelector(".menu-filter-status");
  const applyFilters = () => {
    const selected = buttons.find(button => button.getAttribute("aria-pressed") === "true")?.dataset.menuFilter;
    let visible = 0;
    items.forEach(item => {
      item.hidden = Boolean(selected && !item.dataset.flags.includes(selected));
      if (!item.hidden) visible++;
    });
    root.querySelectorAll(".menu-section").forEach(section => {
      section.hidden = !section.querySelector(".menu-item:not([hidden])");
    });
    root.querySelectorAll(".menu-sheet").forEach(sheet => {
      sheet.hidden = !sheet.querySelector(".menu-item:not([hidden])");
    });
    status.textContent = selected
      ? (visible ? (spanish ? `Mostrando ${visible} ${visible === 1 ? "opción" : "opciones"}.` : `Showing ${visible} ${visible === 1 ? "item" : "items"}.`) : (spanish ? "No hay opciones que coincidan con estos filtros." : "No items match these filters."))
      : (spanish ? "Mostrando todo el menú." : "Showing the full menu.");
  };
  buttons.forEach(button => button.addEventListener("click", () => {
    const activate = button.getAttribute("aria-pressed") !== "true";
    buttons.forEach(other => other.setAttribute("aria-pressed", String(activate && other === button)));
    applyFilters();
  }));
  applyFilters();
}
