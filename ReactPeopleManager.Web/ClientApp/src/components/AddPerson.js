import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'

class AddPerson extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    getMinDate = () => {
        var currentTime = new Date()
        var year = (currentTime.getFullYear() - 120)
        currentTime.setFullYear(year);
        return currentTime
    }
    addPerson = async () => {
        const date = this.state.date.toLocaleDateString()
        await axios.post('/api/people/addperson', { date })
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='col-md-8 col-md-offset-2' style={{ marginTop: 15, textAlign: 'center' }}>
                <h1 style={{ textAlign: "center" }}>Choose a Birth Date</h1>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    maxDate={new Date()}
                    minDate={this.getMinDate()}
                />
                <button className='btn btn-success btn-block'
                    onClick={this.addPerson} style={{ marginTop: 15 }}>
                    Add Person with Date Chosen</button>
            </div>
        )
    }
}

export default AddPerson