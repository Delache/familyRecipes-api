import express from 'express';
import loaders from './loaders';

import { RepresentationController } from './controller/representation.controller';
import { CategoryController } from './controller/category.controller';
import { SubcategoryController } from './controller/subcategory.controller';
import { UserController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';
import { RecipeController } from './controller/recipe.controller';
import { CommentController } from './controller/comment.controller';
import { PreparationListController } from './controller/preparationList.controller';
import { IngredientsListController } from './controller/ingredientsList.controller';
import { IngredientLineController } from './controller/ingredientLine.controller';
import { IngredientController } from './controller/ingredient.controller';
import { FavoritController } from './controller/favorit.controller';
import { SeasonalVegetableController } from './controller/seasonalVegetable.controller';
import { UnitController } from './controller/unit.controller';

async function startServer() {
  // Récupération de l'application initiale
  const app = express();
  // Chargement des différents loader
  await loaders(app);

  // Ajout des différentes route de votre application
  UserController(app);
  AuthController(app);
  RecipeController(app);
  UnitController(app);
  CommentController(app);
  FavoritController (app);
  IngredientsListController(app);
  IngredientController(app);
  IngredientLineController(app);
  RepresentationController(app);
  PreparationListController(app);
  SeasonalVegetableController(app);
  CategoryController(app);
  SubcategoryController(app);

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server is running'));
}

startServer();
