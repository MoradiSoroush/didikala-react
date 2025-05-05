import React from 'react'
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import "./SplideSlider.css"

const CustomCarousel = ({
  items, 
  options = {}, 
  slideClassName = '', 
  renderItem, 
}) => {
  
    console.log(items)
  const defaultOptions = {
    type: 'fade', // نوع کاروسل (loop, slide, fade)
    perPage: 1, // تعداد آیتم‌های نمایش‌داده‌شده در هر صفحه
    perMove: 1, // تعداد آیتم‌های جابه‌جاشده در هر حرکت
    gap: '1rem', // فاصله بین اسلایدها
    pagination: true, // نمایش دکمه‌های صفحه‌بندی
    arrows: true, // نمایش فلش‌های ناوبری
    autoplay: true, // پخش خودکار
    ...options, // ادغام تنظیمات سفارشی
  };

  return (
    <Splide options={defaultOptions} aria-label="Custom Carousel" className="custom-carousel" >
      {items.map((item, index) => (
        <SplideSlide key={index} className={slideClassName}>
          {renderItem ? (
            renderItem(item, index) // رندر سفارشی آیتم
          ) : (
            <div className="carousel-item">
              {/* رندر پیش‌فرض در صورت عدم ارائه renderItem */}
              {typeof item === 'string' ? (
                <img src={item} alt={`Slide ${index + 1}`} />
              ) : (
                item // اگر آیتم یک کامپوننت یا المنت JSX باشه
              )}
            </div>
          )}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CustomCarousel;