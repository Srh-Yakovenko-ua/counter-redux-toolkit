import styled from 'styled-components'

export const MainContentWrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;

  gap: 30px;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

