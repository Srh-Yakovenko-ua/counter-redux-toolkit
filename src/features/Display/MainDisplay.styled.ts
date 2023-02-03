import styled from 'styled-components'

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 40px 0;
  border: 1px solid #5490cb;
  border-radius: 5px;
`
export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 10px;
  padding: 15px 0;
  border: 1px solid #5490cb;
  border-radius: 5px;
`

export const Display = styled.span<{ display: number, max: number }>`
  font-size: 24px;
  color: ${({ display, max }) => display === max ? 'red' : 'black'}
`

export const TextError = styled.span<{ errorText: string }>`
  font-size: 24px;
  color: ${({ errorText }) =>
    errorText === 'Incorrect value' ? 'red' : 'black'};
`

export const DisplayContentWrapper = styled.div`
  width: 350px;
  border: 2px solid #5490cb;
  border-radius: 10px;
`