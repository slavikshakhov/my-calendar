import React, { useState, useEffect } from 'react'
import CalendarStyles from './Calendar.module.css'
import Day from '../Day/Day'

const Calendar = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()

  const [selectedDate, setSelectedDate] = useState(date.getDate())
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(0)
  const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(0)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  console.log(
    selectedMonth,
    selectedYear,
    firstDayOfWeek,
    numberOfDaysInMonth,
    selectedDate,
  )
  useEffect(() => {
    selectMonth(selectedMonth, selectedYear)
  }, [selectedMonth, selectedYear])

  const selectMonth = (month, year) => {
    setNumberOfDaysInMonth(32 - new Date(year, month, 32).getDate())
    setFirstDayOfWeek(new Date(year, month).getDay())
  }
  const setNextMonth = () => {
    setSelectedDate('')
    setSelectedYear(selectedMonth === 11 ? selectedYear + 1 : selectedYear)
    setSelectedMonth(selectedMonth === 11 ? 0 : selectedMonth + 1)
  }
  const setPreviousMonth = () => {
    setSelectedDate('')
    setSelectedYear(selectedMonth === 0 ? selectedYear - 1 : selectedYear)
    setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1)
  }
  const selectDate = (year, month, date) => {
    setSelectedDate(new Date(year, month, date).getDate())
  }
  const render = () => {
    let cells = []
    let index = firstDayOfWeek
    let x = 1
    for (let i = 0; i < 40; i++) {
      if (i < index) {
        cells.push(<div key={i} className={CalendarStyles.cell}></div>)
      }
      if (i >= index && i < numberOfDaysInMonth + index) {
        cells.push(
          <div key={i} className={CalendarStyles.cell}>
            <Day
              selectedYear={selectedYear}
              date={x}
              selectedMonth={selectedMonth}
              selectedDate={selectedDate}
              idOfDate={`${selectedYear}${selectedMonth}${x}`}
              selectDate={selectDate}
            />
          </div>,
        )
        x += 1
      }
    }
    return cells
  }
  return (
    <div className={CalendarStyles.container}>
      <div className={CalendarStyles.btnContainer}>
        <button
          className={CalendarStyles.previous}
          onClick={() => setPreviousMonth()}
        ></button>
      </div>

      <div>
        <p className={CalendarStyles.header}>
          {months[selectedMonth]}, {selectedYear}
        </p>
        <div className={CalendarStyles.cells}>{render()}</div>
      </div>
      <div className={CalendarStyles.btnContainer}>
        <button
          className={CalendarStyles.next}
          onClick={() => setNextMonth()}
        ></button>
      </div>
    </div>
  )
}

export default Calendar
