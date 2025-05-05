import React from "react";
import Rating from "../Rating/Rating";

export default function MostSellsProduct({product}) {

    const { id, name, category, price, image, rating } = product;



  return (
    <div class="item">
      <div class="product-card">
        <div class="product-head">
          <div class="rating-stars">
            <Rating score={rating} size="small" showLabel={false} />
          </div>
        </div>
        <a class="product-thumb" href="shop-single.html">
          <img src={image} alt="Product Thumbnail" />
        </a>
        <div class="product-card-body">
          <h5 class="product-title">
            <a href="shop-single.html">{name} </a>
          </h5>
          <a class="product-meta" href="shop-categories.html">
            {category}
          </a>
          <span class="product-price">{price.toLocaleString()} تومان</span>
        </div>
      </div>
    </div>
  );
}
