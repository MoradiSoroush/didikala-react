import React from 'react';
import './TeamOfferProducts.css'; // استایل‌ها جدا تعریف شدن
import Rating from '../Rating/Rating';


const TeamOfferProducts = ({ products }) => {
    
  console.log(products)
  // تقسیم محصولات به 3 گروه برای 3 ستون
  const chunkSize = Math.ceil(products.length / 3);
  const columns = [
    products.slice(0, chunkSize),
    products.slice(chunkSize, 2 * chunkSize),
    products.slice(2 * chunkSize)
  ];

  return (
    <section className="dt-sl dt-sn mb-5">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-sm-title title-wide no-after-title-wide">
            <h2>پیشنهاد ما</h2>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        {columns.map((column, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 pt-4">
            {column.map((product) => (
              <div key={product.id} className="card-horizontal-product border-bottom rounded-0">
                <div className="card-horizontal-product-thumb">
                  <a href="#">
                    <img src={product.img} alt={product.name} />
                  </a>
                </div>
                <div className="card-horizontal-product-content">
                  <div className="card-horizontal-product-title">
                    <a href="#">
                      <h3>{product.name}</h3>
                    </a>
                  </div>
                  <div className="rating-stars">
                    <Rating score={product.rating} size="small" showLabel={false} />
                
                  </div>
                  <div className="card-horizontal-product-price">
                    <span>{product.price.toLocaleString()} تومان</span>
                  </div>
                  <div className="card-horizontal-product-buttons">
                    <a href="#" className="btn btn-outline-info">
                      جزئیات محصول
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamOfferProducts;