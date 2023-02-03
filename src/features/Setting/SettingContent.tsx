import React from 'react'
import { SettingInput } from '../../common/SettingInput/SettingInput'
import { SetButtonContent } from './SetButtonContent'
import {
  SettingMaxValue,
  SettingMinValue,
  SettingsContentWrapper,
  SettingsWrapper,
  Value,
} from './SettingContent.styled'
import { useSettings } from './hooks/useSettings'

export const SettingContent = () => {
  const {
    minSettingValue,
    maxSettingValue,
    onChangeSettingMaxValue,
    onChangeSettingMinValue,
    handlerSetCurrentlySettings,
    disabled,
  } = useSettings()

  return (
    <SettingsContentWrapper>
      <SettingsWrapper>
        <SettingMaxValue>
          <Value>max value:{' '}</Value>
          <SettingInput
            className={maxSettingValue < minSettingValue ? 'error' : ''}
            value={maxSettingValue}
            onChangeValue={onChangeSettingMaxValue}
          />
        </SettingMaxValue>
        <SettingMinValue>
          <Value>start value:{' '}</Value>
          <SettingInput
            className={minSettingValue < 0 ? 'error' : ''}
            value={minSettingValue}
            onChangeValue={onChangeSettingMinValue}
          />
        </SettingMinValue>
      </SettingsWrapper>

      <SetButtonContent
        handlerSetCurrentlySettings={handlerSetCurrentlySettings}
        disabled={disabled}
      />
    </SettingsContentWrapper>
  )
}

