import {useState} from 'react'
import DeleteButton from './delete'
import Edit from './edit'



const IndexComponent = (props) =>{

 return(
    <section className="cards">

    <ul className="card-container">
    {props.allRecipe.map((recipe)=>{
        return(
            <>
            <img src={recipe.picture} className="images"/>
            <h1 clasName="cardTitle">Title: {recipe.title} </h1>
            <h1 className="cardRecipe">Recipe: {recipe.recipe}</h1>

            <DeleteButton delete={props.setAllRecipe}  currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            
            <Edit currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp} _id={recipe._id} setAllRecipe={props.setAllRecipe}/>
            </>
        )
    })}
    </ul>
    </section>
 )
}

export default IndexComponent