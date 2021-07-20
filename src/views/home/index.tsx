import React from 'react'
import store from '@/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '@/store'
interface propsInterface {
    count: any,
    addCount: any
}
class Home extends React.Component<Home>{
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
        const { addCount, count } = this.props
        return (
            <div>
                <p onClick={() => addCount() }>click</p>
                Home
                <p>{ count }</p>
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
      addCount: actions.token.addCount
    },
    dispatch
  )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

