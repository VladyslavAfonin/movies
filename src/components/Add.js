import React, { useState } from 'react'
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (evt) => {
        evt.preventDefault();
        setQuery(evt.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&query=${evt.target.value}`)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([])
                }
            })
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder='Enter a movie...' value={query} onChange={onChange} />
                    </div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map(movie => (
                                <ResultCard movie={movie} key={movie.id} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add
