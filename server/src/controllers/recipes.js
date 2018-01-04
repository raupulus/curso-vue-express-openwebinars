class RecipesController {
  recipe (req, res, next) {
    return res
      .status(200)
      .json({ key: 'value' })
  }

  addRecipe (req, res, next) {
    return res
      .status(201)
      .json({ key: 'value post' })
  }

  editRecipeById (req, res, next) {
    return res
      .status(201)
      .json({ key: `put ${req.params.id}` })
  }

  recipeById (req, res, next) {
    return res
      .status(200)
      .json({ id: req.params.id })
  }
}

export default new RecipesController()