import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { subCustomNumber } from '../store/features/counter'

export class Profile extends PureComponent {

    subNumber(numb) {
        this.props.subVvNumber(numb)
    }
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>Page Profile: { counter }</h2>
        <button onClick={e => this.subNumber(10)}>-10</button>
        <button onClick={e => this.subNumber(20)}>-20</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter
  })
  
const mapDispatchToProps = (dispatch) => ({
    addCustomNumber(numb) {

    },
    subVvNumber(numb) {
        dispatch(subCustomNumber(numb))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
// export default Profile