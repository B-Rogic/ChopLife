
import firstCardImage from '@/images/firstCardImage.jpg'
import secondCardImage from '@/images/secondCardImage.png'
import thirdCardImage from '@/images/thirdCardImage.png'
import fourthCardImage from '@/images/fourthCardImage.jpg'
import fifthCardImage from '@/images/fifthCardImage.jpg'
import sixthCardImage from '@/images/sixthCardImage.jpg'
import seventhCardImage from '@/images/seventhCardImage.jpg'
import eightCardImage from '@/images/eightCardImage.jpg'
import pepperoniPizza from '@/images/pepperoniPizza.jpg'
import garlicSupreme from '@/images/garlicSupreme.png'
import firecracker from '@/images/firecracker.png'
import pasta from '@/images/pasta.jpg'
import noodles from '@/images/noodles.jpg'
import beefSharwama from '@/images/beefSharwama.jpg'
import rice from '@/images/rice.jpg'
import pepperedChicken from '@/images/pepperedChicken.jpg'
import jollofRice from '@/images/jollofRice.jpg'
import pepperedBeef from '@/images/pepperedBeef.jpg'
import barbecue from '@/images/barbecue.jpg'
import boli from '@/images/boli.jpg'
import friedRice from '@/images/friedRice.jpg'
import yamEgg from '@/images/yamEgg.jpg'
import buffaloWings from '@/images/buffaloWings.png'
import caesarSalad from '@/images/caesarSalad.png'
import loadedPotato from '@/images/loadedPotato.png'
import chickenChips from '@/images/chickenChips.png'
import bbqBlaze from '@/images/bbqBlaze.jpg'
import yamEggSauce from '@/images/yamEggSauce.jpg'
import chickenSharwama from '@/images/chickenSharwama.png'
import sparklingWater from '@/images/sparklingWater.png'
import classicCola from '@/images/classicCola.png'
import lemonIce from '@/images/lemonIce.png'
import coconutWater from '@/images/coconutWater.png'
import orangeJuice from '@/images/orangeJuice.png'
import strawberySmoothie from '@/images/strawberrySmoothie.png'
import brewCoffee from '@/images/brewCoffee.png'
import chocolate from '@/images/chocolate.png'
import beerFloat from '@/images/beerFloat.png'
import soda from '@/images/soda.png'
import zoboMojitos from '@/images/zoboMojitos.jpg'
import naijaSunrise from '@/images/naijaSunrise.jpg'

