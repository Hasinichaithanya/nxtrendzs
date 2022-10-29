import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import Cookies from 'js-cookie'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import SimilarProductItem from '../SimilarProductItem'

class ProductItemDetails extends Component {
  state = {
    result: {},
    isLoading: 'inProgress',
    count: 1,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/products/${id}`, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        imageUrl: data.image_url,
        title: data.title,
        id: data.id,
        brand: data.brand,
        rating: data.rating,
        price: data.price,
        description: data.description,
        availability: data.availability,
        similarProducts: data.similar_products,
      }
      console.log(response)
      this.setState({
        result: updatedData,
        isLoading: 'loaded',
      })
    } else {
      this.setState({
        isLoading: 'failed',
      })
    }
  }

  decreaseCount = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(prev => ({
        count: prev.count - 1,
      }))
    }
  }

  increaseCount = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }))
  }

  renderList = () => {
    const {result, count, isLoading} = this.state
    const {
      imageUrl,
      description,
      price,
      rating,
      brand,
      title,
      availability,
      similarProducts,
    } = result
    return (
      <div>
        <ul>
          <li>
            <img src={imageUrl} alt="product" />
          </li>
          <li>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{description}</p>
            <p>Available:{availability}</p>
            <p>Brand:{brand}</p>
            <div>
              <button onClick={this.decreaseCount} type="button" testid="minus">
                <BsDashSquare />
              </button>
              <p>{count}</p>
              <button onClick={this.increaseCount} type="button" testid="plus">
                <BsPlusSquare />
              </button>
            </div>
            <button type="button">ADD TO CART</button>
          </li>
        </ul>
        <SimilarProductItem similarProducts={similarProducts} />
      </div>
    )
  }

  loading = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  failedView = () => (
    <div>
      <h1>Product Not Found</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <Link to="/products">
        <button type="button">Continue Shopping</button>
      </Link>
    </div>
  )

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    switch (isLoading) {
      case 'loaded':
        return this.renderList()
      case 'inProgress':
        return this.loading()
      case 'failed':
        return this.failedView()
      default:
        return null
    }
  }
}

export default ProductItemDetails
