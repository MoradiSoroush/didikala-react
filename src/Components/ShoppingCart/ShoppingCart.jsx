import React, { useState, useEffect } from "react";
import { userCart } from "../../datas";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState(userCart);

  const totalPrice = shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div class="header-cart-info">
      <div class="header-cart-info-header">
        <div class="header-cart-info-count">{shoppingCart.length} کالا</div>
        <a href="/test" class="header-cart-info-link">
          <span>مشاهده سبد خرید</span>
        </a>
      </div>
      <ul
        class="header-basket-list "
        tabindex="1"
        style={{ overflow: "hidden", outline: "none" }}
      >
        {shoppingCart &&
          shoppingCart.map((product) => (
            <li class="cart-item" key={product.id}>
              <a href="/test" class="header-basket-list-item">
                <div class="header-basket-list-item-image">
                  <img src={product.img} alt="" />
                </div>
                <div class="header-basket-list-item-content">
                  <p class="header-basket-list-item-title">{product.title}</p>
                  <div class="header-basket-list-item-footer">
                    <div class="header-basket-list-item-props">
                      <span class="header-basket-list-item-props-item">
                        {product.quantity} x
                      </span>
                      <span class="header-basket-list-item-props-item">
                        <div
                          class="header-basket-list-item-color-badge"
                          style={{ background: product.color === 'blue' ? '#2196f3' : product.color === 'red' ? '#f44336' : '#000' }}
                        ></div>
                        {product.color}
                      </span>
                    </div>
                    <button class="header-basket-list-item-remove">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
      </ul>
      <div class="header-cart-info-footer">
        <div class="header-cart-info-total">
          <span class="header-cart-info-total-text">مبلغ قابل پرداخت:</span>
          <p class="header-cart-info-total-amount">
            <span class="header-cart-info-total-amount-number">
              {totalPrice.toLocaleString()} <span>تومان</span>
            </span>
          </p>
        </div>

        <div>
          <Link to="/cart" class="header-cart-info-submit">
            ثبت سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}
