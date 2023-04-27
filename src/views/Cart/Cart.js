import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <>
      <div className="cartBg">
        <span>Pet Mart</span>
      </div>
      <div className="petMartColumns">
        <div className="dogColumn">
          <span className="ColumnTitle">Dogs</span>
          <div className="columnItems">
            <span>Toys</span>
            <span>Accessories</span>
            <span>Medicene</span>
          </div>
        </div>
        <div className="catColumn">
          <span className="ColumnTitle">Cats</span>
          <div className="columnItems">
            <span>Toys</span>
            <span>Accessories</span>
            <span>Medicene</span>
          </div>
        </div>
        <div className="pharmacyColumn">
          <span className="ColumnTitle">Pharmacy</span>
          <div className="columnItems">
            <span>Vaccines</span>
            <span>Checkup</span>
            <span>Medicene</span>
          </div>
        </div>
      </div>
      <div className="petItems"></div>
    </>
  );
}
export default Cart;
