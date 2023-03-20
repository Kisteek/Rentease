import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating, hideButton}) {
  const[{cart}, dispatch] =useStateValue();
  
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt="productImage"/>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="checkoutProduct__rating">
            {Array(rating)
            .fill()
            .map((_, i)=>(
              <span className="fa fa-star product__checked"></span>
            ))}
            {Array(5-rating)
            .fill()
            .map((_, i)=>(
              <span className="fa fa-star"></span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct

// import React from 'react';
// import './CheckoutProduct.css'
// import { useStateValue } from "./StateProvider";

// function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
//     const [{ cart }, dispatch] = useStateValue();

//     const removeFromCart = () => {
//         // remove the item from the basket
//         dispatch({
//             type: 'REMOVE_FROM_BASKET',
//             id: id,
//         })
//     }

//     return (
//         <div className='checkoutProduct'>
//             <img className='checkoutProduct__image' src={image} />

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
// <div className="checkoutProduct__rating">
//     {Array(rating)
//     .fill()
//     .map((_, i)=>(
//       <span className="fa fa-star product__checked"></span>
//     ))}
//     {Array(5-rating)
//     .fill()
//     .map((_, i)=>(
//       <span className="fa fa-star"></span>
//     ))}
//                  {!hideButton && (
//                     <button onClick={removeFromCart}>Remove from Cart</button>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default CheckoutProduct
