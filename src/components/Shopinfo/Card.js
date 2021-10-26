import "./card.css"


const Card = ({brand}) => {
  return (
      <div className="CardBox">
        <h4>{brand.brand}</h4>
        <p>Phone : {brand.phone} @{brand.apr}% APR Retail : ${brand.retail_price}</p>
        <img src={brand.image} alt="" className="productImage"/>
        <button>buy</button>
        <span>Rating<button>{brand.rating}/5</button></span>
      </div>
  )
}

export default Card