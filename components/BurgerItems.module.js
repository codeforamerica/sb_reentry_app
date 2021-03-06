import styled from 'styled-components'
export const StyledBurgerItems = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #13395e;
  height: auto;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 10rem;
  left: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  @media (max-width: 700) {
    width: 100%;
  }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 700) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: white;
    }
  }
`
