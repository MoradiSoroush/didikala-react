import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Typography, Card, CardContent, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import '@splidejs/react-splide/css/core';

// استایل‌های کارت
const ProductCard = styled(Card)(({ theme }) => ({
  minWidth: ({ cardWidth }) => cardWidth,
  margin: theme.spacing(1),
  marginBottom: '1rem',
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: ({ cardBackground }) => cardBackground || theme.palette.background.paper,
  position: 'relative',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

// استایل‌های Splide
const splideStyles = {
  width: ({ cardWidth, perPage }) => `calc(${perPage * cardWidth}px + ${(perPage - 1) * 10}px)`, // عرض کانتینر
  position: 'relative',
  '.splide__arrow': {
    background: '#f7858d',
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: 2,
    opacity: 1,
    '&:hover': { background: '#f7858dcc' },
    '& svg': { fill: ({ arrowColor }) => arrowColor || '#ffffff' },
    '&:disabled': { opacity: 0.4 },
  },
  '.splide__arrow--prev': { left: 10 },
  '.splide__arrow--next': { right: 10 },
  '.splide__pagination': {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    marginTop: '30px', // فاصله 30px بین نقاط و کانتینر
    position: 'relative',
  },
  '.splide__pagination__page': {
    width: 8, // دایره‌ای در حالت غیرفعال
    height: 8,
    borderRadius: '50%',
    background: ({ inactiveDotColor }) => inactiveDotColor || '#f7858dcc',
    border: 'none',
    cursor: 'pointer',
    transition: 'width 0.3s ease, border-radius 0.3s ease', // فقط تغییر شکل
    '&:hover': { background: ({ inactiveDotColor }) => `${inactiveDotColor}cc` || '#f7858dcc' },
    '&.is-active': {
      width: 20, // کشیده در حالت فعال
      height: 8,
      borderRadius: 4,
      background: ({ activeDotColor }) => activeDotColor || '#f7858dcc',
    },
  },
};

const SplideCategoryCarousel = ({
  items = [], // آرایه آیتم‌ها شامل icon, title, categoryCount
  cardWidth = 250,
  cardBackground,
  itemsPerPage = 5,
  autoplaySpeed = 3000,
  showPagination = true,
  activeDotColor = '#f7858d',
  inactiveDotColor = '#f7858d',
  arrowColor = '#ffffff',
  arrowBackground = '#f7858d',
  showArrows = true,
  perPage = items.length,
  type = 'loop',
}) => {
  // محاسبه تعداد صفحات
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // محاسبه عرض هر کارت
  const calculatedCardWidth = cardWidth / perPage;

  const splideOptions = {
    type,
    perPage, // تعداد آیتم‌ها در هر صفحه
    perMove: 1, // جابه‌جایی یکی‌یکی
    gap: 1, // فاصله بین آیتم‌ها
    pagination: showPagination && totalPages > 1, // نقاط فقط برای بیش از یک صفحه
    arrows: showArrows && items.length > itemsPerPage,
    autoplay: items.length > itemsPerPage,
    interval: autoplaySpeed,
    pauseOnHover: true,
    focus: 'center',
  };

  return (
    <Box sx={splideStyles} cardWidth={calculatedCardWidth} perPage={perPage} activeDotColor={arrowColor} inactiveDotColor={inactiveDotColor} arrowColor={arrowColor} arrowBackground={arrowBackground}>
      <Splide options={splideOptions} aria-label="Category Carousel">
        {items.map((item) => (
          <SplideSlide key={item.id}>
            <ProductCard cardWidth={calculatedCardWidth} cardBackground={cardBackground} style={{boxShadow:"none"}}>
              <CardContent>
                {item.icon && 
               
                      <img src={item.icon} alt={item.title} style={{ width: 40, height: 40 ,marginTop:0}} />
                  }
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#00bfd6">
                  {item.categoryCount}+ کالا
                </Typography>
              </CardContent>
            </ProductCard>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default SplideCategoryCarousel;