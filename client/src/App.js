import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findMovies } from './actions/movieActions'
import { listLinks } from './actions/linkActions'
import './App.css';
import Loader from  './Loader';
import Message from  './Message';


function App() {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList)
  const { error, loading, movies } = movieList
  
  const linkList = useSelector(state => state.linkList)
  const { linkerror, linksloading, links } = linkList

  const [ searchword, setsearchword ] = useState("");
  const [message, setMessage] = useState('')

  const searchMovie = async(e) => {
    e.preventDefault();
    dispatch(findMovies(searchword));
    if(movies.length === 0) {
      setMessage('No movie found')
    }
  }

  const generateLinks = async(link) => {
    const fomattedLink = link.replace(/ /g,"%20");
    dispatch(listLinks(fomattedLink));
    
  }

  return (
    <div className="App" >
    <div className="container mt-4"> 
      <div className="row d-flex justify-content-center"> 
        <div className="col-md-9 p-5 "> 
          <div className="card p-5 mt-3"> 
          <h3 className="heading mt-5 text-center">SCRAPPY</h3> 
            <h3 className="heading mt-5 text-center">Ads-free movie download <i className="far fa-grin-stars"></i></h3> 
            <div className="d-flex justify-content-center px-5"> 
              <div className="search"> 
                <input className="search-input" placeholder="search movie title..." type="text" value={searchword} onChange={(e) => setsearchword(e.target.value)}/>
                <button className="search-icon" onClick={(e) => searchMovie(e)}><i className="fa fa-search"></i> </button>
              </div> 
            </div> 
          </div>
        </div> 
      </div>
      <br/>
      {movies.length !== 0 && !loading &&<h5 >Search Result</h5>}
      {message && !loading && movies.length === 0 && <Message variant='danger'>{message}</Message>}
      {loading ?<Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <div className="container portfolio__container">
          {movies.map((movie) => (
            <article className="portfolio__item" key={movies.indexOf(movie)}>
              <div className="portfolio__item-image">
                <img src={movie[2]} alt={movie[0][1]} />
              </div>
              <div className="portfolio__item-content">
                <i className='font-weight-bold'>{movie[0][1]}</i>
                <p>{movie[0][7].slice(0, 85)}...</p>
                <button data-toggle="modal" data-target="#exampleModal" className='btns font-weight-bold' onClick={() => generateLinks(movie[1])}>Generate Links</button>
              </div>
            </article>
          ))}
        </div>)
      }
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Download links</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {linksloading ?<Loader /> : linkerror ? <Message variant='danger'>{linkerror}</Message> : (
              <div className="modal-body ">
                {links.map((link) => (
                <div  key={links.indexOf(link)}><a href={link} className="link" > <div><i className="far fa-hand-point-right"></i> Link </div></a></div>
                ))}
              </div>)}
            <div className="modal-footer text-center">
              Please wait, download starts in a few seconds...
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div> 
  );
}

export default App;
