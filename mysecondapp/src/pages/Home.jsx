import React, { PureComponent } from 'react'
import axios from "axios"
import { connect } from "react-redux"
import { addCustomNumber } from '../store/features/counter'

import { fetchHomeMultidataAction } from "../store/features/home"
// import store from '../store'
// import { changeBanners, changeRecommends } from '../store/features/home'

export class Home extends PureComponent {

    //不在home里发送网路请求，因为请求下来后还需要调用dispatch方法发送到store里，
    //提供的有对应的库createAsyncThunk
    componentDidMount() {
      this.props.beginFetchHomePageData()
    //     axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //         const banners = res.data.data.banner.list
    //         const recommends = res.data.data.recommend.list
    //         console.log("--banners:"+ banners);
    //         console.log("---recommends:" + recommends)

    //         store.dispatch(changeBanners(banners))
    //         store.dispatch(changeRecommends(recommends))
    //     })
    }

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
    },
    beginFetchHomePageData() {
      dispatch(fetchHomeMultidataAction())
      
    }
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home