import React from 'react'
import DayStyles from './Day.module.css'

const Day = ({
  selectedYear,
  selectedDate,
  date,
  selectedMonth,
  idOfDate,
  selectDate,
}) => {
  const day = parseInt(date)
  const month = parseInt(selectedMonth)
  const id = parseInt(idOfDate)

  return (
    <button
      className={`${DayStyles.container} ${
        selectedDate === date && DayStyles.selectedDate
      }`}
      onClick={() => selectDate(selectedYear, selectedMonth, date)}
    >
      <div className={DayStyles.cell}>
        <p className={DayStyles.date}>{day}</p>
        <div className="">content</div>
        <div className="">content</div>
      </div>
    </button>
  )
}

export default Day
