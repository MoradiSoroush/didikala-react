import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Profile.css";

import SplideProductCarousel from "../../Components/ProductCarousel/MostSellsCarousel";
import { mostSellsProducts } from "./../../datas";
import ProfileSidebar from "./Components/ProfileSidebar/ProfileSidebar";

export default function Profile() {
  return (
    <main class="main-content dt-sl mb-3">
      <div class="container main-container">
        <div class="row profile-row">
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 sticky-sidebar">
            <ProfileSidebar />
          </div>

          <Outlet />
        </div>

        <section class="slider-section dt-sl mt-5 mb-5">
          <div class="row mb-3">
            <div class="col-12">
              <div class="section-title text-sm-title title-wide no-after-title-wide">
                <h2>محصولات پیشنهادی برای شما</h2>
                <Link to="">مشاهده همه</Link>
              </div>
            </div>

            <div class="col-12 px-res-0">
              <div class="product-carousel carousel-lg owl-carousel owl-theme">
                <SplideProductCarousel products={mostSellsProducts} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
