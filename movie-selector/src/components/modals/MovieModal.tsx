import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { type AppState } from '../../app/store/reducers'
interface IModalProps {
  show: boolean
}
const Modal = styled.div.attrs<IModalProps>(({ show }) => ({
  style: {
    display: `${show ? 'block' : 'none'}`
  }
}))<IModalProps>`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const Container = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`
function MovieModal (): JSX.Element {
  const showModal = useSelector((state: AppState) => state.modal.showModal)
  const movie = useSelector((state: AppState) => state.modal.movie)

  useEffect(() => {
    console.log(showModal)
    console.log(movie)
  }, [showModal, movie])
  return (
        <Modal show={showModal}>
          <Container>
            {movie.id}
          </Container>
        </Modal>
  )
}

export default MovieModal
