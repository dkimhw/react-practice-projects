import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(function() {
    const controller = new AbortController();

    async function fetchMovies() {
      try{
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`,
          { signal: controller.signal }
        )

        if(!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === 'False') {
          throw new Error('Movies not found.')
        }

        setMovies(data.Search);
        setError("");
      } catch(err) {
        console.error(err);

        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function() {
      controller.abort();
    }
  }, [query]);

  return { movies, isLoading, error }
}
