import React from "react";
import "./Home.css";
import useLocalStorage from "../../Hooks/useLocalStorage";

import BrandSlider from "../../Components/BrandSlider/BrandSlider";
import CustomCarousel from "../../Components/Slider/SplideSlider";
import SplideProductCarousel from "../../Components/ProductCarousel/MostSellsCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SplideCategoryCarousel from "../../Components/CategpriesSlider/CategoriesSlider";
import TeamOfferProducts from "../../Components/TeamOfferProducts/TeamOfferProducts";
import {LargeBanner,SmallBannerList} from "../../Components/Banners/Banners";

import {
  images,
  topSliderAsideImages,
  mostSellsProducts,
  SuggestionProductsData,
  categoryItems,
  offerProducts,
  brandImages,
  banners
} from "../../datas";

export default function Home() {
  return (
    <>
      <main class="main-content">
        <div class="main-container">
          <Container>
            <div class="home-top-slider">
              <aside class="sidebar" style={{ marginTop: "0" }}>
                <div class="sidebar-banner" style={{ marginTop: "0" }}>
                  <CustomCarousel
                    items={topSliderAsideImages}
                    options={{
                      type: "loop",
                      pagination: false,
                      arrows: false,
                    }}
                  />
                </div>
              </aside>

              <section id="main-slider" class="main-slider">
                <CustomCarousel items={images} />
              </section>
            </div>

            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col sm={10} class="grid-item">
                <section class="slider-section">
                  <Row class="title-item">
                    <div class="section-title title-wide">
                      <h2>پر فروش ترینها</h2>
                      <a href="#">مشاهده همه</a>
                    </div>
                  </Row>

                  <Row class="product-carousel-container most-sell">
                    <SplideProductCarousel
                      products={mostSellsProducts}
                      cardWidth={"100%"}
                    />
                  </Row>
                </section>
              </Col>
              <Col sm={2} class="grid-item">
                <div class="widget-suggestion dt-sn border pt-3 mt-3">
                  <div class="widget-suggestion-title">
                    <img src="./img/theme/suggestion-title.png" alt="" />
                  </div>
                  <div id="progressBar">
                    <div class="slide-progress"></div>
                  </div>
                  <div id="suggestion-slider" class="suggestion-slider">
                    <SplideProductCarousel
                      products={SuggestionProductsData}
                      perPage={1}
                      autoplaySpeed={3000}
                      showPagination={false}
                      showArrows={false}
                    />
                  </div>
                </div>
              </Col>
            </Row>
           
            <div className="section-banner">
              <SmallBannerList banners={banners} />
            </div>
           
            <div class="row mt-3 mb-5">
              <div class="col-12">
                <div class="category-section dt-sn dt-sl border">
                  <div class="category-section-title dt-sl">
                    <h3>بیش از ۱،۵۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف</h3>
                  </div>
                  <div class="category-section-slider dt-sl">
                    <div class="category-slider owl-carousel">
                      <SplideCategoryCarousel items={categoryItems} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="slider-section dt-sl mb-5">
              <SplideProductCarousel
                products={mostSellsProducts}
                cardWidth={"100%"}
              />
          
            </section>
            <div class="row mt-3 mb-5">
              <div class="col-12">
                <div class="widget-banner large-banner">
                <LargeBanner banners={banners} />
                </div>
              </div>
            </div>
            <section class="slider-section dt-sl mb-5">
              <SplideProductCarousel
                products={mostSellsProducts}
                cardWidth={"100%"}
              />
            </section>
            <section
              class="team-product-suggestion"
              style={{ marginTop: "20px" }}
            >
              <TeamOfferProducts products={offerProducts} />
            </section>

            <section class="slider-section brand-slider dt-sl mb-5">
              <BrandSlider items={brandImages} />
            </section>
          </Container>
        </div>
      </main>
    </>
  );
}
