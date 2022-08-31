import React from 'react'
import Todo from '../assets/icon-todo.svg'
import Calendar from '../assets/icon-calendar.svg'
import Reminder from '../assets/icon-reminders.svg'
import Planning from '../assets/icon-planning.svg'


function Dropdown() {
 
  return (
    <ul className="dropdown">
    <a href='#' className='menu-item'><img src={Todo}/>Todo List</a>
    <a href='#' className='menu-item'><img src={Calendar}/>Calendar</a>
    <a href='#' className='menu-item'><img src={Reminder}/>Reminders</a>
    <a href='#' className='menu-item'><img src={Planning}/>Planning</a>
    </ul>
  )
  
}

export default Dropdown