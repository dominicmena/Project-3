const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Recipes = require('./models/recipeschema')

app.use(express.json())

app.get('/recipes', async (req, res) => {
    const allRecipes = await Recipes.find({})
    res.json(allRecipes)
})
