import React, { Component } from 'react'
import axios from 'axios'
import { PieChart } from "react-minimal-pie-chart";

export class Home extends Component {
    displayName = Home.name

    state = {
        people: [],
        showChart: true,
        isLoading: true
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/people/getpeople')
        this.setState({ people: data, isLoading: false })
    }

    getCount = maxAge => {
        const minAge = maxAge - 9
        const count = this.state.people.filter(p => (p.age >= minAge && p.age <= maxAge)).length
        return count
    }
    toggleChart = () => {
        const showChart = !this.state.showChart
        this.setState({ showChart })
    }

    render() {
        return (
            <div>
                {!this.state.isLoading && < div className='col-md-8 col-md-offset-2' >
                    <button className='btn btn-primary' onClick={this.toggleChart}>Toggle Chart</button>
                    {
                        !!this.state.showChart && <PieChart
                            style={{ height: 200 }}
                            data={[
                                { title: "1-10", value: this.getCount(10), color: "coral" },
                                { title: "11-20", value: this.getCount(20), color: "crimson" },
                                { title: "21-30", value: this.getCount(30), color: "darkorange" },
                                { title: "21-30", value: this.getCount(40), color: "gold " },
                                { title: "31-40", value: this.getCount(40), color: "greenyellow" },
                                { title: "41-50", value: this.getCount(50), color: "lawngreen" },
                                { title: "51-60", value: this.getCount(60), color: "forestgreen" },
                                { title: "61-70", value: this.getCount(70), color: "lightskyblue" },
                                { title: "71-80", value: this.getCount(80), color: "mediumslateblue" },
                                { title: "81-90", value: this.getCount(90), color: "magenta" },
                                { title: "91-100", value: this.getCount(100), color: "mediumorchid" },
                                { title: "101-110", value: this.getCount(110), color: "palevioletred" },
                                { title: "111-120", value: this.getCount(120), color: "peachpuff" },

                            ]}
                        />
                    }
                    <table className="table table-bordered table-striped table-hover" style={{ marginTop: 15 }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((person) =>
                                <tr key={person.id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.age}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div >
                }
            </div>
        );
    }
}
