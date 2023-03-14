import {useState} from 'react'
import DeleteButton from './delete'
import Edit from './edit'



const IndexComponent = (props) =>{

 return(
    <>
    {props.allRecipe.map((recipe)=>{
        return(
            <>
            <h1 className={recipe._id}>Title: {recipe.title}</h1>
            <h1>Recipe: {recipe.recipe}</h1>

            <DeleteButton   currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            
            <Edit currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            </>
        )
    })}
    </>
 )
}

export default IndexComponent