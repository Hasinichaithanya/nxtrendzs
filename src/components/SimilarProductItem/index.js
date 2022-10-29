// Write your code here
const SimilarProductItem = props => {
  const {similarProducts} = props
  const updatedData = similarProducts.map(each => ({
    imageUrl: each.image_url,
    title: each.title,
    id: each.id,
    brand: each.brand,
    rating: each.rating,
    price: each.price,
    description: each.description,
    availability: each.availability,
    similarProducts: each.similar_products,
  }))
  return (
    <ul>
      {updatedData.map(each => (
        <li key={each.id}>
          <li>
            <img src={each.imageUrl} alt={`similar product ${each.title}`} />
            <p>{each.title}</p>
            <p>By {each.brand}</p>
            <p>Rs {each.price}/-</p>
            <p>{each.rating}</p>
          </li>
        </li>
      ))}
    </ul>
  )
}
export default SimilarProductItem
