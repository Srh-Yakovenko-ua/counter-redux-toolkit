import React from 'react'
import { UniversalButton } from '../../common/UniversalButton'
import {
  ButtonContent,
  Display,
  TextContent,
  TextError,
} from './MainDisplay.styled'

interface MainDisplayType {
  displayCounter: number
  maxSettingValue: number
  minSettingValue: number
  error: string
  onClickINC: () => void
  onClickDEC: () => void
}

const MainDisplay: React.FC<MainDisplayType> = React.memo(
  ({
    displayCounter,
    error,
    maxSettingValue,
    onClickINC,
    onClickDEC,
    minSettingValue,
  }) => {
    const disabledINC = displayCounter === maxSettingValue || !!error
    const disabledDEC = displayCounter === minSettingValue || !!error
    return (
      <>
        <TextContent>
          {!error && (
            <Display display={displayCounter} max={maxSettingValue}>
              {displayCounter}
            </Display>
          )}
          {error && <TextError errorText={error}>{error}</TextError>}
        </TextContent>

        <ButtonContent>
          <UniversalButton onClick={onClickINC} disabled={disabledINC}>
            INC
          </UniversalButton>
          <UniversalButton onClick={onClickDEC} disabled={disabledDEC}>
            DEC
          </UniversalButton>
        </ButtonContent>
      </>
    )
  }
)

export { MainDisplay }