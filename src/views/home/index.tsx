import React from 'react'
import store from '@/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '@/store'
import { addCount } from '@/store/modules/token'
class Home extends React.Component{
    constructor(props:any) {
        super(props)
        this.state = {
            ...store.getState()
        }
    }
    clickValue() {
        // const { token } = actions
        // token.addCount()
    }
    render() {
        
        console.log('home', this.props )
        // const state = th/is.store.getState();
        return (
            <div>
                <p onClick={() => this.props.addCount() }>click</p>
                Home
                <p>{ this.props.count }</p>
                { this.props.children }
            </div>
        )
    }
}
const mapStateToProps = ({ token }:any) => {
    return {
        count: token.count
    }
}
const mapDispatchToProps = (dispatch:any) =>
  bindActionCreators(
    {
      addCount
    },
    dispatch
  )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

