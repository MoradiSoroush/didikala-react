import React from 'react'

export default function EmptyCart() {
  return (
    <div>
           <main class="main-content dt-sl mb-3">
            <div class="container main-container">
                <div class="row">
                    <div class="col-12">
                        <div class="dt sl dt-sn dt-sn--box border pt-3 pb-5">
                            <div class="cart-page EmptyCart">
                                <div class="circle-box-icon">
                                    <i class="mdi mdi-cart-remove"></i>
                                </div>
                                <p class="EmptyCart-title">سبد خرید شما خالیست!</p>
                                <p>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                                <div class="EmptyCart-links mb-5">
                                    <a href="#" class="border-bottom-dt">لیست مورد علاقه من</a>
                                    <a href="#" class="border-bottom-dt">محصولات شگفت‌انگیز</a>
                                    <a href="#" class="border-bottom-dt">محصولات پرفروش روز</a>
                                </div>
                                <a href="#" class="btn-primary-cm">ادامه خرید در دیدیکالا</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dt-sn dt-sn--box mt-4">
                    <div class="row">
                        {/* <!-- Start Product-Slider --> */}
                        <div class="col-12">
                            <div class="features-checkout-slider carousel-md owl-carousel owl-theme">
                                <div class="item">
                                    <a href="#">
                                        <img src="./assets/img/svg/delivery.svg" class="img-fluid" alt=""/>
                                        <div class="title-feature-checkout-slider">تحویل اکسپرس</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <img src="./assets/img/svg/contact-us.svg" class="img-fluid" alt=""/>
                                        <div class="title-feature-checkout-slider">پشتیبانی ۲۴ ساعته</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <img src="./assets/img/svg/payment-terms.svg" class="img-fluid" alt=""/>
                                        <div class="title-feature-checkout-slider">پرداخت در محل</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <img src="./assets/img/svg/return-policy.svg" class="img-fluid" alt=""/>
                                        <div class="title-feature-checkout-slider">۷ روز ضمانت بازگشت</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <img src="./assets/img/svg/origin-guarantee.svg" class="img-fluid" alt=""/>
                                        <div class="title-feature-checkout-slider">ضمانت اصل بودن کالا</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Product-Slider --> */}
                    </div>
                </div>
                {/* <!-- Start Banner --> */}
                <div class="row mt-3 mt-5 mb-4">
                    <div class="col-sm-3 col-6 mb-2">
                        <div class="widget-banner">
                            <a href="#">
                                <img src="./assets/img/banner/small-banner-1.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6 mb-2">
                        <div class="widget-banner">
                            <a href="#">
                                <img src="./assets/img/banner/small-banner-2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6 mb-2">
                        <div class="widget-banner">
                            <a href="#">
                                <img src="./assets/img/banner/small-banner-3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-6 mb-2">
                        <div class="widget-banner">
                            <a href="#">
                                <img src="./assets/img/banner/small-banner-4.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Banner --> */}
                {/* <!-- Start Product-Slider --> */}
                <section class="slider-section dt-sl mb-5">
                    <div class="row mb-3">
                        <div class="col-12">
                            <div class="section-title text-sm-title title-wide no-after-title-wide">
                                <h2>احتمالا به محصولات زیر هم علاقه‌مند باشید</h2>
                                <a href="#">مشاهده همه</a>
                            </div>
                        </div>

                        {/* <!-- Start Product-Slider --> */}
                        <div class="col-12">
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
                {/* <!-- Start Product-Slider --> */}
                <section class="slider-section dt-sl mb-5">
                    <div class="row mb-3">
                        <div class="col-12">
                            <div class="section-title text-sm-title title-wide no-after-title-wide">
                                <h2>محصولات پیشنهادی برای شما</h2>
                                <a href="#">مشاهده همه</a>
                            </div>
                        </div>

                        {/* <!-- Start Product-Slider --> */}
                        <div class="col-12">
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
        </main>
    </div>
  )
}
