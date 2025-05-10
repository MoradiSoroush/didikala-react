import React from 'react'

export default function Wellcome() {
  return (
    <div>
       <main class="main-content dt-sl mt-4 mb-3">
            <div class="container main-container">
                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7 col-12 mx-auto">
                        <div class="logo-area text-center mb-3">
                            <a href="#"><img src="./assets/img/logo.png" class="img-fluid" alt="logo"/></a>
                        </div>
                        <div class="auth-wrapper form-ui border pt-4">
                            <div class="section-title title-wide mb-1 pb-0 no-after-title-wide">
                                <h2 class="font-weight-bold">به دیدیکالا خوش آمدید</h2>
                            </div>
                            <div class="circle-box-icon">
                                <i class="mdi mdi-account-circle-outline"></i>
                            </div>
                            <h5 class="text-center font-weight-bold">حساب کاربری شما در دیدیکالا ساخته شد</h5>
                            <div class="message-light">
                                اکنون می‌توانید به صفحه‌ای که در آن بودید بازگردید و یا با تکمیل اطلاعات حساب کاربری خود
                                به کلیه امکانات و سرویس‌های تاپ کالا و سرویس‌های وابسته به آن دسترسی داشته باشید
                            </div>
                            <div class="text-center mt-5 mb-4">
                                <a href="#" class="btn-primary-cm btn-with-icon">
                                    <i class="mdi mdi-account-circle-outline"></i>
                                    تکمیل حساب کاربری
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
