import React, { useState } from 'react';
import axios from 'axios';

function NewRecipe() {
  const [picture, setPicture] = useState('');
  const [title, setTitle] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/recipes', { picture, title, recipe });
      // Recipe successfully created
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="picture">Picture:</label>
        <input type="text" id="picture" value={picture} onChange={(event) => setPicture(event.target.value)} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="recipe">Recipe:</label>
        <textarea id="recipe" value={recipe} onChange={(event) => setRecipe(event.target.value)} />
      </div>
      <button type="submit">Create Recipe</button>
    </form>
  );
}

export default NewRecipe;
