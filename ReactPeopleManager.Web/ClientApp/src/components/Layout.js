import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>

                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={`/`}>People List</Link></li>
                                <li><Link to={`/addperson`}>Add Person</Link></li>
                                <li><Link to={`/addpeople`}>Add People</Link></li>
                            </ul>
                        </div>

                    </div>
                </nav>
                <div className="container" style={{ marginTop: 55 }}>
                    {this.props.children}
                </div>

            </div>

        );
    }
}