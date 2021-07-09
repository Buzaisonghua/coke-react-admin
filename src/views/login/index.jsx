import React from 'react'
import {Link} from 'react-router-dom'
export default class Login extends React.Component{
    clickList() {
         console.log('111111111')   
    }
    render() {
        
        return (
            <div>
                <Link to="/home">11111111Login</Link>
            </div>
        )
    }
}