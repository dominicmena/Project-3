import React, { useState, useEffect } from "react";
import axios from "axios";
import './recipe.css';
import AddRecipeComponent from './components/recipeAdd'
import IndexComponent from './components/indexCards'


function App() {
  const [update,setUpdate] = useState(false)
  const [allRecipe,setAllRecipe] = useState([])

  const callApi = (e) =>{
    axios.get('http://localhost:3000/recipes').then((res)=>{
      setAllRecipe(res.data)
    })
  }

  useEffect(()=>{
    callApi()
  },[update])


  return (
    <>
      <h1 className="pageTitle">
        Phat to the Max Recipes
      </h1>
      {
        allRecipe.map((recipe)=>{
          return(
            <>
            <AddRecipeComponent recipe={recipe} update={update} setUpdate={setUpdate}/>
            <IndexComponent recipe={recipe} update={update} setUpdate={setUpdate}/>
            </>
            )
        })
      }
      
    </>
  );
}

export default App;