export const productItems = [
  {
    'id': 1, 
    'name': 'Spicy Noodles',
    'description': 'Hot, steamy noodles toosed in a flowerful pepper blend.',
    'amount': 1_800,
    'image': firstCardImage
  },
  {
    'id': 2, 
    'name': 'Chicken Shawarma',
    'description': 'Packed with juicy fillings, sauces, and grilled perfection.',
    'amount': 2_500,
    'image': secondCardImage
  },
  {
    'id': 3, 
    'name': 'Chicken and Chips',
    'description': 'Choice of wings or drumsticks with cripsy yam and potatoes chips.',
    'amount': 3_500,
    'image': thirdCardImage
  },
  {
    'id': 4, 
    'name': 'Spicy Fast Combo',
    'description1': 'Jollof Noodles - Smoky, party-style noodles',
    'description2': 'Pepper Chicken (2 Pices) - Juicy and spicy!',
    'amount': 7_500,
    'save': 1_500,
    'image': fourthCardImage,
    'bgColor': '#ff003c',
    'textColor': '#fff',
    'bottom': 'md:-bottom-[76%] -bottom-[48%]'
  },
  {
    'id': 5, 
    'name': 'Chicken Lovers',
    'description1': 'Barbecue Chicken - Charred to perfection',
    'description2': 'Cocktail or Smoothie',
    'amount': 15_500,
    'save': 4_500,
    'image': fifthCardImage,
    'bgColor': '#ffcc00',
    'textColor': '#000', 
    'bottom': 'md:bottom-[-10%] -bottom-[5%]'
  },
  {
    'id': 6, 
    'name': 'Smoothie Bliss Combo',
    'description1': 'Any 1 Large Smoothie - Choose from menu',
    'description2': 'Free Side Dish Add-on-Choose from Menu',
    'amount': 6_500,
    'save': 3_500,
    'image': sixthCardImage,
    'bgColor': '#1a1a1a',
    'textColor': '#fff',
    'bottom': 'md:-bottom-[50%] -bottom-[10%]'
  },
  {
    'id': 7, 
    'name': 'Chill & Sip Cocktail Special',
    'description1': 'Any 1 Signature Cocktail - Choose from Menu',
    'description2': '1 Small Chops Box - Spring rolls, samosa, and peppered gizzard bites',
    'amount': 7_500,
    'save': 1_500,
    'image': seventhCardImage, 
    'bgColor': '#0a9900',
    'bottom': 'md:-bottom-[90%] -bottom-[60%]'
  },
  {
    'id': 8, 
    'name': "Pizza Lovers' Feast",
    'description1': '1 Large Pizza - Choose from Menu',
    'description2': '1 Free Cocktail - Choose from menu',
    'amount': 9_500,
    'save': 5_500,
    'image': eightCardImage,
    'bgColor': '#ff9100',
    'bottom': 'md:-bottom-[5%] -bottom-[5%]'
  },
  {
    'id': 9,
    'name': "Pepperoni Pizza",
    'ingredients': "Soft crust pizza loaded with cheese, pepperoni, chicken, or veggies.",
    'nutritionInfo': ['Calories: ~280 kcal', 'Carbs: 32g', 'Protein: 12g', 'Fat: 14g'],
    'alergies': 'Gluten, Dairy, May contain soy',
    'amount': 3500,
    'image': pepperoniPizza,
  },
  {
    'id': 10,
    'name': "Garlic Supreme",
    'ingredients': "Roasted garlic cloves, caramelized onions, mozzarella, parmesan, Alfredo sauce, fresh parsley",
    'nutritionInfo': ['Calories: ~270', 'Fat: 13g', 'Carbohydrates: 27g', 'Protein: 11g'],
    'alergies': 'Dairy, Gluten',
    'amount': 25800,
    'image': garlicSupreme,
  },
  {
    'id': 11,
    'name': "Firecracker Inferno",
    'ingredients': "Spicy pepperoni, jalapenos, crushed red pepper, mozzarella, marinara sauce, sriracha drizzle",
    'nutritionInfo': ['Calories: ~280', 'Fat: 14g', 'Carbohydrates: 28g', 'Protein: 12g'],
    'alergies': 'Dairy, Gluten',
    'amount': 15800,
    'image': firecracker,
  },
  {
    'id': 12, 
    'name': "Naija Jollof Pasta",
    'ingredients': 'Our twist on the classic Jollof - al dente paster simmered in smoky tomato-pepper sauce, with sauteed onions, belle peppers, and spiced beef or chicken.',
    'nutritionInfo': ['Calories: ~280', 'Fat: 14g', 'Peppered Beef or', 'Chicken'],
    'alergies': 'None',
    'amount': 2_000,
    'image': pasta
  },
  {
    'id': 13,
    'name': "Spicy Noodles",
    'ingredients': "Hot, steamy noodles tossed in a flavorful pepper blend.",
    'nutritionInfo': ['Calories: ~480', 'Fat: 22g', 'Carbohydrates: 62g', 'Protein: 7g', 'Protein: 12g'],
    'alergies': 'Dairy, Gluten',
    'amount': 1800,
    'image': noodles,
  },
  {
    'id': 14,
    'name': "Beef Shawarma",
    'ingredients': "Packed with juicy fillings, sauces, and grilled perfection.",
    'nutritionInfo': ['Calories: ~430', 'Fat: 18g', 'Carbohydrates: 64g', 'Protein: 5g'],
    'alergies': 'Gluten',
    'amount': 4000,
    'image': beefSharwama,
  },
  {
    'id': 15,
    'name': "White Rice and Stew",
    'ingredients': "Fluffy long-grain white rice served with rich tomato stew made from fresh peppers, onions, and spices.",
    'nutritionInfo': ['Calories: ~380 kcal', 'Carbs: 70g', 'Protein: 8g', 'Fat: 9g'],
    'alergies': 'May contain traces of peanuts if cooked with groundnut oil.',
    'amount': 6500,
    'image': rice,
  },
  {
    'id': 16,
    'name': "Peppered Chicken",
    'ingredients': "Juicy grilled or fried chicken tossed in a hot pepper sauce. Choose wings, drumsticks, or grilled thighs.",
    'nutritionInfo': ['Calories: ~220 kcal', 'Protein: 18g', 'Fat: 15g'],
    'alergies': 'None (Check for pepper sensitivity)',
    'amount': 1200,
    'image': pepperedChicken,
    'chicken': '/ 1 Drumstick'
  },
  {
    'id': 17,
    'name': "Jollof Rice",
    'ingredients': "Smoky party-style jollof rice cooked in rich tomato sauce, served hot with veggies or optional proteins.",
    'nutritionInfo': ['Calories: ~420 kcal', 'Carbs: 75g', 'Protein: 10g', 'Fat: 12g'],
    'alergies': 'None (Check for sensitivity to tomatoes or pepper)',
    'amount': 1500,
    'image': jollofRice,
    'chicken': '1'
  },
  {
    'id': 18,
    'name': "Peppered Beef",
    'ingredients': "Tender beef chunks simmered and stir-fried in spicy pepper sauce. Perfect side for rice or as a standalone delight.",
    'nutritionInfo': ['Calories: ~300 kcal', 'Protein: 25g', 'Fat: 18g'],
    'alergies': 'None',
    'amount': 1500,
    'image': pepperedBeef,
    'chicken': '1'
  },
  {
    'id': 19,
    'name': "Barbecue Fish",
    'ingredients': "Grilled whole tilapia or croaker, seasoned and basted in spicy marinade. Served with sides like Boli or salad.",
    'nutritionInfo': ['Calories: ~600', 'Fat: 22g', 'Carbohydrates: 80g', 'Protein: 16g'],
    'alergies': 'Gluten, Dairy',
    'amount': 3000,
    'image': barbecue,
    'barbecue': '/ ft'
  },
  {
    'id': 20,
    'name': "Boli (Grilled Plantain)",
    'ingredients': "Ripe plantain grilled to perfection, served with groundnut sauce or pepper mix.",
    'nutritionInfo': ['Calories: ~230 kcal', 'Carbs: 50g', 'Fiber: 4g'],
    'alergies': 'May contain groundnut (optional sauce)',
    'amount': 1000,
    'image': boli,
  },
  {
    'id': 21,
    'name': "Fried Rice",
    'ingredients': "Savory stir-fried rice with veggies, sweet corn, green peas, and optional protein.",
    'nutritionInfo': ['Calories: ~400 kcal', 'Carbs: 65g', 'Protein : 10g', 'Fat : 11g'],
    'alergies': 'None (Check for vegetable allergies)',
    'amount': 2300,
    'image': friedRice,
    'chicken': '1'
  },
  {
    'id': 22,
    'name': "Boiled Yam & Egg Sauce",
    'ingredients': "Soft boiled yam slices served with spicy egg and tomato sauce. A classic and hearty dish.",
    'nutritionInfo': ['Calories: ~350 kcal', 'Carbs: 60g', 'Protein : 12g', 'Fat : 10g'],
    'alergies': 'Eggs',
    'amount': 3500,
    'image': yamEgg,
  },
  {
    'id': 23,
    'name': "Buffalo Wings",
    'ingredients': "Chicken wings, buffalo sauce, celery sticks, blue cheese dip",
    'nutritionInfo': ['Calories: ~430 kcal', 'Fat: 31g', 'Carbohydrates: 6g', 'Protein: 31g'],
    'alergies': 'Dairy (blue cheese dip)',
    'amount': 2500,
    'image': buffaloWings,
  },
  {
    'id': 24,
    'name': "Classic Caesar Salad",
    'ingredients': "Romaine lettuce, Parmesan cheese, Croutons, Caesar dressing (anchovies, eggs, Parmesan)",
    'nutritionInfo': ['Calories: ~310', 'Fat: 24g', 'Carbohydrates: 17g', 'Protein: 8g'],
    'alergies': 'Dairy, Gluten, Eggs',
    'amount': 12500,
    'image': caesarSalad,
  },
  {
    'id': 25,
    'name': "Loaded Potato Wedges",
    'ingredients': "Crispy potato wedges, cheddar cheese, bacon bits, sour cream, chives",
    'nutritionInfo': ['Calories: ~520', 'Fat: 28g', 'Carbohydrates: 52g', 'Protein: 12g'],
    'alergies': 'Dairy, Gluten',
    'amount': 16500,
    'image': loadedPotato,
  },
  {
    'id': 26,
    'name': "Chicken Shawarma",
    'ingredients': "Packed with juicy fillings, sauces, and grilled perfection.",
    'nutritionInfo': ['Calories: ~320', 'Fat: 17g', 'Carbohydrates: 29g', 'Protein: 14g'],
    'alergies': 'Gluten',
    'amount': 2500,
    'image': chickenSharwama,
  },
  {
    'id': 27,
    'name': "Chicken Chips",
    'ingredients': "Choice of wings or drumsticks with crispy yam chips.",
    'nutritionInfo': ['Calories: ~300', 'Fat: 15g', 'Carbohydrates: 28g', 'Protein: 12g'],
    'alergies': 'Gluten',
    'amount': 3500,
    'image': chickenChips,
  },
  {
    'id': 28,
    'name': "BBQ Blaze",
    'ingredients': "Grilled chicken, red onions, smoky BBQ sauce",
    'nutritionInfo': ['Calories: ~290', 'Fat: 12g', 'Carbohydrates: 29g', 'Protein: 15g'],
    'alergies': 'Gluten',
    'amount': 8800,
    'image': bbqBlaze,
  },
  {
    'id': 29,
    'name': "Yam & Egg Sauce",
    'ingredients': "Golden yam slices served with our rich, peppered egg sauce",
    'nutritionInfo': ['Calories: ~220', 'Fat: 10g', 'Carbohydrates: 26g', 'Protein: 9g'],
    'alergies': 'Diary, Gluten',
    'amount': 3500,
    'image': yamEggSauce,
  },
  {
    'id': 30,
    'name': "Sparkling Water",
    'ingredients': "Carbonated water",
    'nutritionInfo': ['Calories: 0', 'Fat: 0g', 'Carbohydrates: 0g', 'Protein: 0g'],
    'alergies': 'None',
    'amount': 1800,
    'image': sparklingWater,
    'volume': '1L'
  },
  {
    'id': 31,
    'name': "Classic Colar",
    'ingredients': "Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, caffeine, natural flavor",
    'nutritionInfo': ['Calories: 140', 'Fat: 0g', 'Carbohydrates: 39g', 'Protein: 0g'],
    'alergies': 'None',
    'amount': 2800,
    'image': classicCola,
    'volume': '1L'
  },
  {
    'id': 32,
    'name': "Lemon Ice Tea",
    'ingredients': "Brewed black tea, lemon juice, sugar, ice",
    'nutritionInfo': ['Calories: 120', 'Fat: 0g', 'Carbohydrates: 30g', 'Protein: 0g'],
    'alergies': 'None',
    'amount': 2800,
    'image': lemonIce,
    'volume': '1L'
  },
  {
    'id': 33,
    'name': "Coconut Water Cooler",
    'ingredients': "Fresh coconut water, lime juice, mint leaves, ice",
    'nutritionInfo': ['Calories: 60', 'Fat: 0g', 'Carbohydrates: 15g', 'Protein: 0g'],
    'alergies': 'None',
    'amount': 2800,
    'image': coconutWater,
    'volume': '1L'
  },
  {
    'id': 34,
    'name': "Orange Juice",
    'ingredients': "Freshly squeezed oranges",
    'nutritionInfo': ['Calories: 160', 'Fat: 0g', 'Carbohydrates: 38g', 'Protein: 2g'],
    'alergies': 'None',
    'amount': 2000,
    'image': orangeJuice,
    'volume': '1L'
  },
  {
    'id': 35,
    'name': "Strawberry Banana Smoothie",
    'ingredients': "Strawberries, bananas, yoghurt, honey, ice",
    'nutritionInfo': ['Calories: 210', 'Fat: 2.5g', 'Carbohydrates: 44g', 'Protein: 5g'],
    'alergies': 'Dairy',
    'amount': 6800,
    'image': strawberySmoothie,
    'volume': '1L'
  },
  {
    'id': 36,
    'name': "Cold Brew Coffee",
    'ingredients': "Cold-brewed coffee, ice",
    'nutritionInfo': ['Calories: 5', 'Fat: 0g', 'Carbohydrates: 1g', 'Protein: 0g'],
    'alergies': 'none',
    'amount': 2800,
    'image': brewCoffee,
    'volume': '1L'
  },
  // --- New items added below ---
  {
    'id': 37,
    'name': "Hot Chocolate",
    'ingredients': "Milk, cocoa powder, sugar, whipped cream",
    'nutritionInfo': ['Calories: 250', 'Fat: 11g', 'Carbohydrates: 32g', 'Protein: 8g'],
    'alergies': 'Diary', // Note: "Diary" seems like a typo for "Dairy" but kept as is from source
    'amount': 2800,
    'image': chocolate,
    'volume': '1L'
  },
  {
    'id': 38,
    'name': "Beer Float",
    'ingredients': "beer, vanilla ice cream",
    'nutritionInfo': ['Calories: 280', 'Fat: 8g', 'Carbohydrates: 48g', 'Protein: 4g'],
    'alergies': 'Diary', // Note: "Diary" seems like a typo for "Dairy" but kept as is from source
    'amount': 2800,
    'image': beerFloat,
    'volume': '1L'
  },
  {
    'id': 39,
    'name': "Other Soda",
    'ingredients': "Carbonated water, selected flavor, ice",
    'nutritionInfo': ['Calories: 220', 'Fat: 8g', 'Carbohydrates: 34g', 'Protein: 2g'],
    'alergies': 'None',
    'amount': 1500,
    'image': soda,
    'volume': '1L'
  },
  {
    'id': 40,
    'name': "Zobo Mojitos",
    'ingredients': "A refreshing fusion of zobo, minth leaves, lime juice, white rum, and a hint of honey",
    'nutritionInfo': ['High in antioxidants (from zobo)', 'Low alcohol content', 'Vitamin C Boost from lime'],
    'alergies': 'Alcohol',
    'amount': 2500,
    'image': zoboMojitos,
  },
  {
    'id': 41,
    'name': "Naija Sunrise",
    'ingredients': "Breeded mozzarella cheese sticks, marinara sauce for dipping", // This seems like a mismatch for a drink named "Naija Sunrise" but kept as is from source
    'nutritionInfo': ['Calories: 450', 'Fat: 25g', 'Carbohydrates: 39g', 'Protein: 18g'],
    'alergies': 'Dairy, Gluten, Eggs',
    'amount': 2800,
    'image': naijaSunrise,
  },
];