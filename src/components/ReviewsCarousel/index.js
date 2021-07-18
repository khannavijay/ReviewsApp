// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    i: 0,
  }

  previusReview = () => {
    const {i} = this.state
    if (i > 0) {
      this.setState(prevState => ({i: prevState.i - 1}))
    }
  }

  nextReview = () => {
    const {reviewsData} = this.props
    const len = reviewsData.length
    const {i} = this.state
    if (i < len - 1) {
      this.setState(prevState => ({i: prevState.i + 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {i} = this.state
    return (
      <div className="bg-container">
        <h1 className="reviewHeading">Reviews</h1>
        <div className="carousal-container">
          <button
            className="nav-arrow"
            type="button"
            onClick={this.previusReview}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="leftArrow"
            />
          </button>
          <div className="reviewContainer">
            <img
              className="reviewImage"
              src={reviewsData[i].imgUrl}
              alt={`${reviewsData[i].username}-avatar`}
            />
            <p className="user-name">{reviewsData[i].username}</p>
            <p>{reviewsData[i].companyName}</p>
            <p>{reviewsData[i].description}</p>
          </div>
          <button
            className="nav-arrow"
            type="button"
            onClick={this.nextReview}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
