import React from 'react'
export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log()
        return (
            <div>
                1111111Home
                { this.props.children }
            </div>
        )
    }
}