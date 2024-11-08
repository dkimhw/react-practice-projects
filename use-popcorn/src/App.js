import { useState, useEffect } from "react";
import { StarRating } from './StarRating.js';

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Search = ({ query, onChange }) => {

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  )
}

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies ? movies?.length : 0}</strong> results
    </p>
  )
}

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li key={movie.imdbID} onClick={() => {onSelectMovie(movie.imdbID)}}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

const MovieList = ({ movies, handleSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => <Movie movie={movie} key={movie.imdbID} onSelectMovie={handleSelectMovie}/>)}
    </ul>
  )
}

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}

export const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  )
}

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        {avgUserRating ?
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p> : ""
        }
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}

const WatchedMoviesList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <h3>{movie.title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            {movie.userRating ?
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p> : ""
            }
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

const Main = ({ children }) => {
  return (
    <>
      <main className="main">
        {children}
      </main>
    </>
  );
}

const Loader = () => {
  return <p className="loader">Loading...</p>;
}

const ErrorMessage = ({message}) => {
  // return <p className="error">{message}</p>;
  return (
    <p className="error">🛑 {message ? message.message : 'Something went wrong.'}</p>
  )
}

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(null);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      // userRating: Number(userRating),
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    }

    const exists = watched.findIndex(el => el.imdbID === selectedId);
    console.log(exists, watched)
    if (exists === -1) {
      onAddWatched(newWatchedMovie);
      onCloseMovie();
    } else {
      alert("That movie already exists on your watched list.")
    }
  }

  useEffect(function() {
    async function getMovieDetails() {
      const res = await fetch (
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
    }
    getMovieDetails();
  }, [selectedId])

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={`Movie poster of ${movie}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>{released} &bull; {runtime}</p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDB rating
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <StarRating maxRating={10} size={24} onSetRating={setUserRating}/>
          {userRating > 0 && (<button className="btn-add" onClick={handleAdd}>+ Add to list</button>)}
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  )
}

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  function handleSelectMovie(id) {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }

  useEffect(function() {
    async function fetchMovies() {
      try{
        setError("");
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`)

        if(!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === 'False') {
          throw new Error('Movies not found.')
        }

        setMovies(data.Search);
      } catch(err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 2) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <NavBar>
        <Search onChange={setQuery} query={query} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          { isLoading && !error && <Loader /> }
          { !isLoading && !error && <MovieList movies={movies} handleSelectMovie={handleSelectMovie} /> }
          { error && <ErrorMessage message={error}/> }

        </Box>
        <Box>
          {
            selectedId ?
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            /> :
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        </Box>
      </Main>
    </>
  )
}
