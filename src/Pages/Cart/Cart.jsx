import React, { useState, useEffect } from "react";
import { userCart } from "../../datas";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { Link } from "react-router-dom";
export default function Cart() {
  const [cartItems, setCartItems] = useState(userCart);
  const [activeTab, setActiveTab] = useState("cart");
  const cartCount = cartItems.length;
  const nextListCount = 1;

  const [nextListItems, setNextListItems] = useState([]);

  // محاسبه مبلغ کل
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = totalAmount * 0.01;
  const payableAmount = totalAmount - discount;

  // افزایش تعداد آیتم
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // کاهش تعداد آیتم
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // حذف آیتم
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addAllToCart = () => {
    setCartItems((prev) => [...prev, ...nextListItems]);
    setNextListItems([]);
  };

   const clickhandler = () => {
    console.log("clicked")
   }
  return (
    <div>
      <main class="main-content dt-sl mb-3">
        <div class="container main-container">
          <div class="row mx-0">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 mb-2">
              <nav className="tab-cart-page">
                <div
                  className="nav nav-tabs border-bottom"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className={`nav-item nav-link d-inline-flex w-auto ${
                      activeTab === "cart" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("cart")}
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected={activeTab === "cart"}
                  >
                    سبد خرید
                    <span className="count-cart">{cartCount}</span>
                  </button>
                  <button
                    className={`nav-item nav-link d-inline-flex w-auto ${
                      activeTab === "next" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("next")}
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected={activeTab === "next"}
                  >
                    لیست خرید بعدی
                    <span className="count-cart">{nextListCount}</span>
                  </button>
                </div>
                {/* محتوای تب‌ها */}
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "cart" ? "show active" : ""
                    }`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    {/* محتوای سبد خرید */}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "next" ? "show active" : ""
                    }`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    {/* محتوای لیست خرید بعدی */}
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-12">
              <div className="tab-content" id="nav-tabContent">
                {/* تب سبد خرید */}
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="col-xl-9 col-lg-8 col-12 px-0">
                      <div className="table-responsive checkout-content dt-sl">
                        <div className="checkout-header checkout-header--express">
                          <span className="checkout-header-title">
                            ارسال عادی
                          </span>
                          <span className="checkout-header-extra-info">
                            ({cartItems.length} کالا)
                          </span>
                        </div>
                        <div className="checkout-section-content-dd-k">
                          <div className="cart-items-dd-k">
                            {cartItems.map((item) => (
                              <div
                                className="cart-item py-4 px-3"
                                key={item.id}
                              >
                                <div className="item-thumbnail">
                                  <a href="#">
                                    <img src={item.img} alt={item.title} />
                                  </a>
                                </div>
                                <div className="item-info flex-grow-1">
                                  <div className="item-title">
                                    <h2>
                                      <a href="#">{item.title}</a>
                                    </h2>
                                  </div>
                                  <div className="item-detail">
                                    <ul>
                                      <li>
                                        <span
                                          className="color"
                                          style={{
                                            background:
                                              item.color === "blue"
                                                ? "#2196f3"
                                                : item.color === "red"
                                                ? "#f44336"
                                                : "#000",
                                          }}
                                        ></span>
                                        <span>{item.color}</span>
                                      </li>
                                      <li>
                                        <i className="far fa-shield-check text-muted"></i>
                                        <span>گارانتی ۱۸ ماهه</span>
                                      </li>
                                      <li>
                                        <i className="far fa-store-alt text-muted"></i>
                                        <span>نام فروشنده</span>
                                      </li>
                                      <li>
                                        <i className="far fa-clipboard-check text-primary"></i>
                                        <span>موجود در انبار</span>
                                      </li>
                                    </ul>
                                    <div className="item-quantity--item-price">
                                      <div className="item-quantity">
                                        <div className="num-block">
                                          <div className="num-in">
                                            <span
                                              className="plus"
                                              onClick={() =>
                                                increaseQuantity(item.id)
                                              }
                                            ></span>
                                            <input
                                              type="text"
                                              className="in-num"
                                              value={item.quantity}
                                              readOnly
                                            />
                                            <span
                                              className={`minus ${
                                                item.quantity === 1 ? "dis" : ""
                                              }`}
                                              onClick={() =>
                                                decreaseQuantity(item.id)
                                              }
                                            ></span>
                                          </div>
                                        </div>
                                        <button
                                          className="item-remove-btn mr-3"
                                          onClick={() => removeItem(item.id)}
                                        >
                                          <DeleteOutlineOutlinedIcon />
                                          حذف
                                        </button>
                                      </div>
                                      <div className="item-price">
                                        {(
                                          item.price * item.quantity
                                        ).toLocaleString()}
                                        <span className="text-sm mr-1">
                                          تومان
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-12 w-res-sidebar sticky-sidebar">
                      <div className="dt-sn dt-sn--box border mb-2">
                        <ul className="checkout-summary-summary">
                          <li>
                            <span>مبلغ کل ({cartItems.length} کالا)</span>
                            <span>{totalAmount.toLocaleString()} تومان</span>
                          </li>
                          <li className="checkout-summary-discount">
                            <span>سود شما از خرید</span>
                            <span>
                              <span>(۱٪)</span>
                              {discount.toLocaleString()} تومان
                            </span>
                          </li>
                          <li>
                            <span>
                              هزینه ارسال
                              <span className="help-sn">
                                <span className="mdi mdi-information-outline"></span>
                                {/* Tooltip به‌صورت CSS یا react-bootstrap اضافه می‌شه */}
                              </span>
                            </span>
                            <span>وابسته به آدرس</span>
                          </li>
                          <li className="checkout-club-container">
                            <span>
                              دیدی کالا
                              <span className="help-sn">
                                <span className="mdi mdi-information-outline"></span>
                              </span>
                            </span>
                            <span>
                              <span>۱۵۰+</span>
                              <span> امتیاز</span>
                            </span>
                          </li>
                        </ul>
                        <div className="checkout-summary-devider">
                          <div></div>
                        </div>
                        <div className="checkout-summary-content">
                          <div className="checkout-summary-price-title">
                            مبلغ قابل پرداخت:
                          </div>
                          <div className="checkout-summary-price-value">
                            <span className="checkout-summary-price-value-amount">
                              {payableAmount.toLocaleString()}
                            </span>
                            تومان
                          </div>
                          <a href="#" className="mb-2 d-block">
                                <Link to="/shopping">
                            <button className="btn-primary-cm btn-with-icon w-100 text-center pr-0" onClick={() => clickhandler()}>
                                    ادامه ثبت سفارش
                              <ArrowLeftOutlinedIcon />
                            </button>
                                </Link>
                          </a>
                          <div>
                            <span>
                              کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای
                              ثبت سفارش مراحل بعدی را تکمیل کنید.
                            </span>
                            <span className="help-sn">
                              <span className="mdi mdi-information-outline"></span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="dt-sn dt-sn--box checkout-feature-aside pt-4">
                        <ul>
                          <li className="checkout-feature-aside-item">
                            <img
                              src="./assets/img/svg/return-policy.svg"
                              alt="return-policy"
                            />
                            هفت روز ضمانت تعویض
                          </li>
                          <li className="checkout-feature-aside-item">
                            <img
                              src="./assets/img/svg/payment-terms.svg"
                              alt="payment-terms"
                            />
                            پرداخت در محل با کارت بانکی
                          </li>
                          <li className="checkout-feature-aside-item">
                            <img
                              src="./assets/img/svg/delivery.svg"
                              alt="delivery"
                            />
                            تحویل اکسپرس
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* تب لیست خرید بعدی */}
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row">
                    <div className="col-xl-9 col-lg-8 col-12 px-0">
                      <div className="table-responsive checkout-content dt-sl">
                        <div className="checkout-header checkout-header--express">
                          <span className="checkout-header-title">
                            ارسال عادی
                          </span>
                          <span className="checkout-header-extra-info">
                            ({nextListItems.length} کالا)
                          </span>
                          <button
                            className="checkout-add-all-to-cart"
                            onClick={addAllToCart}
                          >
                            افزودن همه به سبد خرید
                          </button>
                        </div>
                        <div className="checkout-section-content-dd-k">
                          <div className="cart-items-dd-k">
                            {nextListItems.length > 0 ? (
                              nextListItems.map((item) => (
                                <div
                                  className="cart-item py-4 px-3"
                                  key={item.id}
                                >
                                  <div className="item-thumbnail">
                                    <a href="#">
                                      <img src={item.img} alt={item.title} />
                                    </a>
                                  </div>
                                  <div className="item-info flex-grow-1">
                                    <div className="item-title">
                                      <h2>
                                        <a href="#">{item.title}</a>
                                      </h2>
                                    </div>
                                    <div className="item-detail">
                                      <ul>
                                        <li>
                                          <span
                                            className="color"
                                            style={{
                                              background:
                                                item.color === "blue"
                                                  ? "#2196f3"
                                                  : item.color === "red"
                                                  ? "#f44336"
                                                  : "#000",
                                            }}
                                          ></span>
                                          <span>{item.color}</span>
                                        </li>
                                        <li>
                                          <i className="far fa-shield-check text-muted"></i>
                                          <span>گارانتی ۱۸ ماهه</span>
                                        </li>
                                        <li>
                                          <i className="far fa-store-alt text-muted"></i>
                                          <span>نام فروشنده</span>
                                        </li>
                                        <li>
                                          <i className="far fa-clipboard-check text-primary"></i>
                                          <span>موجود در انبار</span>
                                        </li>
                                      </ul>
                                      <div className="item-quantity--item-price">
                                        <div className="item-quantity">
                                          <div className="num-block">
                                            <div className="num-in">
                                              <span
                                                className="plus"
                                                onClick={() =>
                                                  increaseQuantity(item.id)
                                                }
                                              ></span>
                                              <input
                                                type="text"
                                                className="in-num"
                                                value={item.quantity}
                                                readOnly
                                              />
                                              <span
                                                className={`minus ${
                                                  item.quantity === 1
                                                    ? "dis"
                                                    : ""
                                                }`}
                                                onClick={() =>
                                                  decreaseQuantity(item.id)
                                                }
                                              ></span>
                                            </div>
                                          </div>
                                          <button
                                            className="item-remove-btn mr-3"
                                            onClick={() => removeItem(item.id)}
                                          >
                                            <DeleteOutlineOutlinedIcon />
                                            حذف
                                          </button>
                                        </div>
                                        <div className="item-price">
                                          {(
                                            item.price * item.quantity
                                          ).toLocaleString()}
                                          <span className="text-sm mr-1">
                                            تومان
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>لیست خرید بعدی خالی است</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-12 w-res-sidebar sticky-sidebar">
                      <div className="dt-sn dt-sn--box border">
                        <div className="section-title text-sm-title title-wide mb-1 no-after-title-wide mb-2">
                          <h2 className="text-dark">لیست خرید بعدی چیست؟</h2>
                        </div>
                        <p className="text-secondary text-justify">
                          شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و
                          موقتاً قصد خرید آن‌ها را ندارید، در لیست خرید بعدی خود
                          قرار داده و هر زمان مایل بودید آن‌ها را مجدداً به سبد
                          خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
