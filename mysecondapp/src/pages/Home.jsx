import React, { PureComponent } from 'react'

import { connect } from "react-redux"
import { addCustomNumber } from '../store/features/counter'

export class Home extends PureComponent {
    jiaNumb(numbe) {
        this.props.customerJia(numbe)
    }
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>Home Counter: { counter }</h2>
        <button onClick={e => this.jiaNumb(3)}>+3</button>
        <button onClick={e => this.jiaNumb(5)}>+5</button>
        <button onClick={e => this.jiaNumb(7)}>+7</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter
  })

const mapDispatchToProps = (dispatch) => ({
    customerJia(numb) {
        dispatch(addCustomNumber(numb))
    }
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home