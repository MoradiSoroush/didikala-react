import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './SplideSlider.css';

const CustomCarousel = ({
  items,
  options = {},
  slideClassName = '',
  renderItem,
}) => {
  console.log(items);

  const defaultOptions = {
    type: items.length <= 1 ? 'fade' : options.type || 'fade', // جلوگیری از لوپ با آیتم‌های کم
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: items.length > 1, // فقط برای بیش از یک آیتم
    arrows: items.length > 1,
    autoplay: items.length > 1,
    direction: 'rtl', // جهت RTL
    ...options, // ادغام تنظیمات سفارشی
  };

  return (
    <div dir="rtl" className="custom-carousel-wrapper">
      <Splide
        options={defaultOptions}
        aria-label="Custom Carousel"
        className="custom-carousel"
      >
        {items.map((item, index) => (
          <SplideSlide key={index} className={slideClassName}>
            {renderItem ? (
              renderItem(item, index)
            ) : (
              <div className="carousel-item">
                {typeof item === 'string' ? (
                  <img src={item} alt={`Slide ${index + 1}`} />
                ) : (
                  item
                )}
              </div>
            )}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CustomCarousel;