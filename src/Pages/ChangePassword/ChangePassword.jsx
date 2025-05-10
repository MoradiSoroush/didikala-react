import React from 'react'

export default function ChangePassword() {
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
                            <div class="section-title title-wide mb-1 no-after-title-wide">
                                <h2 class="font-weight-bold">تغییر رمز عبور</h2>
                            </div>
                            <form action="#">
                                <div class="form-row-title">
                                    <h3>رمز عبور قبلی</h3>
                                </div>
                                <div class="form-row with-icon">
                                    <input type="password" class="input-ui pr-2"
                                        placeholder="رمز عبور خود را وارد نمایید"/>
                                    <i class="mdi mdi-lock-open-variant-outline"></i>
                                </div>
                                <div class="form-row-title">
                                    <h3>رمز عبور جدید</h3>
                                </div>
                                <div class="form-row with-icon">
                                    <input type="password" class="input-ui pr-2"
                                        placeholder="رمز عبور خود را وارد نمایید"/>
                                    <i class="mdi mdi-lock-reset"></i>
                                </div>
                                <div class="form-row-title">
                                    <h3>تکرار رمز عبور جدید</h3>
                                </div>
                                <div class="form-row with-icon">
                                    <input type="password" class="input-ui pr-2"
                                        placeholder="رمز عبور خود را وارد نمایید"/>
                                    <i class="mdi mdi-lock-reset"></i>
                                </div>
                                <div class="form-row mt-2">
                                    <div class="custom-control custom-checkbox float-right mt-2">
                                        <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                                        <label class="custom-control-label" for="customCheck3">
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>
                                </div>
                                <div class="form-row mt-3">
                                    <button class="btn-primary-cm btn-with-icon mx-auto w-100">
                                        <i class="mdi mdi-lock-reset"></i>
                                        تغییر رمز عبور
                                    </button>
                                </div>
                            </form>
                            <div class="form-footer mt-3">
                                <div>
                                    <span class="font-weight-bold">کاربر جدید هستید؟</span>
                                    <a href="#" class="mr-3 mt-2">ثبت نام در دیدیکالا</a>
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
