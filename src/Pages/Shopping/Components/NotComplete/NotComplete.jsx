import React from 'react'

export default function NotComplete() {
  return (
    <main class="main-content dt-sl mt-4 mb-3">
    <div class="container main-container">
        <div class="row">
            <div class="cart-page-content col-12 px-0">
                <div class="checkout-alert dt-sn dt-sn--box mb-4">
                    <div class="circle-box-icon failed">
                        <i class="mdi mdi-close"></i>
                    </div>
                    <div class="checkout-alert-title">
                        <h4> سفارش <span
                                class="checkout-alert-highlighted checkout-alert-highlighted-success">DDC-75007560</span>
                            ثبت شد اما پرداخت ناموفق بود.
                        </h4>
                    </div>
                    <div class="checkout-alert-content">
                        <p>
                            <span class="checkout-alert-content-failed">برای جلوگیری از لغو سیستمی سفارش، تا ۱
                                ساعت آینده پرداخت را انجام دهید.</span>
                            
                            <span class="checkout-alert-content-small px-res-1">
                                چنانچه طی این فرایند مبلغی از حساب شما کسر شده است، طی ۷۲ ساعت آینده به حساب شما
                                باز خواهد گشت.
                            </span>
                        </p>
                    </div>
                </div>
                <section class="page-content dt-sl">
                    <div class="section-title text-sm-title title-wide no-after-title-wide mb-0 px-res-1">
                        <h2>انتخاب شیوه پرداخت</h2>
                    </div>
                    <form method="post" id="shipping-data-form" class="dt-sn dt-sn--box pt-3 pb-3 mb-4">
                        <div class="checkout-pack">
                            <div class="row">
                                <div class="checkout-time-table checkout-time-table-time">
                                    <div class="col-12">
                                        <div class="radio-box custom-control custom-radio pl-0 pr-3">
                                            <input type="radio" class="custom-control-input" name="post-pishtaz"
                                                id="1" value="1" checked/>
                                            <label for="1" class="custom-control-label">
                                                <i
                                                    class="mdi mdi-credit-card-outline checkout-additional-options-checkbox-image"></i>
                                                <div class="content-box">
                                                    <div
                                                        class="checkout-time-table-title-bar checkout-time-table-title-bar-city">
                                                        پرداخت اینترنتی هوشمند دیجی‌کالا
                                                        <span class="help-sn" data-toggle="tooltip"
                                                            data-html="true" data-placement="bottom"
                                                            title="<div class='help-container is-left'><div class='help-arrow'></div><p class='help-text'>با پرداخت اینترنتی، سفارش شما با اولویت بیشتری نسبت به پرداخت در محل پردازش و ارسال می شود. در صورت پرداخت ناموفق هزینه کسر شده حداکثر طی ۷۲ ساعت به حساب شما بازگردانده می‌شود.</p></div>">
                                                            <span class="mdi mdi-information-outline"></span>
                                                        </span>
                                                    </div>
                                                    <ul class="checkout-time-table-subtitle-bar">
                                                        <li>
                                                            آنلاین با تمامی کارت‌های بانکی
                                                        </li>
                                                    </ul>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="radio-box custom-control custom-radio pl-0 pr-3">
                                            <input type="radio" class="custom-control-input" name="post-pishtaz"
                                                id="2" value="2"/>
                                            <label for="2" class="custom-control-label">
                                                <i
                                                    class="mdi mdi-credit-card-multiple-outline checkout-additional-options-checkbox-image"></i>
                                                <div class="content-box">
                                                    <div
                                                        class="checkout-time-table-title-bar checkout-time-table-title-bar-city">
                                                        پرداخت اعتباری دیجی‌پی
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="row justify-content-end px-res-1">
                        <div class="col-lg-3 col-md-4 col-sm-5 col-12">
                            <button class="btn-primary-cm btn-with-icon  w-100">
                                <i class="mdi mdi-credit-card-outline"></i>
                                پرداخت سفارش
                            </button>
                        </div>
                    </div>
                </section>
                <section class="checkout-details dt-sl dt-sn dt-sn--box mt-4 pt-4 pb-3 pr-3 pl-3 mb-5">
                    <div class="checkout-details-title">
                        <h4 class="checkout-details-title px-res-1">
                            کد سفارش:
                            <span>
                                DDC-75007560
                            </span>
                        </h4>
                        <div class="row">
                            <div class="col-lg-9 col-md-8 col-12">
                                <div class="checkout-details-title px-res-1">
                                    <p>
                                        سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون
                                        <span class="text-highlight text-highlight-error">در انتظار
                                            پرداخت</span>
                                        است.
                                        جزئیات این سفارش را می‌توانید با کلیک بر روی دکمه
                                        <a href="#" class="border-bottom-dt">پیگیری سفارش</a>
                                        مشاهده نمایید.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 px-res-1">
                                <a href="#"
                                    class="btn-primary-cm bg-secondary btn-with-icon d-block text-center pr-0">
                                    <i class="mdi mdi-shopping"></i>
                                    پیگیری سفارش
                                </a>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <div class="checkout-table">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                نام تحویل گیرنده:
                                                <span>
                                                    جلال بهرامی راد
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                شماره تماس :
                                                <span>
                                                    09xxxxxxxxx
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                تعداد مرسوله :
                                                <span>
                                                    ۱
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                مبلغ کل:
                                                <span>
                                                    ۴,۴۳۹,۰۰۰ تومان
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                روش پرداخت:
                                                <span>
                                                    پرداخت اینترنتی
                                                    <span class="red">
                                                        (ناموفق)
                                                    </span></span>
                                            </p>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <p>
                                                وضعیت سفارش:
                                                <span>
                                                    در انتظار پرداخت
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <p>آدرس : استان خراسان شمالی
                                                ، شهربجنورد، خراسان شمالی-بجنورد</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="section-title text-sm-title title-wide no-after-title-wide mb-0 dt-sl px-res-1">
                    <h2>جزئیات پرداخت</h2>
                </div>
                <section class="checkout-details dt-sl dt-sn dt-sn--box mb-4 pt-2 pb-3 pl-3 pr-3">
                    <div class="row mt-3">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="checkout-orders-table">
                                    <tr>
                                        <td class="numrow">
                                            <p>
                                                ردیف
                                            </p>
                                        </td>
                                        <td class="gateway">
                                            <p>
                                                درگاه
                                            </p>
                                        </td>
                                        <td class="id">
                                            <p>
                                                شماره پیگیری
                                            </p>
                                        </td>
                                        <td class="date">
                                            <p>
                                                تاریخ
                                            </p>
                                        </td>
                                        <td class="price">
                                            <p>
                                                مبلغ
                                            </p>
                                        </td>
                                        <td class="status">
                                            <p>
                                                وضعیت
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="numrow">
                                            <p>۱</p>
                                        </td>
                                        <td class="gateway">
                                            <p>دیجی‌پی</p>
                                        </td>
                                        <td class="id">
                                            <p>43078827</p>
                                        </td>
                                        <td class=" date">
                                            <p>۵ آبان ۱۳۹۸</p>
                                        </td>
                                        <td class="price">
                                            <p> ۴,۴۳۹,۰۰۰ تومان</p>
                                        </td>
                                        <td class="status">
                                            <p>پرداخت ناموفق</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- Start Product-Slider --> */}
            <section class="slider-section dt-sl mt-5 mb-5">
                <div class="row mb-3">
                    <div class="col-12">
                        <div class="section-title text-sm-title title-wide no-after-title-wide">
                            <h2>محصولات پیشنهادی برای شما</h2>
                            <a href="#">مشاهده همه</a>
                        </div>
                    </div>

                    {/* <!-- Start Product-Slider --> */}
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
                                        <img src="./assets/img/products/07.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">مانتو زنانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
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
                                        <img src="./assets/img/products/017.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">کت مردانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
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
                                        <img src="./assets/img/products/013.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">مانتو زنانه مدل هودی تیک تین</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
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
                                        <img src="./assets/img/products/09.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">مانتو زنانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
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
                                        <img src="./assets/img/products/010.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">مانتو زنانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
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
                                        <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">مانتو زنانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
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
                                        <img src="./assets/img/products/019.jpg" alt="Product Thumbnail"/>
                                    </a>
                                    <div class="product-card-body">
                                        <h5 class="product-title">
                                            <a href="shop-single.html">تیشرت مردانه</a>
                                        </h5>
                                        <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                        <span class="product-price">54,000 تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Product-Slider --> */}

                </div>
            </section>
            {/* <!-- End Product-Slider --> */}
        </div>
    </div>
</main>
  )
}
