import React from 'react'

export default function Search() {
  return (
    <div>
        <main class="main-content dt-sl mb-3">
            <div class="container main-container">
                <div class="row">
                    {/* <!-- Start Sidebar --> */}
                    <div class="col-lg-3 col-md-12 col-sm-12 sticky-sidebar filter-options-sidebar">
                        <div class="d-md-none">
                            <div class="header-filter-options">
                                <span>جستجوی پیشرفته <i class="fad fa-sliders-h"></i></span>
                                <button class="btn-close-filter-sidebar"><i class="fal fa-times"></i></button>
                            </div>
                        </div>
                        <div class="dt-sn dt-sn--box mb-3">
                            <form action="">
                                <div class="col-12">
                                    <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide">
                                        <h2>فیلتر محصولات</h2>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="widget-search">
                                        <input type="text" name="s"
                                            placeholder="نام محصول یا برند مورد نظر را بنویسید..."/>
                                        <button class="btn-search-widget">
                                            <img src="./assets/img/theme/search.png" alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 filter-product mb-3">
                                    <div class="accordion" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        دسته بندی
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck1"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck1">همه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck2"/>
                                                        <label class="custom-control-label" for="customCheck2">لباس
                                                            مردانه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck3"/>
                                                        <label class="custom-control-label" for="customCheck3">تیشرت
                                                            مردانه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck4"/>
                                                        <label class="custom-control-label" for="customCheck4">شلوار
                                                            مردانه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck5"/>
                                                        <label class="custom-control-label" for="customCheck5">لباس
                                                            زنانه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck6"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck6">اکسسوری</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        برند
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck7"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck7">همه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck8"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck8">پوما</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck9"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck9">آدیداس</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck10"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck10">نایک</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        فروشنده
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck11"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck11">همه</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck12"/>
                                                        <label class="custom-control-label" for="customCheck12">دیدی
                                                            کالا</label>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck13"/>
                                                        <label class="custom-control-label" for="customCheck13">فروشنده
                                                            رسمی برند</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingFour">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        رنگها
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck14"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck14">مشکی</label>
                                                        <span class="filter-color"
                                                            style="background-color: rgb(0,0,0)"></span>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck15"/>
                                                        <label class="custom-control-label" for="customCheck15">نوک
                                                            مدادی</label>
                                                        <span class="filter-color"
                                                            style="background-color: rgb(105,105,105)"></span>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck16"/>
                                                        <label class="custom-control-label" for="customCheck16">آبی
                                                            روشن</label>
                                                        <span class="filter-color"
                                                            style="background-color: rgb(64,170,255)"></span>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck17"/>
                                                        <label class="custom-control-label" for="customCheck17">نقره
                                                            ای</label>
                                                        <span class="filter-color"
                                                            style="background-color: rgb(222,222,222)"></span>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="customCheck18"/>
                                                        <label class="custom-control-label"
                                                            for="customCheck18">زرد</label>
                                                        <span class="filter-color"
                                                            style="background-color: rgb(255,255,0)"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4">
                                    <div class="section-title text-sm-title title-wide no-after-title-wide mb-1">
                                        <h2>فیلتر براساس قیمت :</h2>
                                    </div>
                                    <div class="mt-2 mb-2">
                                        <div id="slider-non-linear-step"></div>
                                    </div>
                                    <div class="mt-2 mb-2 text-center pt-2">
                                        <span>قیمت: </span>
                                        <span class="example-val" id="slider-non-linear-step-value"></span> تومان
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="parent-switcher">
                                        <label class="ui-statusswitcher">
                                            <input type="checkbox" id="switcher-1"/>
                                            <span class="ui-statusswitcher-slider">
                                                <span class="ui-statusswitcher-slider-toggle"></span>
                                            </span>
                                        </label>
                                        <label class="label-switcher" for="switcher-1">فقط کالاهای موجود</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-info btn-block" type="submit">
                                        فیلتر
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- End Sidebar --> */}
                    {/* <!-- Start Content --> */}
                    <div class="col-lg-9 col-md-12 col-sm-12 search-card-res">
                        <div class="d-md-none">
                            <button class="btn-filter-sidebar">
                                جستجوی پیشرفته <i class="fad fa-sliders-h"></i>
                            </button>
                        </div>
                        <div class="dt-sl dt-sn px-0 search-amazing-tab">
                            <div class="ah-tab-wrapper dt-sl">
                                <div class="ah-tab dt-sl">
                                    <a class="ah-tab-item" data-ah-tab-active="true" href="">مرتبط ترین</a>
                                    <a class="ah-tab-item" href="">پربازدید ترین</a>
                                    <a class="ah-tab-item" href="">جدید ترین</a>
                                    <a class="ah-tab-item" href="">پرفروش ترین</a>
                                    <a class="ah-tab-item" href="">ارزان ترین</a>
                                    <a class="ah-tab-item" href="">گران ترین</a>
                                </div>
                            </div>
                            <div class="ah-tab-content-wrapper dt-sl px-res-0">
                                <div class="ah-tab-content dt-sl" data-ah-tab-active="true">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck100"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck100">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">مانتو زنانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
                                                    <span class="product-price">157,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck101"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck101">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">کت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">199,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck102"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck102">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">مانتو زنانه مدل هودی تیک تین</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
                                                    <span class="product-price">135,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck103"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck103">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">مانتو زنانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
                                                    <span class="product-price">145,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck104"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck104">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">مانتو زنانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
                                                    <span class="product-price">170,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck105"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck105">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">مانتو زنانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس زنانه</a>
                                                    <span class="product-price">157,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck106"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck106">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck107"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck107">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">کت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">199,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <div class="add-to-compare">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input"
                                                                id="customCheck108"/>
                                                            <label class="custom-control-label"
                                                                for="customCheck108">مقایسه</label>
                                                        </div>
                                                    </div>
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">54,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ah-tab-content dt-sl">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
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
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ah-tab-content dt-sl">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ah-tab-content dt-sl">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ah-tab-content dt-sl">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ah-tab-content dt-sl">
                                    <div class="row mb-3 mx-0 px-res-0">
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                                    <img src="./assets/img/products/011.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/018.jpg" alt="Product Thumbnail"/>
                                                </a>
                                                <div class="product-card-body">
                                                    <h5 class="product-title">
                                                        <a href="shop-single.html">تیشرت مردانه</a>
                                                    </h5>
                                                    <a class="product-meta" href="shop-categories.html">لباس مردانه</a>
                                                    <span class="product-price">59,000 تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
                                                <div class="promotion-badge">
                                                    فروش ویژه
                                                </div>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                                    <img src="./assets/img/products/020.jpg" alt="Product Thumbnail"/>
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-10 mb-1 px-res-0">
                                            <div class="product-card mb-2 mx-res-0">
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
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <a href="#" class="prev"><i
                                                        class="mdi mdi-chevron-double-right"></i></a>
                                                <a href="#">1</a>
                                                <a href="#" class="active-page">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">...</a>
                                                <a href="#">7</a>
                                                <a href="#" class="next"><i class="mdi mdi-chevron-double-left"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Content --> */}
                </div>
            </div>
        </main>
    </div>
  )
}
