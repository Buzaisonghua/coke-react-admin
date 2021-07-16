import React from 'react'
// import PropTypes from 'prop-types'
import store from '@/store'
class Home extends React.Component{
    constructor(props:any) {
        super(props)
        this.state = {
            ...store.getState()
        }
    }
    render() {
        console.log('home', this.state)
        // const state = th/is.store.getState();
        return (
            <div>
                Home
                {/* {{ state }} */}
                { this.props.children }
            </div>
        )
    }
}
export default Home

