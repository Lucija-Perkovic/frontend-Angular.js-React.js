import { type Movie } from '../app/models/movies'
import React, { useEffect, useState } from 'react'
import { getImageUrl } from '../services/ImageService'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { requestOpenModal } from '../app/store/actions/modalActions'
import MovieModal from './modals/MovieModal'
interface IMovieProp {
  movie: Movie
}

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  align-self: center;
  justify-self: center;
  transition: transform .2s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  margin: 1em;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(221, 221, 221, 1);
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 190px;
  border: none;
`
function MovieCard ({ movie }: IMovieProp): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>()
  const [isValidUrl, setIsValidUrl] = useState<boolean>(Boolean(movie.backdrop_path))
  const dispatch = useDispatch()
  const openModal = (movie: Movie): any => {
    dispatch(requestOpenModal(movie))
  }
  useEffect(() => {
    setImageUrl(getImageUrl(movie.backdrop_path))
  }, [movie.backdrop_path])
  return (
      <>
        <Wrapper>
          {isValidUrl
            ? (
                  <Img
                      src={imageUrl}
                      alt={movie.original_title}
                      onError={() => { setIsValidUrl(false) }}
                      onClick={() => openModal(movie)}
                  />
              )
            : (
                  <Button onClick={() => openModal(movie)}>{movie.original_title}</Button>
              )}
        </Wrapper>
        <MovieModal/>
      </>
  )
}

export default MovieCard
