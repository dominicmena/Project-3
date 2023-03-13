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
            <DeleteButton recipe={recipe} update={props.update} setUpdate={props.setUpdate} />
            <Edit recipe={recipe} update={props.update} setUpdate={props.setUpdate}/>
            </>
        )
    })}
    </>
)
}

export default IndexComponent