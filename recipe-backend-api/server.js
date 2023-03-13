const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Recipes = require('./models/recipeschema')

app.use(express.json())

app.get('/recipes', async (req, res) => {
    const allRecipes = await Recipes.find({})
    res.json(allRecipes)
})

app.post('/recipes', async (req, res) => {
    const newRecipe = await Recipes.create(req.body)
    res.json(newRecipe)
})

app.put('/animals/:id', async (req, res) => {
    const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(updatedRecipe)
})

app.delete('/animals/:id', async (req, res) => {
    const deleteRecipe = await Recipes.findByIdAndRemove(req.params.id)
    res.json(deleteRecipe)
})

app.listen(3000, () => {
    console.log('listening...')
})

mongoose.connect('mongodb://localhost:27017/recipemern')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})