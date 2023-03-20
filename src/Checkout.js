// import React from 'react'
// import "./Checkout.css"
// import CheckoutProduct from './CheckoutProduct';
// import Subtotal from './Subtotal';
// import {useStateValue} from "./StateProvider";

// function Checkout() {
//   const [{cart, user} , dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//         <div className="checkout__left">
//             <img className="checkout__ad" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/7ef9137b8a46ab67.jpg?q=50"/>
//             <div>
//             <h3>Hello, {user?.email}</h3>
//                 <h1 className="checkout__title">Shopping Cart</h1>
//                 {cart.map(item => (
//                   <CheckoutProduct
//                     id= {item.id}
//                     title= {item.title}
//                     image= {item.image}
//                     price= {item.price}
//                     rating= {item.rating}
//                   />
//                 ))}
//                 {/* CheckoutProduct */}
//                 {/* CheckoutProduct */}
//                 {/* CheckoutProduct */}
//             </div>
//         </div>

//         <div className="checkout__right">
//             <h2>Subtotal items</h2>
//             <Subtotal/>
//         </div>
//     </div>
//   )
// }

// export default Checkout

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/7ef9137b8a46ab67.jpg?q=50"/>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;