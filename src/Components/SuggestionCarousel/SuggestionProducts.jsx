import React, { useState, useEffect, useRef } from 'react';
import Rating from "../Rating/Rating";
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// استایل‌های سفارشی
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  margin: 'auto',
  overflow: 'hidden',
  direction: 'rtl', // تنظیم جهت RTL برای کانتینر
}));

const CarouselTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  minWidth: ({ cardWidth }) => cardWidth || 300,
  margin: theme.spacing(1),
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: ({ cardBackground }) => cardBackground || theme.palette.background.paper,
  position: 'relative',
}));

const DiscountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  left: theme.spacing(1), // تغییر از right به left برای RTL
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  minWidth: 40,
  height: 40,
  borderRadius: '50%',
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const PrevButton = styled(NavigationButton)({
  right: 10, // تغییر از left به right برای RTL
});

const NextButton = styled(NavigationButton)({
  left: 10, // تغییر از right به left برای RTL
});

const ProgressBarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[300],
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  gap: theme.spacing(1),
}));

const PaginationDot = styled(Box)(({ theme, active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[400],
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[500],
  },
}));

const SuggestionProductCarousel = ({
  products = [],
  cardWidth = 300,
  cardBackground = null,
  showCategory = true,
  showPrice = true,
  showRating = false,
  showDiscount = true,
  itemsPerPage = 1,
  autoplaySpeed = 5000,
  progressBarColor = 'primary.main',
  showPagination = true,
  activeDotColor = 'primary.main',
  inactiveDotColor = 'grey.400',
}) => {
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage); // شروع از موقعیت کپی‌های ابتدایی
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  // تعداد آیتم‌های اضافی برای لوپ (کپی‌های ابتدا و انتها)
  const extraItems = itemsPerPage;

  // ایجاد لیست محصولات با کپی‌های اضافی
  const extendedProducts = [
    ...products.slice(-extraItems), // کپی محصولات آخر برای ابتدا
    ...products,
    ...products.slice(0, extraItems), // کپی محصولات ابتدا برای انتها
  ];

  // محاسبه تعداد کل صفحات واقعی (بدون کپی‌ها)
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // عرض هر صفحه
  const pageWidth = itemsPerPage * (cardWidth + 16); // 16 برای margin بین کارت‌ها

  // مدیریت اتوپلی و پروگرس بار
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setProgress(0); // ریست پروگرس بار
    }, autoplaySpeed);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (autoplaySpeed / 100), 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [autoplaySpeed]);

  // مدیریت انتقال‌ها برای لوپ بی‌نهایت
  useEffect(() => {
    if (currentIndex === 0) {
      // وقتی به کپی‌های ابتدایی رسیدیم، به انتهای لیست اصلی بپرید
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalPages);
      }, 500); // زمان همگام با transition
    } else if (currentIndex === totalPages + extraItems) {
      // وقتی به کپی‌های انتهایی رسیدیم، به ابتدای لیست اصلی بپرید
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extraItems);
      }, 500); // زمان همگام با transition
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, totalPages, extraItems]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setProgress(0);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index + extraItems); // تنظیم با در نظر گرفتن کپی‌های ابتدایی
    setProgress(0);
  };

  return (
    <Box sx={{ direction: 'rtl' }}> {/* اطمینان از RTL بودن کل کامپوننت */}
      {/* پروگرس بار */}
      <ProgressBarContainer>
        <StyledLinearProgress
          variant="determinate"
          value={progress}
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: progressBarColor,
            },
          }}
        />
      </ProgressBarContainer>
      {/* کاروسل */}
      <CarouselContainer>
        <CarouselTrack
          ref={trackRef}
          sx={{
            transform: `translateX(${currentIndex * pageWidth}px)`, // معکوس کردن جهت translateX برای RTL
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {extendedProducts.map((product, index) => (
            <ProductCard key={index} cardWidth={cardWidth} cardBackground={cardBackground} className='product-card'>
              <CardContent className='carousel-content'>
                {showRating && (
                  <Box className="rating-stars">
                    <Rating score={product.rating} />
                  </Box>
                )}
                {showDiscount && product.discount && (
                  <DiscountChip label={`%${product.discount}`} />
                )}
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain' }}
                />
                <Typography variant="h6" component="h5" className="product-title">
                  <a href="shop-single.html">{product.name}</a>
                </Typography>
                {showCategory && (
                  <Typography variant="body2" className="product-meta">
                    <a href="shop-categories.html">{product.category}</a>
                  </Typography>
                )}
                {showPrice && (
                  <Typography variant="body1" className="product-price">
                    {product.price} تومان
                  </Typography>
                )}
              </CardContent>
            </ProductCard>
          ))}
        </CarouselTrack>
        <PrevButton onClick={handlePrev}>
          <ArrowForwardIosIcon /> 
        </PrevButton>
        <NextButton onClick={handleNext}>
          <ArrowBackIosIcon /> 
        </NextButton>
      </CarouselContainer>
      {/* نقاط ناوبری */}
      {showPagination && totalPages > 1 && (
        <PaginationContainer>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationDot
              key={index}
              active={index === (currentIndex - extraItems) % totalPages}
              onClick={() => handleDotClick(index)}
              sx={{
                backgroundColor:
                  index === (currentIndex - extraItems) % totalPages
                    ? activeDotColor
                    : inactiveDotColor,
              }}
            />
          ))}
        </PaginationContainer>
      )}
    </Box>
  );
};

export default SuggestionProductCarousel;