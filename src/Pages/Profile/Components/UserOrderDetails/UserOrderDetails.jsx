import React from "react";

export default function UserOrderDetails() {
  return (
    <div>
      <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
        <div class="row">
          <div class="col-12">
            <div class="profile-navbar">
              <a href="#" class="profile-navbar-btn-back">
                بازگشت
              </a>
              <h4>
                سفارش <span class="font-en">DKC-57456951</span>
                <span>ثبت شده در تاریخ ۳۱ مرداد ۱۳۹۸</span>
              </h4>
            </div>
          </div>
          <div class="col-12 mb-4">
            <div class="dt-sl dt-sn border">
              <div class="row table-draught px-3">
                <div class="col-md-6 col-sm-12">
                  <span class="title">تحویل گیرنده:</span>
                  <span class="value">جلال بهرامی راد</span>
                </div>
                <div class="col-md-6 col-sm-12">
                  <span class="title">شماره تماس تحویل گیرنده:</span>
                  <span class="value">09xxxxxxxxx</span>
                </div>
                <div class="col-md-6 col-sm-12">
                  <span class="title">کد مرسوله:</span>
                  <span class="value">38776122</span>
                </div>
                <div class="col-md-6 col-sm-12">
                  <span class="title">نحوه ارسال سفارش:</span>
                  <span class="value">
                    پست پیشتاز با ظرفیت اختصاصی برای دیدیکالا
                  </span>
                </div>
                <div class="col-md-6 col-sm-12">
                  <span class="title">هزینه ارسال:</span>
                  <span class="value">رایگان</span>
                </div>
                <div class="col-md-6 col-sm-12">
                  <span class="title">زمان تحویل:</span>
                  <span class="value">
                    بازه دو‌شنبه ۴ شهریور - پنج‌شنبه ۷ شهریور
                  </span>
                  <button class="btn btn-light">تغییر زمان ارسال</button>
                </div>
                <div class="col-12 text-center pb-0">
                  <span class="title">مبلغ این مرسوله:</span>
                  <span class="value">۹,۹۸۹,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mb-4">
            <section class="slider-section dt-sl mb-5">
              <div class="row mb-3">
                <div class="col-12">
                  <div class="section-title text-sm-title title-wide no-after-title-wide">
                    <h2>مرسوله 1 از 1</h2>
                    <a href="#">لغو دریافت مرسوله</a>
                  </div>
                </div>

                {/* <!-- Start Profile-order-step-Slider --> */}
                <div class="col-12">
                  <div class="profile-order-steps carousel-lg owl-carousel owl-theme">
                    <div class="item profile-order-steps-item is-active">
                      <img src="./assets/img/svg/0eab59b0.svg" />
                      <span>لغو شده</span>
                    </div>
                    <div class="item profile-order-steps-item is-active">
                      <img src="./assets/img/svg/d5d5e1d2.svg" />
                      <span>تایید سفارش</span>
                    </div>
                    <div class="item profile-order-steps-item">
                      <img src="./assets/img/svg/3db3cdeb.svg" />
                      <span>آماده‌سازی سفارش</span>
                    </div>
                    <div class="item profile-order-steps-item">
                      <img src="./assets/img/svg/332b9ff1.svg" />
                      <span>خروج از مرکز پردازش</span>
                    </div>
                    <div class="item profile-order-steps-item">
                      <img src="./assets/img/svg/07a0808a.svg" />
                      <span>تحویل به پست</span>
                    </div>
                    <div class="item profile-order-steps-item">
                      <img src="./assets/img/svg/dbab74ce.svg" />
                      <span>مرکز مبادلات پست</span>
                    </div>
                    <div class="item profile-order-steps-item">
                      <img src="./assets/img/svg/50450a73.svg" />
                      <span>تحویل به مشتری</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Profile-order-step-Slider --> */}
              </div>
            </section>
          </div>
          <div class="col-12">
            <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
              <h2>همه سفارش‌ها</h2>
            </div>
            <div class="dt-sl">
              <div class="table-responsive">
                <table class="table table-order table-order-details">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>نام محصول</th>
                      <th>تعداد</th>
                      <th>قیمت واحد</th>
                      <th>قیمت کل</th>
                      <th>تخفیف</th>
                      <th>قیمت نهایی</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div class="details-product-area">
                          <img
                            src="./assets/img/single-product/thumbnail-1.jpg"
                            class="thumbnail-product"
                            alt=""
                          />
                          <h5 class="details-product">
                            <span>
                              گوشی موبایل سامسونگ مدل Galaxy S10 SM-G973F/DS دو
                              سیم کارت ظرفیت 128 گیگابایت
                            </span>
                            <span>گارانتی 18 ماهه کاوش تیم</span>
                            <span>فروشنده : اوند </span>
                            <span>رنگ : سفید</span>
                          </h5>
                        </div>
                      </td>
                      <td>1</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>۰</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>
                        <button class="btn btn-info d-block w-100 mb-2">
                          خرید مجدد
                        </button>
                        <button class="btn text-light bg-secondary d-block w-100">
                          ثبت نظر
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div class="details-product-area">
                          <img
                            src="./assets/img/single-product/thumbnail-1.jpg"
                            class="thumbnail-product"
                            alt=""
                          />
                          <h5 class="details-product">
                            <span>
                              گوشی موبایل سامسونگ مدل Galaxy S10 SM-G973F/DS دو
                              سیم کارت ظرفیت 128 گیگابایت
                            </span>
                            <span>گارانتی 18 ماهه کاوش تیم</span>
                            <span>فروشنده : اوند </span>
                            <span>رنگ : سفید</span>
                          </h5>
                        </div>
                      </td>
                      <td>1</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>۰</td>
                      <td>۳,۵۶۰,۰۰۰ تومان</td>
                      <td>
                        <button class="btn btn-info d-block w-100 mb-2">
                          خرید مجدد
                        </button>
                        <button class="btn text-light bg-secondary d-block w-100">
                          ثبت نظر
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
