import React from 'react'
import { UniversalButton } from '../../common/UniversalButton'
import { SetButton } from './SettingContent.styled'

interface SetContentProps {
  disabled: boolean
  handlerSetCurrentlySettings: () => void
}

export const SetButtonContent: React.FC<SetContentProps> = ({
  handlerSetCurrentlySettings,
  disabled,
}) => {
  return (
    <SetButton>
      <UniversalButton
        disabled={disabled}
        onClick={handlerSetCurrentlySettings}
      >
        SET
      </UniversalButton>
    </SetButton>
  )
}

