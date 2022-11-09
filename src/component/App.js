import React, { useState } from 'react'
import { addReminder, removeReminder, removeAll } from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import './App.css'
import logo from '../images/logo.png.png'

const App = (props) => {
    const [name, setName] = useState(``);
    const [desc, setDesc] = useState(``);
    const [date, setDate] = useState(``);
    const render_Reminder = () => {
        const { reminders } = props;
        const length = reminders.length
        console.log(`from reminders `, reminders);
        return (
            <ul>
                {
                    (length ? reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="position-relative">
                                <h4>{reminder.name}</h4>
                                <div className='desc'>{reminder.desc}</div>
                                <div className='date'>{moment(new Date(reminder.date)).fromNow()}</div>
                                {/* <div>{reminder.date}</div> */}
                                <div className='btn btn-danger x-button ' onClick={() => props.removeReminder(reminder.id)} > &#10005;</div>
                                <input className="" type="checkbox" />
                                <hr></hr>
                            </li>
                        )
                    }) : <h2 className='text-light'>There's <span className='no'>No</span> tasks to <span className='show'>show!</span></h2>)
                }
            </ul>
        )
    }
    console.log(props);
    const handleClick = () => {
        props.addReminder(name, desc, date)
        setName(``)
        setDesc(``)
        setDate(``)
    }
    return (
        <div className='container position-relative'>
            <img src={logo} alt='logo' className='logo'></img>
            <form className='fw-bold form '>
                <label>Name</label>
                <input type="text"
                    value={name}
                    placeholder='Enter ur task name...'
                    className='w-100 mb-2'
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <label>Description</label>
                <input type="text"
                    value={desc}
                    placeholder='Please write a description of your task.... '
                    className='w-100 mb-2'
                    onChange={(e) => setDesc(e.target.value)}>
                </input>
                <label>Date</label>
                <input
                    value={date}
                    type="datetime-local"
                    className='w-100 mb-2'
                    onChange={(e) => setDate(e.target.value)}
                ></input>
                <button className='btn btn-primary'
                    type='button'
                    onClick={handleClick}>
                    Add A task</button>
                {render_Reminder()}
                <button className='btn btn-danger'
                    onClick={() => props.removeAll()}>
                    Remove all Tasks</button>
            </form>
        </div>

    )

}

// function mapDispatchToProps(dispatch) {
//     addReminder = () => dispatch(addReminder())
// }
// function mapStateToProps(state) {
//     return{ reminders : state }

// }
export default connect(state => {
    return { reminders: state }

}, { addReminder, removeReminder, removeAll })(App)