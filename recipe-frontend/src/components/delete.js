import {useState} from 'react'
import axios from 'axios'

const Delete = (props) =>{
   const handleDelete = () => {
      axios.delete(`http://localhost:3000/recipes/${props.currentRecipe._id}`)
      .then(() => {
        axios.get('http://localhost:3000/recipes').then((res) => {
          props.delete(res.data)
        })
      })
    }

 return(
   <li className="deleteBtn"><button onClick={ (e)=>{ handleDelete(props.currentRecipe) } }>Delete</button></li>
 )
}

export default Delete