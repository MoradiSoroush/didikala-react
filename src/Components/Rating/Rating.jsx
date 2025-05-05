import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';

// استایل‌های سفارشی
const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const StarRating = ({ score = 0, size = 'medium', showLabel = false }) => {
  // اطمینان از اینکه score بین 0 و 5 باشد
  const normalizedScore = Math.max(0, Math.min(5, score));
  
  // محاسبه تعداد ستاره‌های پر و خالی
  const fullStars = Math.floor(normalizedScore);
  const hasHalfStar = normalizedScore % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // عملیات نمونه بر اساس score
  const getRatingDescription = (score) => {
    if (score >= 4.5) return 'عالی';
    if (score >= 3.5) return 'خوب';
    if (score >= 2.5) return 'متوسط';
    if (score >= 1) return 'ضعیف';
    return 'بدون امتیاز';
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <RatingContainer>
        {/* ستاره‌های پر */}
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon
            key={`full-${index}`}
            fontSize={size}
            sx={{ color: 'gold' }}
          />
        ))}
        {/* ستاره نیمه (در صورت وجود) */}
        {hasHalfStar && (
          <StarIcon
            key="half"
            fontSize={size}
            sx={{ color: 'gold', opacity: 0.5 }}
          />
        )}
        {/* ستاره‌های خالی */}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorderIcon
            key={`empty-${index}`}
            fontSize={size}
            sx={{ color: 'grey.500' }}
          />
        ))}
      </RatingContainer>
      {/* نمایش توضیحات (اختیاری) */}
      {showLabel && (
        <Typography variant="body2" color="text.secondary">
          {getRatingDescription(normalizedScore)}
        </Typography>
      )}
    </Box>
  );
};

export default StarRating;