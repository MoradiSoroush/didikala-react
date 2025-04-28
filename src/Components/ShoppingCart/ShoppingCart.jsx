import React,{useState,useEffect} from 'react'

import "./ShoppingCart.css"

export default function ShoppingCart() {




  return (
  
    <div class="header-cart-info">
    <div class="header-cart-info-header">
      <div class="header-cart-info-count">3 کالا</div>
      <a href="/test" class="header-cart-info-link">
        <span>مشاهده سبد خرید</span>
      </a>
    </div>
    <ul
      class="header-basket-list "
      tabindex="1"
      style={{overflow: "hidden", outline: "none"}}
    >
      <li class="cart-item">
        <a href="/test" class="header-basket-list-item">
          <div class="header-basket-list-item-image">
            <img src="./img/cart/1.jpg" alt="" />
          </div>
          <div class="header-basket-list-item-content">
            <p class="header-basket-list-item-title">
              گوشی موبایل سامسونگ مدل Galaxy A30 SM-A305F/DS دو سیم
              کارت ظرفیت 64 گیگابایت
            </p>
            <div class="header-basket-list-item-footer">
              <div class="header-basket-list-item-props">
                <span class="header-basket-list-item-props-item">
                  1 x
                </span>
                <span class="header-basket-list-item-props-item">
                  <div
                    class="header-basket-list-item-color-badge"
                    style={{background:" #2196f3"}}
                  ></div>
                  آبی
                </span>
              </div>
              <button class="header-basket-list-item-remove">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </a>
      </li>
      <li class="cart-item">
        <a href="/test" class="header-basket-list-item">
          <div class="header-basket-list-item-image">
            <img src="./img/cart/2.jpg" alt="" />
          </div>
          <div class="header-basket-list-item-content">
            <p class="header-basket-list-item-title">
              گوشی موبایل هوآوی مدل Y9 2019 JKM-LX1 دو سیم کارت
              ظرفیت 64 گیگابایت
            </p>
            <div class="header-basket-list-item-footer">
              <div class="header-basket-list-item-props">
                <span class="header-basket-list-item-props-item">
                  1 x
                </span>
                <span class="header-basket-list-item-props-item">
                  <div
                    class="header-basket-list-item-color-badge"
                    style={{backGround:" #212121"}}
                  ></div>
                  سفید
                </span>
              </div>
              <button class="header-basket-list-item-remove">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </a>
      </li>
      <li class="cart-item">
        <a href="/test" class="header-basket-list-item">
          <div class="header-basket-list-item-image">
            <img src="./img/cart/3.jpg" alt="" />
          </div>
          <div class="header-basket-list-item-content">
            <p class="header-basket-list-item-title">
              گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS دو
              سیم‌کارت ظرفیت 128 گیگابایت
            </p>
            <div class="header-basket-list-item-footer">
              <div class="header-basket-list-item-props">
                <span class="header-basket-list-item-props-item">
                  1 x
                </span>
                <span class="header-basket-list-item-props-item">
                  <div
                    class="header-basket-list-item-color-badge"
                    style={{backGround: "#FFFFFF"}}
                  ></div>
                  سفید
                </span>
              </div>
              <button class="header-basket-list-item-remove">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="header-cart-info-footer">
      <div class="header-cart-info-total">
        <span class="header-cart-info-total-text">
          مبلغ قابل پرداخت:
        </span>
        <p class="header-cart-info-total-amount">
          <span class="header-cart-info-total-amount-number">
            9,500,000 <span>تومان</span>
          </span>
        </p>
      </div>

      <div>
        <a href="/test" class="header-cart-info-submit">
          ثبت سفارش
        </a>
      </div>
    </div>
  </div>
  )
}
