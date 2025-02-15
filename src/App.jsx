import { useState, useEffect } from 'react'
import Search from './components/Search'
import MovieCard from './components/MovieCard'
import Spinner from './components/Spinner'
import { useDebounce } from 'react-use'
import { getTrendingMovies, updateSearchCount } from './appwrite'

const BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${API_KEY}`,
  },
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [devouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [trendingmovies, setTrendingMovies] = useState([])

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const endpoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.desc`

      const res = await fetch(endpoint, API_OPTIONS)

      if (!res.ok) {
        throw new Error('Error fetching movies')
      }

      const data = await res.json()
      console.log(data)
      if (data.response === 'False') {
        setErrorMessage(
          data.Error || 'Error fetching movies. Please try again later.'
        )
        setMovies([])
        return
      }
      setMovies(data.results || [])
      setErrorMessage('')
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0])
      }
    } catch (error) {
      console.error(`Error fetching moveis ${error}`)
      setErrorMessage('Error fetching movies. Please try again later.')
    } finally {
      setIsLoading(false)
      setErrorMessage('')
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const trendingMovies = await getTrendingMovies()
      setTrendingMovies(trendingMovies)
    } catch (error) {
      console.error(`Error loading trending movies ${error}`)
    }
  }

  useEffect(() => {
    fetchMovies(devouncedSearchTerm)
  }, [devouncedSearchTerm])

  useEffect(() => {
    loadTrendingMovies()
  }, [])

  return (
    <main className="overflow-hidden">
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Banner" />
          <h1 className="mt-10">
            Find <span className="text-gradient">Movies</span> You'll Enjoy.
          </h1>
        </header>

        {trendingmovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingmovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
