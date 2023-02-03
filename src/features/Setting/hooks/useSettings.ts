import { useAppDispatch, useAppSelector } from '../../../store'
import {
  errorCheckingAndSetting,
  errorSelector,
  maxSettingValueSelector,
  minSettingValueSelector,
  setCurrentlySettings,
  settingMaxValue,
  settingMinValue,
} from '../../counter-slice'
import { useEffect } from 'react'

export const useSettings = () => {
  const dispatch = useAppDispatch()
  const maxSettingValue = useAppSelector(maxSettingValueSelector)
  const minSettingValue = useAppSelector(minSettingValueSelector)
  const error = useAppSelector(errorSelector)

  const onChangeSettingMaxValue = (valueMax: number) => {
    dispatch(settingMaxValue(valueMax))
  }
  const onChangeSettingMinValue = (valueMin: number) => {
    dispatch(settingMinValue(valueMin))
  }
  const handlerSetCurrentlySettings = () => {
    dispatch(setCurrentlySettings())
  }

  const disabled =
    !error || error === 'Incorrect value' || maxSettingValue === minSettingValue

  useEffect(() => {
    dispatch(errorCheckingAndSetting())
  }, [dispatch, maxSettingValue, minSettingValue])

  return {
    maxSettingValue,
    minSettingValue,
    error,
    onChangeSettingMaxValue,
    onChangeSettingMinValue,
    handlerSetCurrentlySettings,
    disabled,
  }
}