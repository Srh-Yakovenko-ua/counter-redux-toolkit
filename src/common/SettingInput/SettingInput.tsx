import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
} from 'react'
import { Input } from './SettingInput.styled'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeValue?: (arg: number) => void
}

const SettingInput: FC<SuperInputTextPropsType> = ({
  onChangeValue,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(+parseInt(e.currentTarget.value))
  }

  return <Input onChange={onChangeCallback} {...restProps} />
}

export { SettingInput }




