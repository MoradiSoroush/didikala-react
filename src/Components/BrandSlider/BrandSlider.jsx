import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './BrandSlider.css';

const BrandSlider = ({
  items,
  options = {},
  slideClassName = '',
  renderItem,
}) => {
  const defaultOptions = {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '1rem', // فاصله به صورت rem برای بهتر دیده شدن
    pagination: false, // غیرفعال کردن صفحه‌بندی برای ظاهر تمیزتر
    arrows: true,
    autoplay: true,
    interval: 3000, // فاصله زمانی اتوپلی (3 ثانیه)
    direction: 'rtl', // تنظیم جهت RTL برای Splide
    breakpoints: {
      768: { perPage: 3, gap: '0.5rem' }, // 3 آیتم در موبایل با فاصله کمتر
      576: { perPage: 2, gap: '0.5rem' }, // 2 آیتم در صفحه‌های خیلی کوچک
    },
    ...options, // اجازه می‌ده پراپس‌های خارجی، تنظیمات پیش‌فرض رو اوورراید کنن
  };

  return (
    <div className="row" dir="rtl"> {/* اضافه کردن dir="rtl" به کانتینر اصلی */}
      <div className="col-12">
        <Splide
          options={defaultOptions}
          aria-label="Brand Carousel"
          className="brand-slider"
        >
          {items.map((item, index) => (
            <SplideSlide key={index} className={slideClassName}>
              {renderItem ? (
                renderItem(item, index)
              ) : (
                <div className="carousel-item">
                  {typeof item === 'string' ? (
                    <img
                      src={item}
                      alt={`Brand ${index + 1}`}
                      className="brand-image"
                    />
                  ) : (
                    item
                  )}
                </div>
              )}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default BrandSlider;