import React from 'react'
import axios from 'axios'
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css"

class AddPeople extends React.Component {


    state = {
        currentValue: [1, 100],
        min: 1,
        max: 100, 
        currentAmount:1
    }

    changeValue = e => {
        this.setState({ currentValue: e.target.value })
    }
    changeAmount = e => {
        this.setState({ currentAmount: e.target.value })
    }

    addPeople = async () => {
        await axios.post('/api/people/addpeople',
            { ageRange: this.state.currentValue, amount: this.state.currentAmount })
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='col-md-8 col-md-offset-2' style={{ marginTop: 15, textAlign:'center' }}>
                <h1>Choose Amount of People</h1>
                <ReactBootstrapSlider
                    value={this.state.currentAmount}
                    slideStop={this.changeAmount}
                    max={this.state.max}
                    min={this.state.min}
                />
                <h1>Choose Age Range</h1>
                <ReactBootstrapSlider
                    value={this.state.currentValue}
                    slideStop={this.changeValue}
                    max={this.state.max}
                    min={this.state.min} />

                <button className='btn btn-success btn-block'
                    onClick={this.addPeople} style={{ marginTop: 15 }}>
                    Add People</button>
            </div>
        )
    }
}

export default AddPeople