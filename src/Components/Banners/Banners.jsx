import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './Banners.css'; // Import your CSS file for custom styles

// کامپوننت بنر (مشترک برای بنر بزرگ و کوچک)
const Banner = ({ banner }) => {
  return (
    <Card
      className= {banner.category === "large" ?"m-2 shadow large-banner-card-wrapper": "m-2 shadow card-wrapper"} 
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundSize: 'cover' // تنظیم تصویر به عنوان بک‌گراند
      }}
    >
      <Card.Body className={banner.category === "large" ? "d-flex flex-column justify-content-end card-body large-banner-card-body": "d-flex flex-column justify-content-end card-body "}>
        {banner.discount && (
          <div className="discount-badge">

            <p className="text-danger fw-bold mt-2">{banner.discount}% تخفیف</p>
          </div>
        )}
        <Card.Title as="h6">{banner.title}</Card.Title>
        <Button variant="primary" className="mt-2">
          خرید
        </Button>
      </Card.Body>
    </Card>
  );
};

// کامپوننت برای نمایش بنر بزرگ
const LargeBanner = ({ banners }) => {
  const largeBanner = banners.find((banner) => banner.category === 'large');

  if (!largeBanner) return null; // اگر بنر بزرگ وجود نداشته باشد، چیزی نمایش داده نمی‌شود

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} className="d-flex justify-content-center">
          <Banner banner={largeBanner} />
        </Col>
      </Row>
    </Container>
  );
};

// کامپوننت برای نمایش ردیف‌های بنرهای کوچک
const SmallBannerList = ({ banners }) => {
  const smallBanners = banners.filter((banner) => banner.category !== 'large');
  const firstRow = smallBanners.slice(0, 2);
  const secondRow = smallBanners.slice(2, 6);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        {firstRow.map((banner) => (
          <Col xs={12} sm={6} md={6} key={banner.id} className="d-flex justify-content-center">
            <Banner banner={banner} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center mt-3">
        {secondRow.map((banner) => (
          <Col xs={12} sm={6} md={3} key={banner.id} className="d-flex justify-content-center">
            <Banner banner={banner} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// PropTypes برای بنر
Banner.propTypes = {
  banner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    discount: PropTypes.number,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

// PropTypes برای LargeBanner
LargeBanner.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      discount: PropTypes.number,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

// PropTypes برای SmallBannerList
SmallBannerList.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      discount: PropTypes.number,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
};

// صادرات هر دو کامپوننت
export { LargeBanner, SmallBannerList };