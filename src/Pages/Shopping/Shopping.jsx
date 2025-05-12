import React from 'react'

export default function Shopping() {
  return (
    <div>
      <main className="main-content dt-sl mt-4 mb-3">
            <div className="container main-container">
                <div className="row">
                    <div className="cart-page-content col-xl-9 col-lg-8 col-12 px-0">
                        <div className="section-title text-sm-title title-wide no-after-title-wide mb-0 px-res-1">
                            <h2>انتخاب آدرس تحویل سفارش</h2>
                        </div>
                        <section className="page-content dt-sl">
                            <div className="address-section">
                                <div className="checkout-contact dt-sn dt-sn--box border px-0 pt-0 pb-0">
                                    <div className="checkout-contact-content">
                                        <ul className="checkout-contact-items">
                                            <li className="checkout-contact-item">
                                                گیرنده:
                                                <span className="full-name">جلال بهرامی راد</span>
                                                <a className="checkout-contact-btn-edit">اصلاح این آدرس</a>
                                            </li>
                                            <li className="checkout-contact-item">
                                                <div className="checkout-contact-item checkout-contact-item-mobile">
                                                    شماره تماس:
                                                    <span className="mobile-phone">09xxxxxxxxx</span>
                                                </div>
                                                <div className="checkout-contact-item-message">
                                                    کد پستی:
                                                    <span className="post-code">۹۹۹۹۹۹۹۹۹۹</span>
                                                </div>
                                                
                                                استان
                                                <span className="state">خراسان شمالی</span>
                                                ، ‌شهر
                                                <span className="city">بجنورد</span>
                                                ،
                                                <span className="address-part">خراسان شمالی-بجنورد</span>
                                            </li>
                                        </ul>
                                        <a className="checkout-contact-location" id="btn-checkout-contact-location">تغییر
                                            آدرس
                                            ارسال</a>
                                        <div className="checkout-contact-badge">
                                            <i className="mdi mdi-check-bold"></i>
                                        </div>
                                    </div>
                                    <div className="checkout-address dt-sn px-0 pt-0 pb-0" id="user-address-list-container">
                                        <div className="checkout-address-content">
                                            <div className="checkout-address-headline">آدرس مورد نظر خود را جهت تحویل
                                                انتخاب فرمایید:</div>
                                            <div className="checkout-address-row">
                                                <div className="checkout-address-col">
                                                    <button className="checkout-address-location" data-toggle="modal"
                                                        data-target="#modal-location">
                                                        <strong>ایجاد آدرس جدید</strong>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="checkout-address-row">
                                                <div className="checkout-address-col">
                                                    <div className="checkout-address-box is-selected">
                                                        <h5 className="checkout-address-title">جلال بهرامی راد</h5>
                                                        <p className="checkout-address-text">
                                                            <span>خراسان شمالی، بجنورد،خراسان شمالی-بجنورد-طالقانی
                                                                غربی</span>
                                                        </p>
                                                        <ul className="checkout-address-list">
                                                            <li>
                                                                <ul className="checkout-address-contact-info">
                                                                    <li className="">کدپستی: <span>۹۹۹۹۹۹۹۹۹۹</span></li>
                                                                    <li>شماره همراه: <span>09xxxxxxxxx</span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>
                                                                        <button className="checkout-address-btn-edit"
                                                                            data-toggle="modal"
                                                                            data-target="#modal-location-edit">ویرایش</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="checkout-address-btn-remove"
                                                                            data-toggle="modal"
                                                                            data-target="#remove-location">حذف</button>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <button className="checkout-address-btn-submit">سفارش به این آدرس
                                                            ارسال می‌شود.</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout-address-row">
                                                <div className="checkout-address-col">
                                                    <div className="checkout-address-box">
                                                        <h5 className="checkout-address-title">جلال بهرامی راد</h5>
                                                        <p className="checkout-address-text">
                                                            <span>خراسان شمالی، بجنورد،خراسان شمالی-بجنورد</span>
                                                        </p>
                                                        <ul className="checkout-address-list">
                                                            <li>
                                                                <ul className="checkout-address-contact-info">
                                                                    <li>کدپستی: <span>۹۹۹۹۹۹۹۹۹۹</span>
                                                                    </li>
                                                                    <li>شماره همراه: <span>09xxxxxxxxx</span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>
                                                                        <button className="checkout-address-btn-edit"
                                                                            data-toggle="modal"
                                                                            data-target="#modal-location-edit">ویرایش</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="checkout-address-btn-remove"
                                                                            data-toggle="modal"
                                                                            data-target="#remove-location">حذف</button>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <button className="checkout-address-btn-submit">ارسال سفارش به این
                                                            آدرس</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="checkout-address-cancel" id="cancel-change-address-btn"></button>
                                    </div>
                                    {/* <!-- Start Modal new location --> */}
                                    <div className="modal fade" id="modal-location" role="dialog"
                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-lg send-info modal-dialog-centered"
                                            role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalCenterTitle">
                                                        <i className="now-ui-icons location_pin"></i>
                                                        افزودن آدرس جدید
                                                    </h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12">
                                                            <div className="form-ui dt-sl">
                                                                <form className="form-account" action="">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    نام و نام خانوادگی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input className="input-ui pr-2 text-right"
                                                                                    type="text"
                                                                                    placeholder="نام خود را وارد نمایید"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    شماره موبایل
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input
                                                                                    className="input-ui pl-2 dir-ltr text-left"
                                                                                    type="text"
                                                                                    placeholder="09xxxxxxxxx"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    استان
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <div className="custom-select-ui">
                                                                                    <select className="right">
                                                                                        <option value="khrasan-north">
                                                                                            خراسان شمالی
                                                                                        </option>
                                                                                        <option value="tehran">
                                                                                            تهران
                                                                                        </option>
                                                                                        <option value="esfahan">
                                                                                            اصفهان
                                                                                        </option>
                                                                                        <option value="shiraz">
                                                                                            شیراز
                                                                                        </option>
                                                                                        <option value="tabriz">
                                                                                            تبریز
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    شهر
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <div className="custom-select-ui">
                                                                                    <select className="right">
                                                                                        <option value="bojnourd">
                                                                                            بجنورد
                                                                                        </option>
                                                                                        <option value="garme">
                                                                                            گرمه
                                                                                        </option>
                                                                                        <option value="shirvan">
                                                                                            شیروان
                                                                                        </option>
                                                                                        <option value="mane">
                                                                                            مانه و سملقان
                                                                                        </option>
                                                                                        <option value="esfarayen">
                                                                                            اسفراین
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    آدرس پستی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <textarea
                                                                                    className="input-ui pr-2 text-right"
                                                                                    placeholder=" آدرس تحویل گیرنده را وارد نمایید"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    کد پستی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input
                                                                                    className="input-ui pl-2 dir-ltr text-left placeholder-right"
                                                                                    type="text"
                                                                                    placeholder=" کد پستی را بدون خط تیره بنویسید"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 pr-4 pl-4">
                                                                            <button type="button"
                                                                                className="btn btn-sm btn-primary btn-submit-form">ثبت
                                                                                و
                                                                                ارسال به این آدرس</button>
                                                                            <button type="button"
                                                                                className="btn-link-border float-left mt-2">انصراف
                                                                                و بازگشت</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12">
                                                            {/* <!-- Google Map Start --> */}
                                                            <div className="goole-map">
                                                                <div id="map" style={{height:"440px"}}></div>
                                                            </div>
                                                            {/* <!-- Google Map End --> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Modal new location --> */}

                                    {/* <!-- Start Modal location edit --> */}
                                    <div className="modal fade" id="modal-location-edit" role="dialog"
                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-lg send-info modal-dialog-centered"
                                            role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalCenterTitle">
                                                        <i className="now-ui-icons location_pin"></i>
                                                        ویرایش آدرس
                                                    </h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12">
                                                            <div className="form-ui dt-sl">
                                                                <form className="form-account" action="">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    نام و نام خانوادگی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input className="input-ui pr-2 text-right"
                                                                                    type="text"
                                                                                    placeholder="نام خود را وارد نمایید"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    شماره موبایل
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input
                                                                                    className="input-ui pl-2 dir-ltr text-left"
                                                                                    type="text"
                                                                                    placeholder="09xxxxxxxxx"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    استان
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <div className="custom-select-ui">
                                                                                    <select className="right">
                                                                                        <option value="khrasan-north">
                                                                                            خراسان شمالی
                                                                                        </option>
                                                                                        <option value="tehran">
                                                                                            تهران
                                                                                        </option>
                                                                                        <option value="esfahan">
                                                                                            اصفهان
                                                                                        </option>
                                                                                        <option value="shiraz">
                                                                                            شیراز
                                                                                        </option>
                                                                                        <option value="tabriz">
                                                                                            تبریز
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    شهر
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <div className="custom-select-ui">
                                                                                    <select className="right">
                                                                                        <option value="bojnourd">
                                                                                            بجنورد
                                                                                        </option>
                                                                                        <option value="garme">
                                                                                            گرمه
                                                                                        </option>
                                                                                        <option value="shirvan">
                                                                                            شیروان
                                                                                        </option>
                                                                                        <option value="mane">
                                                                                            مانه و سملقان
                                                                                        </option>
                                                                                        <option value="esfarayen">
                                                                                            اسفراین
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    آدرس پستی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <textarea
                                                                                    className="input-ui pr-2 text-right"
                                                                                    placeholder=" آدرس تحویل گیرنده را وارد نمایید"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mb-2">
                                                                            <div className="form-row-title">
                                                                                <h4>
                                                                                    کد پستی
                                                                                </h4>
                                                                            </div>
                                                                            <div className="form-row">
                                                                                <input
                                                                                    className="input-ui pl-2 dir-ltr text-left placeholder-right"
                                                                                    type="text"
                                                                                    placeholder=" کد پستی را بدون خط تیره بنویسید"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 pr-4 pl-4">
                                                                            <button type="button"
                                                                                className="btn btn-sm btn-primary btn-submit-form">ثبت
                                                                                و
                                                                                ارسال به این آدرس</button>
                                                                            <button type="button"
                                                                                className="btn-link-border float-left mt-2">انصراف
                                                                                و بازگشت</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12">
                                                            {/* <!-- Google Map Start --> */}
                                                            <div className="goole-map">
                                                                <div id="map-edit" style={{height:"440px"}}></div>
                                                            </div>
                                                            {/* <!-- Google Map End --> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Modal location edit --> */}

                                    {/* <!-- Start Modal remove-location --> */}
                                    <div className="modal fade" id="remove-location" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title mb-3" id="exampleModalLabel">آیا مطمئنید که
                                                        این آدرس حذف شود؟</h5>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"
                                                        className="remodal-general-alert-button remodal-general-alert-button--cancel"
                                                        data-dismiss="modal">خیر</button>
                                                    <button type="button"
                                                        className="remodal-general-alert-button remodal-general-alert-button--approve">بله</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Modal remove-location --> */}
                                </div>
                            </div>
                            <form method="post" id="shipping-data-form" className="dt-sn dt-sn--box pt-3 pb-3">
                                <div className="section-title text-sm-title title-wide no-after-title-wide mb-0 px-res-1">
                                    <h2>انتخاب نحوه ارسال</h2>
                                </div>
                                <div className="checkout-shipment border-bottom pb-3 mb-4">
                                    <div className="custom-control custom-radio pl-0 pr-3">
                                        <input type="radio" className="custom-control-input" name="radio1" id="radio1"
                                            value="option1" checked/>
                                        <label for="radio1" className="custom-control-label">
                                            عادی
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio  pl-0 pr-3">
                                        <input type="radio" className="custom-control-input" name="radio1" id="radio2"
                                            value="option2"/>
                                        <label for="radio2" className="custom-control-label">
                                            سریع‌ (مرسوله‌ها در سریع‌ترین زمان ممکن ارسال می‌شوند)
                                        </label>
                                    </div>
                                </div>
                                <div className="section-title text-sm-title title-wide no-after-title-wide mb-0 px-res-1">
                                    <h2>مرسوله ۱ از ۱</h2>
                                </div>
                                <div className="checkout-pack">
                                    <section className="products-compact">
                                        {/* <!-- Start Product-Slider --> */}
                                        <div className="col-12">
                                            <div className="products-compact-slider carousel-md owl-carousel owl-theme">
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/07.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">مانتو زنانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/017.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">کت مردانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/013.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">مانتو زنانه مدل هودی تیک
                                                                    تین</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/09.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">مانتو زنانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/010.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">مانتو زنانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/011.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">مانتو زنانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product-card mb-3">
                                                        <a className="product-thumb" href="shop-single.html">
                                                            <img src="./assets/img/products/019.jpg"
                                                                alt="Product Thumbnail"/>
                                                        </a>
                                                        <div className="product-card-body">
                                                            <h5 className="product-title">
                                                                <a href="shop-single.html">تیشرت مردانه</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Product-Slider --> */}
                                    </section>
                                    <div className="row mx-0">
                                        <div className="col-12">
                                            <div className="checkout-tab-times dt-sl">
                                                <ul className="nav nav-tabs dt-sl" id="myTab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="home-tab" data-toggle="tab"
                                                            href="#home" role="tab" aria-controls="home"
                                                            aria-selected="true">
                                                            سه شنبه
                                                            <span>26 شهریور</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-toggle="tab"
                                                            href="#profile" role="tab" aria-controls="profile"
                                                            aria-selected="false">
                                                            چهارشنبه
                                                            <span>27 شهریور</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link disabled" id="contact-tab" data-toggle="tab"
                                                            href="#contact" role="tab" aria-controls="contact"
                                                            aria-selected="false">
                                                            پنج شنبه
                                                            <span>28 شهریور</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content dt-sl" id="myTabContent">
                                                    <div className="tab-pane px-2 pt-2 fade show active" id="home"
                                                        role="tabpanel" aria-labelledby="home-tab">
                                                        <div className="custom-control custom-radio pl-0 pr-3">
                                                            <input type="radio" className="custom-control-input"
                                                                name="radio2" id="radio4" value="option1"/>
                                                            <label for="radio4" className="custom-control-label">
                                                                ساعت 11 تا 13
                                                            </label>
                                                        </div>

                                                        <div className="custom-control custom-radio pl-0 pr-3">
                                                            <input type="radio" className="custom-control-input"
                                                                name="radio2" id="radio5" value="option2" checked=""/>
                                                            <label for="radio5" className="custom-control-label">
                                                                ساعت 13 تا 15
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane px-2 pt-2 fade" id="profile" role="tabpanel"
                                                        aria-labelledby="profile-tab">
                                                        <div className="custom-control custom-radio pl-0 pr-3">
                                                            <input type="radio" className="custom-control-input"
                                                                name="radio3" id="radio6" value="option1"/>
                                                            <label for="radio6" className="custom-control-label">
                                                                ساعت 11 تا 13
                                                            </label>
                                                        </div>

                                                        <div className="custom-control custom-radio pl-0 pr-3">
                                                            <input type="radio" className="custom-control-input"
                                                                name="radio3" id="radio7" value="option2" checked=""/>
                                                            <label for="radio7" className="custom-control-label">
                                                                ساعت 13 تا 15
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane px-2 pt-2 fade" id="contact" role="tabpanel"
                                                        aria-labelledby="contact-tab">...</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="checkout-time-table checkout-time-table-time">
                                            <div className="col-12">
                                                <div className="radio-box custom-control custom-radio pl-0 pr-3">
                                                    <input type="radio" className="custom-control-input" name="post-pishtaz"
                                                        id="1" value="1" checked/>
                                                    <label for="1" className="custom-control-label">
                                                        <img src="./assets/img/svg/d86ea8ec.svg"
                                                            className="checkout-additional-options-checkbox-image" />
                                                        <div className="content-box">
                                                            <div
                                                                className="checkout-time-table-title-bar checkout-time-table-title-bar-city">
                                                                بازه تحویل سفارش: زمان تقریبی تحویل از
                                                                <span>۱۳ خرداد</span>
                                                                تا
                                                                <span>۲۰ خرداد</span>
                                                            </div>
                                                            <ul className="checkout-time-table-subtitle-bar">
                                                                <li>
                                                                    شیوه ارسال : پست پیشتاز با ظرفیت اختصاصی برای دیجی
                                                                    کالا
                                                                </li>
                                                                <li>
                                                                    هزینه ارسال:
                                                                    <span className="">رایگان</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="radio-box custom-control custom-radio pl-0 pr-3">
                                                    <input type="radio" className="custom-control-input" name="post-pishtaz"
                                                        id="2" value="2"/>
                                                    <label for="2" className="custom-control-label">
                                                        <img src="./assets/img/svg/d86ea8ec.svg"
                                                            className="checkout-additional-options-checkbox-image" />
                                                        <div className="content-box">
                                                            <div
                                                                className="checkout-time-table-title-bar checkout-time-table-title-bar-city">
                                                                بازه تحویل سفارش: زمان تقریبی تحویل از
                                                                <span>۱۳ خرداد</span>
                                                                تا
                                                                <span>۲۰ خرداد</span>
                                                            </div>
                                                            <ul className="checkout-time-table-subtitle-bar">
                                                                <li>
                                                                    شیوه ارسال : پست پیشتاز با ظرفیت اختصاصی برای دیجی
                                                                    کالا
                                                                </li>
                                                                <li>
                                                                    هزینه ارسال:
                                                                    <span className="">رایگان</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title text-sm-title title-wide no-after-title-wide mb-0 px-res-1">
                                    <h2>صدور فاکتور</h2>
                                </div>
                                <div className="checkout-invoice">
                                    <div className="checkout-invoice-headline">
                                        <div className="custom-control custom-checkbox pl-0 pr-3">
                                            <input type="checkbox" className="custom-control-input" checked/>
                                            <label className="custom-control-label">درخواست ارسال فاکتور خرید</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5">
                                <a href="#" className="float-right border-bottom-dt"><i
                                        className="mdi mdi-chevron-double-right"></i>بازگشت به سبد خرید</a>
                                <a href="#" className="float-left border-bottom-dt">تایید و ادامه ثبت سفارش<i
                                        className="mdi mdi-chevron-double-left"></i></a>
                            </div>
                        </section>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-12 w-res-sidebar sticky-sidebar">
                        <div className="dt-sn dt-sn--box border mb-2">
                            <ul className="checkout-summary-summary">
                                <li>
                                    <span>مبلغ کل (۲ کالا)</span><span>۱۶,۸۹۷,۰۰۰ تومان</span>
                                </li>
                                <li className="checkout-summary-discount">
                                    <span>سود شما از خرید</span><span><span>(۱٪)</span>۲۰۰,۰۰۰
                                        تومان</span>
                                </li>
                                <li>
                                    <span>هزینه ارسال<span className="help-sn" data-toggle="tooltip" data-html="true"
                                            data-placement="bottom"
                                            title="<div className='help-container is-right'><div className='help-arrow'></div><p className='help-text'>هزینه ارسال مرسولات می‌تواند وابسته به شهر و آدرس گیرنده متفاوت باشد. در صورتی که هر یک از مرسولات حداقل ارزشی برابر با ۱۵۰هزار تومان داشته باشد، آن مرسوله بصورت رایگان ارسال می‌شود.<br>'حداقل ارزش هر مرسوله برای ارسال رایگان، می تواند متغیر باشد.'</p></div>">
                                            <span className="mdi mdi-information-outline"></span>
                                        </span></span><span>وابسته به آدرس</span>
                                </li>
                                <li className="checkout-club-container">
                                    <span>دیدیکلاب<span className="help-sn" data-toggle="tooltip" data-html="true"
                                            data-placement="bottom"
                                            title="<div className='help-container is-right'><div className='help-arrow'></div><p className='help-text'>با امتیازهای خود در باشگاه مشتریان دیجی کالا (دیجی کلاب) از بین جوایز متنوع انتخاب کنید.</p></div>">
                                            <span className="mdi mdi-information-outline"></span>
                                        </span></span><span><span>۱۵۰+</span><span> امتیاز</span></span>
                                </li>
                            </ul>
                            <div className="checkout-summary-devider">
                                <div></div>
                            </div>
                            <div className="checkout-summary-content">
                                <div className="checkout-summary-price-title">مبلغ قابل پرداخت:</div>
                                <div className="checkout-summary-price-value">
                                    <span className="checkout-summary-price-value-amount">۱۶,۶۹۷,۰۰۰</span>
                                    تومان
                                </div>
                                <a href="#" className="mb-2 d-block">
                                    <button className="btn-primary-cm btn-with-icon w-100 text-center pr-0 pl-0">
                                        <i className="mdi mdi-arrow-left"></i>
                                        تایید و ادامه ثبت سفارش
                                    </button>
                                </a>
                                <div>
                                    <span>
                                        کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش
                                        مراحل بعدی را تکمیل کنید.
                                    </span><span className="help-sn" data-toggle="tooltip" data-html="true"
                                        data-placement="bottom"
                                        title="<div className='help-container is-right'><div className='help-arrow'></div><p className='help-text'>محصولات موجود در سبد خرید شما تنها در صورت ثبت و پرداخت سفارش برای شما رزرو می‌شوند. در صورت عدم ثبت سفارش، دیجی‌کالا هیچگونه مسئولیتی در قبال تغییر قیمت یا موجودی این کالاها ندارد.</p></div>">
                                        <span className="mdi mdi-information-outline"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="dt-sn dt-sn--box checkout-feature-aside pt-4">
                            <ul>
                                <li className="checkout-feature-aside-item">
                                    <img src="./assets/img/svg/return-policy.svg" alt=""/>
                                    هفت روز ضمانت تعویض
                                </li>
                                <li className="checkout-feature-aside-item">
                                    <img src="./assets/img/svg/payment-terms.svg" alt=""/>
                                    پرداخت در محل با کارت بانکی
                                </li>
                                <li className="checkout-feature-aside-item">
                                    <img src="./assets/img/svg/delivery.svg" alt=""/>
                                    تحویل اکسپرس
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
