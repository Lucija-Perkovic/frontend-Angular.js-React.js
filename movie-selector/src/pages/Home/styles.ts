import styled from 'styled-components'

export const Input = styled.input`
  width: 480px;
  height: 49px;
  border: 3px solid black;
  border-radius: 25px;
  padding: 1px 48px 0 48px;
  font-size: 22px;
  outline: 0;
;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0, 0.8);
  padding: 1rem;
  height: 8vh;
  margin-bottom: 2em;
`

export const Header = styled.header`
  font-size: 46px;
  color: snow;
  margin-left: 1em;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  align-items:center;
  margin: 1em;
`

export const Div = styled.text`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 92vh;
`
