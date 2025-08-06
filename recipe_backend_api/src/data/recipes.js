//
// Static array of sample recipes; can be easily swapped for a DB/model later.
//
const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    category: 'Pasta',
    ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan', 'black pepper'],
    cookingTime: 20,
    description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    instructions: [
      'Boil the spaghetti until al dente.',
      'Cook the bacon until crisp.',
      'Mix eggs and parmesan in a bowl.',
      'Drain spaghetti and quickly mix with egg mixture and bacon.',
      'Season with pepper and serve.'
    ]
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    category: 'Indian',
    ingredients: ['chicken', 'yogurt', 'tomato', 'cream', 'garam masala', 'onion'],
    cookingTime: 45,
    description: 'Tender chicken pieces in a rich, creamy spiced tomato sauce.',
    instructions: [
      'Marinate chicken in yogurt and spices.',
      'Grill or sauté the chicken.',
      'Prepare sauce with onion, tomato, and cream.',
      'Simmer chicken in sauce and serve with rice or naan.'
    ]
  },
  {
    id: 3,
    title: 'Avocado Toast',
    category: 'Breakfast',
    ingredients: ['bread', 'avocado', 'lemon', 'salt', 'pepper', 'chili flakes'],
    cookingTime: 10,
    description: 'Quick and healthy breakfast with smashed avocado on toasted bread.',
    instructions: [
      'Toast the bread slices.',
      'Mash avocados with lemon, salt, and pepper.',
      'Spread on toast and top with chili flakes.'
    ]
  },
  {
    id: 4,
    title: 'Vegetable Stir Fry',
    category: 'Vegetarian',
    ingredients: ['broccoli', 'carrot', 'bell pepper', 'soy sauce', 'garlic'],
    cookingTime: 15,
    description: 'Colorful fresh vegetables, stir-fried with a savory sauce.',
    instructions: [
      'Chop vegetables.',
      'Sauté garlic in oil.',
      'Add vegetables and stir fry until crisp-tender.',
      'Add soy sauce and toss to coat.'
    ]
  }
];

module.exports = recipes;
