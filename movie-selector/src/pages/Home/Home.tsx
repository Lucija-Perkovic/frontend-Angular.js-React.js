import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { requestSearchMovie, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS } from '../../app/store/actions/movieActions'
import { type AppState } from '../../app/store/reducers'
import { type Movie } from '../../app/models/movies'
import MovieCard from '../../components/MovieCard'
import { checkIfLoading } from '../../app/store/reducers/uiReducer'
import Spinner from '../../components/Spinner'
import { Div, Grid, Header, Input, NavBar } from './styles'

function Home (): JSX.Element {
  const [searchParam, setSearchParam] = useState<string>()
  const [showHelpText, setShowHelpText] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchParam != null && searchParam?.length > 0) {
      dispatch(requestSearchMovie(searchParam))
      setShowHelpText(false)
    } else setShowHelpText(true)
  }, [searchParam])

  const movies: Movie[] = useSelector((state: AppState) => state.movies.movies)
  const isLoading: boolean = useSelector((state: AppState) => checkIfLoading(state, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS))

  return (
      <>
        <NavBar>
          <Header>Movie Searcher</Header>
          <form>
            <Input
                type='search'
                placeholder="Search movies..."
                onChange={(e: React.FormEvent<HTMLInputElement>) => { setSearchParam(e.currentTarget.value) }}
                value={searchParam}
            />
          </form>
        </NavBar>
        <Div>
            {
                isLoading
                  ? <Spinner/>
                  : !showHelpText
                      ? <Grid>
                            {
                                movies.map((movie: Movie, index: number) => (
                                    <MovieCard movie={movie} key={index} />
                                ))
                            }
                        </Grid>
                      : <span>Try searching for a movie..</span>
            }
        </Div>
      </>
  )
}

export default Home
