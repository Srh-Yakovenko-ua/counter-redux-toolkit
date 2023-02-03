import { useAppDispatch, useAppSelector } from '../../../store'
import {
  displayCounterSelector,
  errorSelector,
  maxSettingValueSelector, minSettingValueSelector,
  setDisplayCounter
} from '../../counter-slice'

export const useDisplay = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(errorSelector)
  const minSetting = useAppSelector(minSettingValueSelector)
  const maxSettingValue = useAppSelector(maxSettingValueSelector)
  const displayCounter = useAppSelector(displayCounterSelector)

  const onClickDEC = () => dispatch(setDisplayCounter(displayCounter - 1))
  const onClickINC = () => dispatch(setDisplayCounter(displayCounter + 1))

  return {
    error,
    maxSettingValue,
    displayCounter,
    onClickDEC,
    onClickINC,
    minSetting,
  }
}