const recipes = [
  {
    name: 'Pepper Chicken Wings',
    ingredients: [
      'Oil', 
      'Pepper',
      'Chicken',
    ],
    instructions: [
      'Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).', 
      'Stir olive oil and lemon-pepper seasoning together in a bowl; set aside.', 
      'Fry wings in hot oil until no longer pink at the bone and the juices run clear, about 8 minutes. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).', 
      'Toss hot wings with lemon-pepper mixture to coat.', 
    ],
    image: 'https://www.allrecipes.com/thmb/c5SbhuUstUIfhGnYQWOgnRSIniQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2912641-f8d167a8e1e344eaa1e27c28fbe99638.jpg'
  },
  {
    name: 'Japanese Tamago Egg',
    ingredients: [
      'Egg', 
      'Sugar',
      'Soy Sauce',
      'Oil', 
    ],
    instructions: [
      'Beat eggs thoroughly in a bowl; whisk in dashi stock, sugar, mirin, and soy sauce until sugar has dissolved.', 
      'Lightly grease a nonstick skillet and heat over medium heat.', 
      'Pour a thin layer of egg mixture into the hot pan and swirl to coat the pan. Cook until egg layer is firm on the bottom but still slightly liquid on top, about 1 minute. Then lift up one edge using a spatula and roll up the egg layer. Push omelet roll to one side of the skillet. Oil the skillet again and pour in another thin layer of egg, lifting the first omelet roll up slightly to allow the egg to flow underneath; roll up the first omelet in the new layer of egg and push omelet to the edge of the skillet as before. Repeat the process with the remaining egg mixture, oiling the pan each time if needed.', 
      'Remove rolled omelet to a serving platter and cut into 6 equal pieces to serve.', 
    ],
    image: 'https://www.allrecipes.com/thmb/Jw4f6tSH_SS-zPT1UWzqxGVcoF0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/953934-e1f82ce34ae648fbb12dc2118be4eb9a.jpg'
  },
  {
    name: 'Bang Bang Shrimp',
    ingredients: [
      'Mayonnaise', 
      'Chili',
      'Shrimp',
      'Oil', 
      'Lettuce', 
      'Onion',
      'Cornstarch'
    ],
    instructions: [
      'Whisk mayonnaise, sweet chile sauce, and Sriracha hot sauce together in a bowl. Set aside.', 
      'Place cornstarch in a shallow bowl. Gently press shrimps into cornstarch to coat; shake off any excess.', 
      'Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).', 
      'Working in batches, cook the shrimp until they are lightly browned on the outside and no longer transparent in the center, about 3 to 5 minutes.', 
      'Transfer shrimp to paper towels to drain.',
      'Put cooked shrimp in a bowl and pour chile sauce mixture over the shrimp; toss gently to coat.',
      'Line a serving bowl with lettuce leaves. Pour shrimp into bowl and top with chopped green onion.'
    ],
    image: 'https://www.allrecipes.com/thmb/tsb3chWjySlUprJjuNcbLmj1b94=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235267-copycat-bang-bang-shrimp-DDMFS-4x3-07fc6970da6443d6b0a8332e6189f9e0.jpg'
  },
];

const RecipesDatabase = [
  {
    id: 1,
    image: "something.jpg",
    name: "Guacomole",
    ingredients: ["guacomolo", "eggs", "tomatoes"],
  },
  {
    id: 2,
    image: "dkwhatsthis.jpg",
    name: "tomatoes mushrooms",
    ingredients: ["mushrooms", "tomatoes"],
  },
  {
    id: 3,
    image: "img.jpg",
    name: "mushrooms galore",
    ingredients: ["chicken", "mushrooms", "black fungus"],
  },
];

export { recipes, RecipesDatabase };
