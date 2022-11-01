import React, {useState} from 'react';
import {useGlobalContext} from "../context";

const Search = () => {
    const [text, setText] = useState('')

    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text) {
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () =>{
        setSearchTerm('');
        setText('');
        fetchRandomMeal();
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type favorite meal" className="form-input" onChange={handleChange}
                       value={text}/>
                <button className="btn" type="submit">search</button>
                <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>surprise me!</button>
            </form>
        </header>
    );
};

export default Search;
