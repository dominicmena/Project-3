import {useState} from 'react'
import DeleteButton from './delete'
import Edit from './edit'



const IndexComponent = (props) =>{

    
 return(
    <>
    {props.recipe.map((recipe)=>{
        return(
            <>
            <h1>Title: {recipe.title}</h1>
            <h1>Recipe: {recipe.recipe}</h1>
            <DeleteButton delete={props.setAllRecipe} deleted={props.allRecipe} currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            <Edit currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            </>
        )
    })}
    </>
 )
}

export default IndexComponent