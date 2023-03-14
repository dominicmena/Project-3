import {useState} from 'react'
import DeleteButton from './delete'
import Edit from './edit'



const IndexComponent = (props) =>{

 return(
    <>
    {props.allRecipe.map((recipe)=>{
        return(
            <>
            <img src={recipe.picture}/>
            <h1>Title: {recipe.title}</h1>
            <h1 >Recipe: {recipe.recipe}</h1>

            <DeleteButton delete={props.setAllRecipe}  currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            
            <Edit currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp} _id={recipe._id} setAllRecipe={props.setAllRecipe}/>
            </>
        )
    })}
    </>
 )
}

export default IndexComponent