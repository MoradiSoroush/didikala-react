import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  Box,
  Typography,
  Rating,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MostSellsProduct from "../product/MostSellsProduct";
import "./MostSellsCarousel.css";
import "@splidejs/react-splide/css/core";

// استایل‌های کارت
const ProductCard = styled(Card)(({ theme }) => ({
  minWidth: ({ cardWidth }) => cardWidth,
  margin: theme.spacing(1),
  marginBottom: "1rem",
  textAlign: "center",
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: ({ cardBackground }) =>
    cardBackground || theme.palette.background.paper,
  position: "relative",
  flexShrink: 0,
}));

const DiscountChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
  backgroundColor: "#f86b75",
  color: theme.palette.common.white,
  fontWeight: "bold",
  "& span": {
      margin: 0,
      padding: "2px 8px",
  },
}));

// استایل‌های Splide
const splideStyles = {
  width: ({ cardWidth, perPage }) => `calc(${perPage * (cardWidth + 10)}px)`,
  margin: "auto",
  direction: "rtl", // اضافه کردن جهت RTL به کانتینر
  ".splide__arrow": {
    background: "#f7858d",
    width: 40,
    height: 40,
    borderRadius: "50%",
    boxShadow: 2,
    opacity: 1,
    "&:hover": { background: "#f7858dcc" },
    "& svg": { fill: ({ arrowColor }) => arrowColor || "#ffffff" },
    "&:disabled": { opacity: 0.4 },
  },
  ".splide__arrow--prev": { right: 10 }, // برعکس کردن موقعیت فلش‌ها
  ".splide__arrow--next": { left: 10 },
  ".splide__pagination": {
    display: "flex",
    justifyContent: "center",
    gap: 1,
    marginTop: "30px",
    position: "relative",
  },
  ".splide__pagination__page": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: ({ inactiveDotColor }) => inactiveDotColor || "grey.400",
    border: "none",
    cursor: "pointer",
    transition: "width 0.3s ease, border-radius 0.3s ease",
    "&:hover": {
      background: ({ inactiveDotColor }) =>
        `${inactiveDotColor}cc` || "grey.500",
    },
    "&.is-active": {
      width: 30,
      height: 8,
      borderRadius: 4,
      background: ({ activeDotColor }) => activeDotColor || "#f7858d",
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
  autoplaySpeed = 5000, // کاهش به 5 ثانیه برای تجربه کاربری بهتر
  showPagination = true,
  activeDotColor = "#f7858d",
  inactiveDotColor = "grey",
  useMostSellsProduct = false,
  arrowColor = "#ffffff",
  showArrows = true,
  perPage = 5,
  type = "loop",
}) => {
  // مدیریت مدال ویرایش
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // باز کردن مدال برای محصول انتخاب‌شده
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const submitProductUpdate = (updatedData) => {
    console.log("Updated product data:", updatedData);
    // اینجا می‌توانید منطق به‌روزرسانی محصول (مثلاً ارسال به API) را اضافه کنید
    closeEditModal();
  };

  // اگر محصولات کافی نباشد
  if (products.length === 0) {
    return <Typography>محصولی برای نمایش وجود ندارد</Typography>;
  }

  const splideOptions = {
    type: products.length < perPage ? "slide" : type,
    perPage: Math.min(perPage, products.length),
    perMove: 1,
    gap: 10,
    pagination: showPagination && products.length > 1,
    arrows: showArrows && products.length > perPage,
    autoplay: products.length > perPage,
    interval: autoplaySpeed,
    pauseOnHover: true,
    focus: 0, // غیرفعال کردن focus برای محصولات کم
    direction: "rtl", // اضافه کردن جهت RTL
  };

  return (
    <Box
      sx={splideStyles}
      cardWidth={cardWidth}
      perPage={perPage}
      activeDotColor={activeDotColor}
      inactiveDotColor={inactiveDotColor}
      arrowColor={arrowColor}
    >
      <Splide options={splideOptions} aria-label="Product Carousel">
        {products.map((product) => (
          <SplideSlide key={product.id}>
            {useMostSellsProduct ? (
              <MostSellsProduct product={product} />
            ) : (
              <ProductCard
                cardWidth={cardWidth}
                cardBackground={cardBackground}
              >
                <div className="mui-card-top-content">
                  {showDiscount && product.discount && (
                    <DiscountChip
                      label={`%${product.discount}`}
                      className="discount-chip"
                    />
                  )}
                  {showRating && (
                    <Rating
                      name={`rating-${product.id}`}
                      value={product.rating}
                      readOnly
                      precision={1}
                      sx={{ mt: 1 }}
                      className="product-rating"
                    />
                  )}
                </div>

                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <CardContent className="product-card-content">
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="product-title"
                  >
                    <a href="shop-single.html">{product.name}</a>
                  </Typography>
                  {showCategory && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="a"
                      href="shop-categories.html"
                      sx={{ textDecoration: "none", display: "block", mb: 1 }}
                      className="product-category"
                    >
                      {product.category}
                    </Typography>
                  )}
                  {showPrice && (
                    <Typography
                      variant="h6"
                      color="black"
                      className="product-price"
                    >
                      {product.price} تومان
                    </Typography>
                  )}

<Button
  variant="outlined"
  size="small"
  onClick={() => openEditModal(product)}
 className="edit-button"
>
خرید
</Button>
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
