import React from 'react'
import { products } from './Data'
function Product_list() {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}> 
        {products.map(product=>
      <div className="wrapper">
  <div className="product-img">
    <img src={product.image} height={450} width={250} />
  </div>
  <div className="product-info">
    <div className="product-text">
      <h3>{product.title}</h3>
      <h5>{product.category}</h5>
      <p>
        {product.description}
      </p>
    </div>
    <div className="product-price-btn">
      <p>
        <span>{product.price}</span>$
      </p>
      <br />
      <button type="button">buy now</button>
    </div>
  </div>
</div>)}

    </div>
  )
}

export default Product_list
