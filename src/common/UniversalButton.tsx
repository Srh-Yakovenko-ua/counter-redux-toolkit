import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styled from 'styled-components'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type SuperButtonPropsType = DefaultButtonPropsType & {}

const Button: any = styled.button`
  background-color: deepskyblue;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  margin-left: 5px;
  border: none;
  width: 75px;
`

const UniversalButton: FC<SuperButtonPropsType> = ({
  className,
  ...restProps
}) => {
  return <Button type="button" {...restProps} />
}

export { UniversalButton }


