import React from 'react'
import "./ErrorPage.css"



export default function ErrorPage ()  {



  return (
    <main class="main-content dt-sl mb-3">
    <div class="container main-container">
        <div class="row">
            <div class="col-12">
                <div class="dt-sl pt-3 pb-5">
                    <div class="error-page text-center">
                        <h1>صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
                        <a href="/test" class="btn-primary-cm">ادامه خرید در دیدیکالا</a>
                        <img src="./assets/img/theme/404.png" class="img-fluid" width="60%" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}
