import React, { useState, useEffect } from "react";
import axios from "axios";
import './recipe.css';
import AddRecipeComponent from './components/recipeAdd'
import IndexComponent from './components/indexCards'


function App() {
  const [update,setUpdate] = useState(false)
  const [allRecipe,setAllRecipe] = useState([])

  const callApi = (e) =>{
    try{
      axios.get('http://localhost:3000/recipes').then((res)=>{
        setAllRecipe(res.data)
      })
    } catch (error){
      console.log(error)
    }
  }

  const updateApp = () =>{
    setUpdate(!update)
  }

  useEffect(()=>{
    callApi()
  },[update])


  return (
    <>
      <h1 className="pageTitle">
        Phat to the Max Recipes
      </h1>
      <AddRecipeComponent  update={update} setUpdate={setUpdate} updateApp={updateApp}/>
      {
        allRecipe.map((recipe)=>{
          return(
            <>
            <IndexComponent currentRecipe={recipe} setAllRecipe={setAllRecipe} recipe={allRecipe} update={update} setUpdate={setUpdate} updateApp={updateApp}/>
            </>
            )
          })
        }
      
    </>
  );
}

export default App;
