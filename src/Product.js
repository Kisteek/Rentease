import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, images, price, rating}) {
  const [ state , dispatch] = useStateValue();
  console.log("This is the cart")
  const addToCart =()=>{
    //dispatch the item into the data layer
    dispatch({
      type: 'Add_to_Cart',
      item: {
      id: id,
      title: title,
      image: images,
      price: price,
      rating: rating,
    },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>Rs</small>
            <strong> {price}</strong>
        </p>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i)=>(
              <span class="fa fa-star product__checked"></span>
            ))}
            {Array(5-rating)
            .fill()
            .map((_, i)=>(
              <span class="fa fa-star"></span>
            ))}
        </div>
      </div>
      <img className="product__image" src={images} alt={title}/>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
