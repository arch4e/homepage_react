import React from 'react'

/* stylesheets */
import '../styles/products.css'

/* data */
import { products } from '../data/products.json'

function Products() {
  document.title = 'Product - archIVe'

  return(
    <>
      <div className='contents'>
        { products.map(product =>
          <div>
            <h2>{ product.name }</h2>
            { product.description.map(desc => <p className='no-margin'>{ desc }</p>) }
            <p>配布ページ:
              <a className="product-link" href={ product.product_page.link }>{ product.product_page.label }</a>
            </p>
            <div className='product-images'>
              { product.images.map(source => <img src={ source } alt='' />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Products