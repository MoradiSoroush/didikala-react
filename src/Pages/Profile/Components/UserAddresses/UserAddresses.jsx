import React from 'react'

export default function UserAddresses() {
  return (
   
            <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                        <div class="row">
                            <div class="col-12">
                                <div
                                    class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
                                    <h2>آدرس ها</h2>
                                </div>
                                <div class="dt-sl">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12">
                                            <div class="card-horizontal-address text-center px-4">
                                                <button class="checkout-address-location" data-toggle="modal"
                                                    data-target="#modal-location">
                                                    <strong>ایجاد آدرس جدید</strong>
                                                    <i class="mdi mdi-map-marker-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12">
                                            <div class="card-horizontal-address">
                                                <div class="card-horizontal-address-desc">
                                                    <h4 class="card-horizontal-address-full-name">جلال بهرامی راد</h4>
                                                    <p>
                                                        خراسان شمالی، بجنورد، خراسان شمالی-بجنورد
                                                    </p>
                                                </div>
                                                <div class="card-horizontal-address-data">
                                                    <ul class="card-horizontal-address-methods float-right">
                                                        <li class="card-horizontal-address-method">
                                                            <i class="mdi mdi-email-outline"></i>
                                                            کدپستی : <span>۹۹۹۹۹۹۹۹۹۹</span>
                                                        </li>
                                                        <li class="card-horizontal-address-method">
                                                            <i class="mdi mdi-cellphone-iphone"></i>
                                                            تلفن همراه : <span>09xxxxxxxxx</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card-horizontal-address-actions">
                                                        <button class="btn-note" data-toggle="modal"
                                                            data-target="#modal-location-edit">ویرایش</button>
                                                        <button class="btn-note" data-toggle="modal"
                                                            data-target="#remove-location">حذف</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12">
                                            <div class="card-horizontal-address">
                                                <div class="card-horizontal-address-desc">
                                                    <h4 class="card-horizontal-address-full-name">جلال بهرامی راد</h4>
                                                    <p>
                                                        خراسان شمالی، بجنورد، خراسان شمالی-بجنورد
                                                    </p>
                                                </div>
                                                <div class="card-horizontal-address-data">
                                                    <ul class="card-horizontal-address-methods float-right">
                                                        <li class="card-horizontal-address-method">
                                                            <i class="mdi mdi-email-outline"></i>
                                                            کدپستی : <span>۹۹۹۹۹۹۹۹۹۹</span>
                                                        </li>
                                                        <li class="card-horizontal-address-method">
                                                            <i class="mdi mdi-cellphone-iphone"></i>
                                                            تلفن همراه : <span>09xxxxxxxxx</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card-horizontal-address-actions">
                                                        <button class="btn-note" data-toggle="modal"
                                                            data-target="#modal-location-edit">ویرایش</button>
                                                        <button class="btn-note" data-toggle="modal"
                                                            data-target="#remove-location">حذف</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
   
  )
}
