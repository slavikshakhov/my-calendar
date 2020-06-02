import React from 'react'
import Calendar from './components/Calendar/Calendar'
import AppStyles from './App.module.css'

const App = () => {
  return (
    <div className={AppStyles.container}>
      <Calendar />
    </div>
  )
}

export default App
