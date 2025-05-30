import React from 'react'

export default function ProductComment() {
  return (
    <div>
          <main class="main-content dt-sl mb-3">
            <div class="container main-container">
                {/* <!-- Start Product --> */}
                <div class="dt-sn mb-5 dt-sl">
                    <div class="row">
                        {/* <!-- Product Thumbnail--> */}
                        <div class="col-lg-4 col-md-6 pb-5">
                            <div class="product-thumbnail text-center">
                                <a href="#">
                                    <img src="./assets/img/single-product/single-product-comment-thumbnail.jpg"
                                        class="img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Product Info --> */}
                        <div class="col-lg-8 col-md-6 pb-5">
                            <div class="product-info dt-sl">
                                <div class="product-title dt-sl">
                                    <h1>
                                        گوشی موبایل سامسونگ مدل Galaxy A20 SM-A205F/DS دو سیم کارت ظرفیت 32گیگابایت
                                    </h1>
                                    <h3>Samsung Galaxy A20 SM-A205F/DS Dual SIM 32GB Mobile Phone</h3>
                                </div>
                                <div class="comments-product-attributes px-3 dt-sl">
                                    <div class="row">
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">کیفیت ساخت</div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">ارزش خرید به نسبت قیمت
                                            </div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">نوآوری</div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">امکانات و قابلیت ها</div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">سهولت استفاده</div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                        <div class="col-sm-6 col-12 mb-3">
                                            <div class="comments-product-attributes-title">طراحی و ظاهر</div>
                                            <input id="ex19" type="text" data-provide="slider"
                                                data-slider-ticks="[1, 2, 3, 4, 5]"
                                                data-slider-ticks-labels='["خیلی بد", "بد", "معمولی","خوب","عالی"]'
                                                data-slider-min="1" data-slider-max="5" data-slider-step="1"
                                                data-slider-value="3" data-slider-tooltip="hide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row comments-add-col--content">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-ui">
                                <form class="px-5" onsubmit="return false">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-row-title mb-2">عنوان نظر شما (اجباری)</div>
                                            <div class="form-row">
                                                <input class="input-ui pr-2" type="text"
                                                    placeholder="عنوان نظر خود را بنویسید"/>
                                            </div>
                                        </div>
                                        <div class="col-12 form-comment-title--positive mt-2">
                                            <div class="form-row-title mb-2 pr-2">
                                                نقاط قوت
                                            </div>
                                            <div id="advantages" class="form-row">
                                                <div class="ui-input--add-point">
                                                    <input class="input-ui pr-2 ui-input-field" type="text"
                                                        id="advantage-input" autocomplete="off" value=""/>
                                                    <button class="ui-input-point js-icon-form-add"
                                                        type="button"></button>
                                                </div>
                                                <div class="form-comment-dynamic-labels js-advantages-list"></div>
                                            </div>
                                        </div>
                                        <div class="col-12 form-comment-title--negative mt-2">
                                            <div class="form-row-title mb-2 pr-2">
                                                نقاط ضعف
                                            </div>
                                            <div id="disadvantages" class="form-row">
                                                <div class="ui-input--add-point">
                                                    <input class="input-ui pr-2 ui-input-field" type="text"
                                                        id="disadvantage-input" autocomplete="off" value=""/>
                                                    <button class="ui-input-point js-icon-form-add"
                                                        type="button"></button>
                                                </div>
                                                <div class="form-comment-dynamic-labels js-disadvantages-list"></div>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-5">
                                            <div class="form-row-title mb-2">متن نظر شما (اجباری)</div>
                                            <div class="form-row">
                                                <textarea class="input-ui pr-2 pt-2" rows="5"
                                                    placeholder="متن خود را بنویسید"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-2 mb-2 px-0">
                                            <div class="product-offer-question">
                                                <div
                                                    class="section-title text-sm-title title-wide mb-1 no-after-title-wide">
                                                    <h2 class="font-weight-bold">آیا خرید این محصول را به دوستانتان
                                                        پیشنهاد می کنید؟</h2>
                                                </div>
                                                <div class="product-offer-question-option">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio"
                                                            class="custom-control-input"/>
                                                        <label class="custom-control-label" for="customRadio1">پیشنهاد
                                                            می کنم</label>
                                                    </div>
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio"
                                                            class="custom-control-input"/>
                                                        <label class="custom-control-label"
                                                            for="customRadio2">خیر،پیشنهاد نمی کنم</label>
                                                    </div>
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio"
                                                            class="custom-control-input"/>
                                                        <label class="custom-control-label" for="customRadio3">نظری
                                                            ندارم</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 px-0">
                                            <p class="d-block">با “ثبت نظر” موافقت خود را با <a href="#"
                                                    class="border-bottom-dt" target="_blank">قوانین
                                                    انتشار محتوا</a> در دیجی‌کالا اعلام می‌کنم.</p>
                                            <button class="btn btn btn-primary px-3">
                                                ثبت نظر
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <h3>دیگران را با نوشتن نظرات خود، برای انتخاب این محصول راهنمایی کنید.</h3>
                            <div class="desc-comment">
                                <p>لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:</p>
                                <p>فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای خالی (Space)
                                    بیش‌از‌حدِ معمول، شکلک یا ایموجی استفاده نکنید و از کشیدن حروف یا کلمات با
                                    صفحه‌کلید بپرهیزید.</p>
                                <p>نظرات خود را براساس تجربه و استفاده‌ی عملی و با دقت به نکات فنی ارسال کنید؛
                                    بدون
                                    تعصب به محصول خاص، مزایا و معایب را بازگو کنید و بهتر است از ارسال نظرات
                                    چندکلمه‌‌ای خودداری کنید.</p>
                                <p>بهتر است در نظرات خود از تمرکز روی عناصر متغیر مثل قیمت، پرهیز کنید.</p>
                                <p>به کاربران و سایر اشخاص احترام بگذارید. پیام‌هایی که شامل محتوای توهین‌آمیز و
                                    کلمات نامناسب باشند، حذف می‌شوند.</p>
                                <p>از ارسال لینک‌های سایت‌های دیگر و ارایه‌ی اطلاعات شخصی خودتان مثل شماره تماس،
                                    ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.</p>
                                <p>با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست راهنمایی در این بخش
                                    خودداری کرده و سوالات خود را در بخش «پرسش و پاسخ» مطرح کنید.</p>
                                <p>هرگونه نقد و نظر در خصوص سایت دیجی‌کالا، خدمات و درخواست کالا را با ایمیل
                                    <a href="mailto:info@digikala.com">
                                        info@digikala.com
                                    </a>
                                    یا با شماره‌ی

                                    <a href="tel: +982161930000">
                                        ۶۱۹۳۰۰۰۰ - ۰۲۱
                                    </a>
                                    در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری کنید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Product --> */}
            </div>
        </main>
    </div>
  )
}
