import React from 'react'

export default function CategoryFAQ() {
  return (
    <div>
      <main class="main-content dt-sl mb-3">
            <div class="page-cover mb-2">
                <div class="page-cover-title">
                    <h1>پاسخ پرسش‌های پرتکرار</h1>
                    <div class="form-ui">
                        <form action="">
                            <div class="form-row">
                                <input type="text" class="input-ui pr-2" placeholder="پرسش خود را جستجو کنید"/>
                                <button class="btn btn-info">جستجو</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container main-container">
                <div class="row">
                    <div class="col-12">
                        <div class="page info-page-cats dt-sl dt-sn pt-3 pb-2">
                            <div class="row">
                                <div class="col-12 pr-4 mb-3">
                                    <div class="section-title title-wide no-title-wide-before mb-1 no-after-title-wide">
                                        <img src="./assets/img/faq/1.png" width="60" alt=""/>
                                        <h2 class="font-weight-bold">ورود و ثبت نام</h2>
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
                                                        چطور میتوانم امتیاز‌ بگیریم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما از سه راه می‌توانید امتیاز بگیرید:</p>
                                                    <ul>
                                                        <li>خرید کالا</li>
                                                        <li>ثبت نظر</li>
                                                        <li>دعوت از دوستان برای خرید از دیجی‌کالا</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        میتوانم سفارش خود را در محل پرداخت کنم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت کنید، در
                                                        برخی موارد امکان پرداخت سفارش در محل وجود ندارد.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ، صفحه تماس با
                                                        ما و تلفن درخواست خود را ثبت نمایید.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingFour">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        چطور میتوانم سفارشم را لغو کنم ؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از
                                                        ارسال آن منصرف شدید را لغو نمایید.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="page dt-sl dt-sn pb-2 mb-4">
                            <div class="row">
                                <div class="col-12 pr-4 mb-3">
                                    <div class="section-title title-wide mb-1 no-after-title-wide">
                                        <h2 class="font-weight-bold">پرتکرارترین پرسش‌ها</h2>
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
                                                        چطور میتوانم امتیاز‌ بگیریم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما از سه راه می‌توانید امتیاز بگیرید:</p>
                                                    <ul>
                                                        <li>خرید کالا</li>
                                                        <li>ثبت نظر</li>
                                                        <li>دعوت از دوستان برای خرید از دیجی‌کالا</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        میتوانم سفارش خود را در محل پرداخت کنم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>بله شما میتوانید سفارش خود را هنگام تحویل کالا پرداخت کنید، در
                                                        برخی موارد امکان پرداخت سفارش در محل وجود ندارد.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما میتوانید از طریق فرم درخواست مرجوعی در پروفایل ، صفحه تماس با
                                                        ما و تلفن درخواست خود را ثبت نمایید.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingFour">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-right collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                        چطور میتوانم سفارشم را لغو کنم ؟
                                                        <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p>شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از
                                                        ارسال آن منصرف شدید را لغو نمایید.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="page-question-not-found">
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-question-not-found-text">
                                        جواب یا پرسش خود را پیدا نکردید؟
                                        
                                        روش‌های ارتباط با ما
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 text-center">
                                    <img src="./assets/img/faq/phone.svg" alt=""/>
                                    <div class="page-contact-option-text">تماس تلفنی</div>
                                    <div class="page-contact-option-text mr-3">۰۲۱-۶۱۹۳۰۰۰۰</div>
                                </div>
                                <div class="col-md-6 col-sm-12 text-center">
                                    <img src="./assets/img/faq/email.svg" class="mb-5" alt=""/>
                                    <a href="#" class="btn btn-info pr-4 pl-4">ارسال پیام</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
  )
}
