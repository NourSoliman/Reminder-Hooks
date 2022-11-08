import React, { useState } from 'react'
import { addReminder, removeReminder, removeAll } from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'

const App = (props) => {
    const [text, setText] = useState(``);
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
                            <li key={reminder.id}>
                                <div>{reminder.text}</div>
                                <div>{reminder.desc}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                {/* <div>{reminder.date}</div> */}
                                <div className='btn btn-danger' onClick={() => props.removeReminder(reminder.id)} > X</div>
                            </li>
                        )
                    }) : <h2>There's no tasks to show!</h2>)
                }
            </ul>
        )
    }
    console.log(props);
    const handleClick = () => {
        props.addReminder(text, desc, date)
        setText(``)
        setDesc(``)
        setDate(``)
    }
    return (
        <div>
            <input type="text"
                value={text}
                placeholder='Enter ur task name...'
                className='form-control'
                onChange={(e) => setText(e.target.value)}>
            </input>
            <input type="text"
                value={desc}
                placeholder='Please write a description of your task.... '
                className='form-control'
                onChange={(e) => setDesc(e.target.value)}>
            </input>
            <input
                value={date}
                type="datetime-local"
                className='form-control'
                onChange={(e) => setDate(e.target.value)}
            ></input>
            <button className='btn btn-primary'
                onClick={handleClick}>
                Add A task</button>
            {render_Reminder()}
            <button className='btn btn-danger'
                onClick={() => props.removeAll()}>
                Remove all Tasks</button>
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