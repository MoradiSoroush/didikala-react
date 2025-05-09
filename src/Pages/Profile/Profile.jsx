import React from "react";
import "./Profile.css"





export default function Profile() {



  
  return (
    <main class="main-content dt-sl mb-3">
      <div class="container main-container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 sticky-sidebar">
            <div class="profile-sidebar dt-sl">
              <div class="dt-sl dt-sn border mb-3">
                <div class="profile-sidebar-header dt-sl">
                  <div class="d-flex align-items-center">
                    <div class="profile-avatar">
                      <img src="./assets/img/theme/avatar.png" alt="" />
                    </div>
                    <div class="profile-header-content mr-3 mt-2">
                      <span class="d-block profile-username">
                        جلال بهرامی راد
                      </span>
                      <span class="d-block profile-phone">09xxxxxxxxx</span>
                    </div>
                  </div>
                  <div class="profile-point mt-3 mb-2 dt-sl">
                    <span class="label-profile-point">امتیاز شما:</span>
                    <span class="float-left value-profile-point">120</span>
                  </div>
                  <div class="profile-link mt-2 dt-sl">
                    <div class="row">
                      <div class="col-6 text-center">
                        <a href="#">
                          <i class="mdi mdi-lock-reset"></i>
                          <span class="d-block">تغییر رمز</span>
                        </a>
                      </div>
                      <div class="col-6 text-center">
                        <a href="#">
                          <i class="mdi mdi-logout-variant"></i>
                          <span class="d-block">خروج از حساب</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dt-sl dt-sn mb-3 text-center">
                <a href="#">
                  <img
                    src="./assets/img/banner/sidebar-banner-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="dt-sl dt-sn border mb-3">
                <div class="profile-menu-section dt-sl">
                  <div class="label-profile-menu mt-2 mb-2">
                    <span>حساب کاربری شما</span>
                  </div>
                  <div class="profile-menu">
                    <ul>
                      <li>
                        <a href="#" class="active">
                          <i class="mdi mdi-account-circle-outline"></i>
                          پروفایل
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-basket"></i>
                          همه سفارش ها
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-backburger"></i>
                          درخواست مرجوعی
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-heart-outline"></i>
                          لیست علاقمندی ها
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-glasses"></i>
                          نقد و نظرات
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-sign-direction"></i>
                          آدرس ها
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-eye-outline"></i>
                          بازدیدهای اخیر
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-account-edit-outline"></i>
                          اطلاعات شخصی
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
            <div class="row">
              <div class="col-xl-6 col-lg-12">
                <div class="px-3">
                  <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2">
                    <h2>اطلاعات شخصی</h2>
                  </div>
                  <div class="profile-section dt-sl">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>نام و نام خانوادگی:</span>
                        </div>
                        <div class="value-info">
                          <span>جلال بهرامی راد</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>پست الکترونیک:</span>
                        </div>
                        <div class="value-info">
                          <span>info@gmail.com</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>شماره تلفن همراه:</span>
                        </div>
                        <div class="value-info">
                          <span>09xxxxxxxxx</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>کد ملی:</span>
                        </div>
                        <div class="value-info">
                          <span>-</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>دریافت خبرنامه:</span>
                        </div>
                        <div class="value-info">
                          <span>خیر</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>شماره کارت:</span>
                        </div>
                        <div class="value-info">
                          <span>-</span>
                        </div>
                      </div>
                    </div>
                    <div class="profile-section-link">
                      <a href="#" class="border-bottom-dt">
                        <i class="mdi mdi-account-edit-outline"></i>
                        ویرایش اطلاعات شخصی
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12">
                <div class="px-3">
                  <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2">
                    <h2>لیست آخرین علاقه‌مندی‌ها</h2>
                  </div>
                  <div class="profile-section dt-sl">
                    <ul class="list-favorites">
                      <li>
                        <a href="#">
                          <img src="./assets/img/products/016.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5500</span>
                        </a>
                        <button>
                          <i class="mdi mdi-trash-can-outline"></i>
                        </button>
                      </li>
                      <li>
                        <a href="#">
                          <img src="./assets/img/products/020.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5640</span>
                        </a>
                        <button>
                          <i class="mdi mdi-trash-can-outline"></i>
                        </button>
                      </li>
                      <li>
                        <a href="#">
                          <img src="./assets/img/products/017.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5110</span>
                        </a>
                        <button>
                          <i class="mdi mdi-trash-can-outline"></i>
                        </button>
                      </li>
                    </ul>
                    <div class="profile-section-link">
                      <a href="#" class="border-bottom-dt">
                        <i class="mdi mdi-square-edit-outline"></i>
                        مشاهده و ویرایش لیست مورد علاقه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
                  <h2>آخرین سفارش‌ها</h2>
                </div>
                <div class="dt-sl">
                  <div class="table-responsive">
                    <table class="table table-order">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>شماره سفارش</th>
                          <th>تاریخ ثبت سفارش</th>
                          <th>مبلغ قابل پرداخت</th>
                          <th>مبلغ کل</th>
                          <th>عملیات پرداخت</th>
                          <th>جزییات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>DDC-57456951</td>
                          <td>۳۱ مرداد ۱۳۹۸</td>
                          <td>۰</td>
                          <td>۹,۹۸۹,۰۰۰ تومان</td>
                          <td>لغو شده</td>
                          <td class="details-link">
                            <a href="#">
                              <i class="mdi mdi-chevron-left"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>DKC-45173498</td>
                          <td>۱۰ خرداد ۱۳۹۸</td>
                          <td>۰</td>
                          <td>۱۸,۰۴۹,۰۰۰ تومان</td>
                          <td>لغو شده</td>
                          <td class="details-link">
                            <a href="#">
                              <i class="mdi mdi-chevron-left"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>DDC-58976951</td>
                          <td>۲۱ مرداد ۱۳۹۸</td>
                          <td>۰</td>
                          <td>۹,۱۸۹,۰۰۰ تومان</td>
                          <td>لغو شده</td>
                          <td class="details-link">
                            <a href="#">
                              <i class="mdi mdi-chevron-left"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="link-to-orders" colspan="7">
                            <a href="#">مشاهده لیست سفارش ها</a>
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

        <section class="slider-section dt-sl mt-5 mb-5">
          <div class="row mb-3">
            <div class="col-12">
              <div class="section-title text-sm-title title-wide no-after-title-wide">
                <h2>محصولات پیشنهادی برای شما</h2>
                <a href="#">مشاهده همه</a>
              </div>
            </div>

            <div class="col-12 px-res-0">
              <div class="product-carousel carousel-lg owl-carousel owl-theme">
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                      </div>
                      <div class="discount">
                        <span>20%</span>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/07.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">مانتو زنانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس زنانه
                      </a>
                      <span class="product-price">157,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/017.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">کت مردانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس مردانه
                      </a>
                      <span class="product-price">199,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star"></i>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/013.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">
                          مانتو زنانه مدل هودی تیک تین
                        </a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس زنانه
                      </a>
                      <span class="product-price">135,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star"></i>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/09.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">مانتو زنانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس زنانه
                      </a>
                      <span class="product-price">145,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/010.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">مانتو زنانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس زنانه
                      </a>
                      <span class="product-price">170,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star"></i>
                      </div>
                      <div class="discount">
                        <span>20%</span>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/011.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">مانتو زنانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس زنانه
                      </a>
                      <span class="product-price">185,000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="product-card mb-3">
                    <div class="product-head">
                      <div class="rating-stars">
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star active"></i>
                        <i class="mdi mdi-star"></i>
                      </div>
                    </div>
                    <a class="product-thumb" href="shop-single.html">
                      <img
                        src="./assets/img/products/019.jpg"
                        alt="Product Thumbnail"
                      />
                    </a>
                    <div class="product-card-body">
                      <h5 class="product-title">
                        <a href="shop-single.html">تیشرت مردانه</a>
                      </h5>
                      <a class="product-meta" href="shop-categories.html">
                        لباس مردانه
                      </a>
                      <span class="product-price">54,000 تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
