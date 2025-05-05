import React, { useState, useEffect } from 'react';
import Rating from "../Rating/Rating"
import {Box,Typography,Button,Card,CardMedia,CardContent,Chip,LinearProgress} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// استایل‌های سفارشی
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  margin: 'auto',
  overflow: 'hidden',
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
  right: theme.spacing(1),
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
  left: 10,
});

const NextButton = styled(NavigationButton)({
  right: 10,
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
  cardWidth = "100%",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

      console.log(products)
  },[])


  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // عرض هر صفحه
  const pageWidth = itemsPerPage * (cardWidth + 16); // 16 برای margin بین کارت‌ها

  // اتوپلی و پروگرس بار
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
      setProgress(0); // ریست پروگرس بار
    }, autoplaySpeed);

    // انیمیشن پروگرس بار
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (autoplaySpeed / 100), 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [autoplaySpeed, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    setProgress(0); // ریست پروگرس بار
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    setProgress(0); // ریست پروگرس بار
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setProgress(0); // ریست پروگرس بار
  };

  return (
    <Box>
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
        <CarouselTrack sx={{ transform: `translateX(-${currentIndex * pageWidth}px)` }}>
          {products.map((product) => (
            <div class="item">
            <div class="product-card mb-3 shadow-unset">
                <div class="product-head">
                    <div class="rating-stars">
                       <Rating score={product.rating} />
                    </div>
                </div>
                <a class="product-thumb" href="shop-single.html">
                    <img src={product.image} alt="Product Thumbnail"/>
                </a>
                <div class="product-card-body">
                    <h5 class="product-title">
                        <a href="shop-single.html">{product.name} </a>
                    </h5>
                    <a class="product-meta" href="shop-categories.html"> {product.category}</a>
                    <span class="product-price">{product.price} تومان</span>
                </div>
            </div>
        </div>
          ))}
        </CarouselTrack>
        <PrevButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </PrevButton>
        <NextButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </NextButton>
      </CarouselContainer>
      {/* نقاط ناوبری */}
      {showPagination && totalPages > 1 && (
        <PaginationContainer>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationDot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
              sx={{
                backgroundColor: index === currentIndex ? activeDotColor : inactiveDotColor,
              }}
            />
          ))}
        </PaginationContainer>
      )}
    </Box>
  );
};

export default SuggestionProductCarousel;