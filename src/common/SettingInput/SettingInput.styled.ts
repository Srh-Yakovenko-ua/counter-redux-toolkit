import styled from 'styled-components'

export const Input: any = styled.input.attrs({
  type: 'number',
})`
  height: 30px;
  width: 150px;
  border: 2px solid #5490cb;
  border-radius: 7px;
  padding-left: 5px;

  &.error {
    background: red;
  }
`
