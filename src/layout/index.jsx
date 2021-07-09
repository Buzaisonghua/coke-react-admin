import React from 'react'
import { Link, Switch, Route,  } from "react-router-dom"
export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '123'
        }
    }
    render() {
        console.log(this.props)
        const { userName } = this.state
        return (
            <div>
                <h1>Layout {userName}</h1>
                <ul>
                    <li><Link to="/home/chart">Home</Link></li>
                    <li><Link to="/home/user">User</Link></li>
                </ul>
                <div className="children-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}