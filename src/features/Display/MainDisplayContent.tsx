import React from 'react'
import { MainDisplay } from './mainDisplay'
import { useDisplay } from './hooks/useDisplay'
import { DisplayContentWrapper } from './MainDisplay.styled'

export const MainDisplayContent = () => {
  const { displayCounter, onClickDEC, onClickINC, maxSettingValue, error , minSetting } =
    useDisplay()
  return (
    <DisplayContentWrapper>
      <MainDisplay
        onClickDEC={onClickDEC}
        onClickINC={onClickINC}
        error={error}
        maxSettingValue={maxSettingValue}
        minSettingValue={minSetting}
        displayCounter={displayCounter}
      />
    </DisplayContentWrapper>
  )
}
