import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchlist, addMovieToWatched, removeMovieFromWatched, moveToWatchlist} = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {
                type === 'watchlist' && (
                    <>
                        <button className="ctrl-btn">
                            <i className='fa-fw far fa-eye' onClick={() => addMovieToWatched(movie)}></i>
                        </button>
                        <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
                            <i className='fa-fw fa fa-times'></i>
                        </button>
                    </>
                ) 
            }

            {
                type === 'watched' && (
                    <>
                        <button className="ctrl-btn">
                            <i className='fa-fw far fa-eye-slash' onClick={() => moveToWatchlist(movie)}></i>
                        </button>
                        <button className="ctrl-btn" onClick={() => removeMovieFromWatched(movie.id)}>
                            <i className='fa-fw fa fa-times'></i>
                        </button>
                    </>
                ) 
            }
        </div>
    )
}

export default MovieControls
