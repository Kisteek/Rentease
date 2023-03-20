import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
  const [{cart} , dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat renderText={(value) => (
        <>
            <p>
                Subtotal( {cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/>
                This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix ={"Rs"} 
      />

      <button>Proceed to Rent items</button>
    </div>
  );
}

export default Subtotal
