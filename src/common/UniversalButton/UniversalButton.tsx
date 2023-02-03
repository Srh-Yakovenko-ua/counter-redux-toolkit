import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { Button } from './UniversalButton.styled'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type SuperButtonPropsType = DefaultButtonPropsType & {}



const UniversalButton: FC<SuperButtonPropsType> = ({
  className,
  ...restProps
}) => {
  return <Button type="button" {...restProps} />
}

export { UniversalButton }


