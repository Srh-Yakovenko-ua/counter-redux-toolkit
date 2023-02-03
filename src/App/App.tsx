import React from 'react'
import './App.css'
import { MainDisplayContent } from '../features/Display/MainDisplayContent'
import { SettingContent } from '../features/Setting/SettingContent'
import { MainContentWrapper } from './App.styled'

function App() {

  return (
    <MainContentWrapper>
      <MainDisplayContent />
      <SettingContent />
    </MainContentWrapper>
  )
}

export default App
