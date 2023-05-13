import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { subCustomNumber } from '../store/features/counter'

export class Profile extends PureComponent {

    subNumber(numb) {
        this.props.subVvNumber(numb)
    }
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h2>Page Profile: { counter }</h2>
        <button onClick={e => this.subNumber(10)}>-10</button>
        <button onClick={e => this.subNumber(20)}>-20</button>

        <div className="banner">
            <h2>萝卜兔不吃草，展示</h2>
            <ul>
                {
                    banners.map((item, index) => {
                        return <li key={index}>{ item.title }</li>
                    })
                }
            </ul>
        </div>
        <div className="recommend">
            <h2>推荐书籍展示</h2>
            <ul>
                {
                    recommends.map((item, index) => {
                        return <li key={index}>{ item.title }</li>
                    })
                }
            </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter,
    banners: state.home.banners,
    recommends: state.home.recommends
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