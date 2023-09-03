import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ingrident: [
    {
      type: String,
      require: true,
    },
  ],
  instruction: { type: String, require: true },
  imageUrl: { type: String, require: true },
  cookingTime: { type: Number, require: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

export const RecipesModel = mongoose.model("recipes", RecipeSchema);
