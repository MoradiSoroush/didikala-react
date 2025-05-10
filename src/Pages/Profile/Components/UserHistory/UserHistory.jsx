import React, { useState } from "react";
import ProfileMenu from "../ProfileMenuSection/ProfileMenu";
import { historyProducts } from "../../../../datas";
import ErrorMessage from "../../../ErrorMessage/ErrorMessage";
import Rating from "./../../../../Components/Rating/Rating";
export default function UserHistory() {
  const [recentProducts, setRecentProducts] = useState(historyProducts);

  return (
    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
            <h2>بازدیدهای اخیر</h2>
          </div>
          <div class="dt-sl">
            <div class="row">
              {recentProducts.length ? (
                recentProducts.map((product) => (
                  <div className="col-lg-6 col-md-12" key={product.id}>
                    <div class="card-horizontal-product border-bottom rounded-0">
                      <div class="card-horizontal-product-thumb">
                        <a href="#">
                          <img src={product.img} alt="" />
                        </a>
                      </div>
                      <div class="card-horizontal-product-content">
                        <div class="card-horizontal-product-title">
                          <a href="#">
                            <h3>{product.name}</h3>
                          </a>
                        </div>
                        <div class="rating-stars">
                          <Rating score={product.rating} />
                        </div>
                        <div class="card-horizontal-product-price">
                          <span>{product.price}</span>
                        </div>
                        <div class="card-horizontal-product-buttons">
                          <a href="#" class="btn btn-outline-info">
                            کالاهای مشابه
                          </a>
                          <button class="remove-btn">
                            <i class="mdi mdi-trash-can-outline"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
               <ErrorMessage msg="تاریخچه ای موجود نیست"/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
