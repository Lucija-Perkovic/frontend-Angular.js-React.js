import React, { useEffect, useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { requestSearchMovie } from '../app/store/actions/movieActions'
import { type AppState } from '../app/store/reducers'
import { type Movie } from '../app/models/movies'
import MovieCard from '../components/MovieCard'

const Input = styled.input`
  padding: 2em;
  margin: 2em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
;
`

const NavBar = styled.nav`
  background: #3a3a55;
  padding: 0.25rem;
`

const Main = styled.main`
  background: #1f2128;
  color: white;
  padding: 0.25rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  align-items:center;
  margin: 1rem;
`
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
  const totalNrOfPages = useSelector((state: AppState) => state.movies.totalNrOfPages)
  const currentPage = useSelector((state: AppState) => state.movies.currentPage)

  useEffect(() => {
    if (movies != null) {
      console.log(movies)
    }
  }, [movies])
  return (
      <>
        <NavBar>
          <form>
            <Input
                placeholder="Search movie..."
                onChange={(e: React.FormEvent<HTMLInputElement>) => { setSearchParam(e.currentTarget.value) }}
            />
          </form>
        </NavBar>

        {
          !showHelpText
            ? <>
                <Main>
                  TOTAL: {totalNrOfPages}
                  <br/>
                  CURRENT: {currentPage}
                </Main>
                <Grid>
                  {
                    movies.map((movie: Movie, index: number) => (
                        <MovieCard movie={movie} key={index} />
                    ))
                  }
                </Grid>
              </>
            : <div>Try searching for a movie..</div>
        }
      </>
  )
}

export default Home
