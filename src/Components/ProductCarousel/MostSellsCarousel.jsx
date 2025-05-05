import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Typography, Rating, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import MostSellsProduct from '../product/MostSellsProduct';
import "./MostSellsCarousel.css"; // استایل‌های سفارشی برای کاروسل
import '@splidejs/react-splide/css/core';

// استایل‌های کارت
const ProductCard = styled(Card)(({ theme }) => ({
  minWidth: ({ cardWidth }) => cardWidth,
  margin: theme.spacing(1),
  marginBottom: '1rem', // فاصله زیر کارت‌ها
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: ({ cardBackground }) => cardBackground || theme.palette.background.paper,
  position: 'relative',
  flexShrink: 0,
}));

const DiscountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

// استایل‌های Splide
const splideStyles = {
  width: ({ cardWidth, perPage }) => `calc(${perPage * cardWidth}px + ${(perPage - 1) * 10}px)`, // عرض کانتینر
  position: 'relative', // اطمینان از موقعیت صحیح کانتینر
  '.splide__arrow': {
    background: '#f7858d', // رنگ دکمه‌های ناوبری
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
    marginTop: '30px', // فاصله 30px بین نقاط و کانتینر کاروسل
    position: 'relative', // اطمینان از عدم همپوشانی
  },
  '.splide__pagination__page': {
    width: 8, // دایره‌ای در حالت غیرفعال
    height: 8,
    borderRadius: '50%',
    background: ({ inactiveDotColor }) => inactiveDotColor || 'grey.400',
    border: 'none',
    cursor: 'pointer',
    transition: 'width 0.3s ease, border-radius 0.3s ease', // فقط تغییر شکل
    '&:hover': { background: ({ inactiveDotColor }) => `${inactiveDotColor}cc` || 'grey.500' },
    '&.is-active': {
      width: 30, // کشیده در حالت فعال
      height: 8,
      borderRadius: 4,
      background: ({ activeDotColor }) => activeDotColor || '#f7858d',
    },
  },
};

const SplideProductCarousel = ({
  products = [],
  cardWidth = 200,
  cardBackground,
  showCategory = true,
  showPrice = true,
  showRating = true,
  showDiscount = true,
  itemsPerPage = 5,
  autoplaySpeed = 30000,
  showPagination = true,
  activeDotColor = '#f7858d',
  inactiveDotColor = 'grey',
  useMostSellsProduct = false,
  arrowColor = '#ffffff',
  arrowBackground = '#f7858d',
  showArrows = true,
  perPage = 5,
  type = 'loop',
}) => {
  // محاسبه تعداد صفحات
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // محاسبه عرض هر کارت
  const calculatedCardWidth = cardWidth / perPage;

  const splideOptions = {
    type,
    perPage, // تعداد آیتم‌ها در هر صفحه
    perMove: 1, // جابه‌جایی یکی‌یکی
    gap: 10, // فاصله بین آیتم‌ها
    pagination: showPagination && totalPages > 1, // نقاط فقط برای بیش از یک صفحه
    arrows: showArrows && products.length > itemsPerPage,
    autoplay: products.length > itemsPerPage,
    interval: autoplaySpeed,
    pauseOnHover: true,
    focus: 'center',
  };

  return (
    <Box sx={splideStyles} cardWidth={calculatedCardWidth} perPage={perPage} activeDotColor={activeDotColor} inactiveDotColor={inactiveDotColor} arrowColor={arrowColor} arrowBackground={arrowBackground}>
      <Splide options={splideOptions} aria-label="Product Carousel">
        {products.map((product) => (
          <SplideSlide key={product.id}>
            {useMostSellsProduct ? (
              <MostSellsProduct product={product} />
            ) : (
              <ProductCard cardWidth={calculatedCardWidth} cardBackground={cardBackground}>
                {showDiscount && product.discount && <DiscountChip label={`${product.discount} `} className='discount-chip'/>}
                <CardMedia component="img" height="200" image={product.image} alt={product.name} className='product-iamge'/>
                <CardContent className="product-card-content">
                  <Typography variant="h6" gutterBottom className='product-title'>
                    <a href="shop-single.html">{product.name}</a>
                  </Typography>
                  {showCategory && (
                    <Typography variant="body2" color="text.secondary" component="a" href="shop-categories.html" sx={{ textDecoration: 'none', display: 'block', mb: 1 }} className='product-category'>
                      {product.category}
                    </Typography>
                  )}
                  {showPrice && <Typography variant="h6" color="black" className='product-price'>{product.price}</Typography>}
                  {showRating && <Rating name={`rating-${product.id}`} value={product.rating} readOnly precision={1} sx={{ mt: 1 }} className='product-rating'/>}
                </CardContent>
              </ProductCard>
            )}
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default SplideProductCarousel;